export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-3 text-4xl mb-4">
          <span>🇸🇪</span>
          <span>✈️</span>
          <span>🇳🇴</span>
        </div>
        <h3 className="text-xl font-display font-bold mb-2">Sweden &amp; Norway Trip Guide</h3>
        <p className="text-gray-400 text-sm mb-6">
          Made with ❤️ for our Scandinavian adventure
        </p>
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <span>Stockholm 🏰</span>
          <span>Oslo 🏙️</span>
          <span>Bergen 🌊</span>
          <span>The Fjords 🏔️</span>
        </div>
        <p className="text-gray-600 text-xs mt-6">© {new Date().getFullYear()} — Bon voyage!</p>
      </div>
    </footer>
  )
}
