export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-teal-700">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 opacity-15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400 opacity-10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex justify-center gap-4 text-6xl mb-6">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>🇸🇪</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🇳🇴</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-tight">
          Sweden &amp; Norway
          <span className="block text-yellow-400">Trip Guide</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 mb-4 max-w-2xl mx-auto leading-relaxed">
          Discover the magic of Scandinavia — medieval old towns, dramatic fjords, vibrant cities, and unforgettable experiences.
        </p>

        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-10 border border-white/30">
          <span>🗓️</span> May 2026
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('stockholm')}
            className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            🇸🇪 Explore Stockholm
          </button>
          <button
            onClick={() => scrollTo('norway')}
            className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            🇳🇴 Explore Norway
          </button>
        </div>

        <div className="mt-16 animate-bounce text-white/60">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
