import PlaceCard from './PlaceCard'
import TipCard from './TipCard'

export default function CitySection({ data, variant = 'sweden' }) {
  const isSweden = variant === 'sweden'

  const headerGradient = isSweden
    ? 'from-sweden-blue to-fjord'
    : 'from-norway-red to-norway-blue'

  const accentBorder = isSweden ? 'border-sweden-yellow' : 'border-norway-red'
  const accentBg = isSweden ? 'bg-sweden-yellow/10' : 'bg-norway-red/10'
  const accentText = isSweden ? 'text-sweden-blue' : 'text-norway-red'
  const tipAccent = isSweden ? 'blue' : 'red'

  return (
    <section id={isSweden ? 'stockholm' : 'norway'} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`relative rounded-3xl bg-gradient-to-r ${headerGradient} p-8 sm:p-12 mb-14 overflow-hidden shadow-2xl`}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl sm:text-6xl">{data.emoji}</span>
              <div>
                <p className="text-white/70 text-sm font-semibold uppercase tracking-widest">
                  {data.country}
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
                  {data.title}
                </h2>
                <p className="text-white/80 text-lg mt-1">{data.subtitle}</p>
              </div>
            </div>
            <p className="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>

        {/* If norway, render city by city; otherwise render highlights directly */}
        {data.cities ? (
          <div className="space-y-16">
            {data.cities.map((city) => (
              <div key={city.name}>
                {/* City sub-header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-4xl">{city.emoji}</span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900">
                      {city.name}
                    </h3>
                    <p className="text-gray-500 font-medium">{city.subtitle}</p>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent ml-4 hidden sm:block" />
                </div>
                <p className="text-gray-600 mb-8 max-w-3xl text-base leading-relaxed">
                  {city.description}
                </p>

                {/* Place cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.highlights.map((place) => (
                    <PlaceCard key={place.name} {...place} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {data.highlights.map((place) => (
              <PlaceCard key={place.name} {...place} />
            ))}
          </div>
        )}

        {/* Food section */}
        {data.food && (
          <div className={`mt-16 p-8 rounded-2xl ${accentBg} border-l-4 ${accentBorder}`}>
            <h3 className={`text-2xl font-display font-bold mb-6 ${accentText}`}>
              🍽️ Must-Try Food &amp; Drink
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.food.map((item) => (
                <div key={item.name} className="bg-white rounded-xl p-4 shadow-sm">
                  <p className="font-bold text-gray-900 mb-1">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Practical tips */}
        {data.practicalTips && (
          <div className="mt-12">
            <h3 className={`text-2xl font-display font-bold mb-6 ${accentText}`}>
              🧳 Practical Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.practicalTips.map((tip, i) => (
                <TipCard key={i} tip={tip} index={i} accent={tipAccent} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
