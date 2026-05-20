const categoryColors = {
  Historic: 'bg-amber-100 text-amber-800',
  Museum: 'bg-purple-100 text-purple-800',
  Nature: 'bg-green-100 text-green-800',
  Neighborhood: 'bg-pink-100 text-pink-800',
  Food: 'bg-orange-100 text-orange-800',
  'Art & Nature': 'bg-teal-100 text-teal-800',
  Architecture: 'bg-blue-100 text-blue-800',
  Waterfront: 'bg-cyan-100 text-cyan-800',
  Outdoors: 'bg-lime-100 text-lime-800',
}

export default function PlaceCard({ name, category, description, tip, emoji, mustSee }) {
  const badgeClass = categoryColors[category] || 'bg-gray-100 text-gray-800'

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden border border-gray-100">
      <div className="p-5 flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-3xl">{emoji}</span>
            <h3 className="font-bold text-gray-900 text-lg leading-tight">{name}</h3>
          </div>
          {mustSee && (
            <span className="shrink-0 flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
              ⭐ Must-see
            </span>
          )}
        </div>

        <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 ${badgeClass}`}>
          {category}
        </span>

        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>

      {tip && (
        <div className="mx-4 mb-4 p-3 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl">
          <p className="text-xs text-amber-800">
            <span className="font-bold">💡 Tip: </span>{tip}
          </p>
        </div>
      )}
    </div>
  )
}
