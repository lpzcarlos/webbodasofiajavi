export default function Music() {
  return (
    <section className="py-24 px-4 w-full flex flex-col items-center justify-center text-center">
      <h2 className="font-serif text-5xl md:text-6xl text-text-primary mb-8 font-light">
        Ponle música a nuestra historia
      </h2>

      <div className="max-w-xl mb-12">
        <p className="font-serif italic text-text-secondary text-lg leading-relaxed">
          Ayúdanos a crear la banda sonora perfecta. Añade tus canciones favoritas a nuestra lista de Spotify y las pondremos en la fiesta.
        </p>
      </div>

      <a
        href="https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#1DB954] hover:bg-[#1ed760] text-white transition-colors duration-300 font-sans tracking-widest text-sm uppercase shadow-lg shadow-[#1DB954]/20"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.84.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.84.241 1.2zM19.08 9.66C15.12 7.26 8.76 7.02 5.1 8.16c-.6.18-1.26-.18-1.44-.78-.18-.6.18-1.26.78-1.44 4.26-1.32 11.28-1.08 15.72 1.56.539.3.719 1.02.419 1.56-.299.54-1.02.72-1.559.42z" />
        </svg>
        Añadir canciones a la lista
      </a>
    </section>
  );
}
