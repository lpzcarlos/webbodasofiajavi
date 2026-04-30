import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  style: ['normal', 'italic'],
  variable: '--font-cormorant'
});

const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["300", "400"],
  variable: '--font-lato'
});

export const metadata: Metadata = {
  title: "Sofía & Javier | 03.10.2026",
  description: "Nuestra historia de amor que comienza aquí. Acompáñanos en nuestro gran día.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${lato.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
