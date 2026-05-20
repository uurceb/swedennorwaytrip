import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CitySection from './components/CitySection'
import TipCard from './components/TipCard'
import Footer from './components/Footer'
import { stockholm } from './data/stockholm'
import { norway } from './data/norway'

const generalTips = [
  "Both Sweden and Norway are extremely safe countries — perfect for solo and family travel alike.",
  "Scandinavian summers offer incredibly long daylight hours — in June you can enjoy 18-20 hours of daylight in Stockholm and even more further north.",
  "Pack layers! Weather can change quickly, especially around the Norwegian fjords.",
  "Both countries have excellent free hiking and nature access laws (Allemansrätten in Sweden / Allemannsretten in Norway) — you can roam freely in nature.",
  "Download offline maps (Maps.me or Google Maps offline) before heading to remote fjord areas where signal can be spotty.",
  "Credit cards are accepted almost everywhere — you may never need cash in either country.",
  "Tipping is appreciated but not obligatory — rounding up the bill or 10% is generous.",
  "The Bergen Railway (Oslo to Bergen) and the Flåm Railway are among the world's most scenic train journeys — book in advance!",
]

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />

      {/* Stockholm section */}
      <CitySection data={stockholm} variant="sweden" />

      {/* Norway section */}
      <CitySection data={norway} variant="norway" />

      {/* General Travel Tips section */}
      <section id="tips" className="py-20 bg-gradient-to-br from-fjord to-norway-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-5xl mb-4 block">💡</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-3">
              Scandinavia Travel Tips
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              General advice to help you get the most out of your Sweden and Norway adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generalTips.map((tip, i) => (
              <TipCard key={i} tip={tip} index={i} accent="yellow" />
            ))}
          </div>

          {/* Quick reference card */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Quick Reference</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { label: 'Sweden Currency', value: 'SEK (Krona)', emoji: '💳' },
                { label: 'Norway Currency', value: 'NOK (Krone)', emoji: '💳' },
                { label: 'Language', value: 'Swedish / Norwegian', emoji: '🗣️' },
                { label: 'English?', value: 'Widely spoken', emoji: '✅' },
                { label: 'Power Plug', value: 'Type C/F (EU)', emoji: '🔌' },
                { label: 'Driving', value: 'Right-hand side', emoji: '🚗' },
                { label: 'Emergency', value: '112', emoji: '🆘' },
                { label: 'Time Zone', value: 'CET (UTC+1)', emoji: '🕐' },
              ].map(({ label, value, emoji }) => (
                <div key={label} className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl mb-1">{emoji}</div>
                  <div className="text-white/60 text-xs mb-1">{label}</div>
                  <div className="text-white font-semibold text-sm">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
