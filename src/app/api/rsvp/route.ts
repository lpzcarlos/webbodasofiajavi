import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, plusOne, plusOneName, bus, allergies, otherAllergies, allergiesPlusOne, otherAllergiesPlusOne, message } = body;

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL?.trim();
    // En las variables de entorno, los saltos de línea a veces se escapan como "\\n", esto lo arregla
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.trim().replace(/\\n/g, '\n');
    const sheetId = process.env.GOOGLE_SHEET_ID?.trim();

    if (!clientEmail || !privateKey || !sheetId) {
      console.error("Faltan variables de entorno para Google Sheets.");
      return NextResponse.json({ error: 'Faltan credenciales de servidor' }, { status: 500 });
    }

    // Autenticar con Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Preparar la fila con las nuevas columnas:
    // A: Nombre, B: Acompañante, C: Nombre Acomp., D: Servicio de bus,
    // E: Alergias/Menu especial, F: Alguna otra, G: Alergias/Menu especial Acomp., H: Alguna otra Acomp., I: Mensaje
    const row = [
      name || '',
      plusOne === 'yes' ? 'Sí' : 'No',
      plusOne === 'yes' ? (plusOneName || '') : '',
      bus === 'yes' ? 'Sí' : 'No',
      Array.isArray(allergies) && allergies.length > 0 ? allergies.join(', ') : 'Ninguna',
      otherAllergies || '',
      plusOne === 'yes' ? (Array.isArray(allergiesPlusOne) && allergiesPlusOne.length > 0 ? allergiesPlusOne.join(', ') : 'Ninguna') : '',
      plusOne === 'yes' ? (otherAllergiesPlusOne || '') : '',
      message || ''
    ];

    // Insertar en la primera hoja
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'A:I',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error al conectar con Google Sheets:', error);
    return NextResponse.json({ error: 'Error al procesar la solicitud', details: error.message }, { status: 500 });
  }
}
