export default function TipCard({ tip, index, accent = 'blue' }) {
  const accentMap = {
    blue: 'bg-blue-600 border-blue-500',
    red: 'bg-red-600 border-red-500',
    yellow: 'bg-yellow-500 border-yellow-400',
  }
  const circleClass = accentMap[accent] || accentMap.blue

  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className={`shrink-0 w-8 h-8 rounded-full ${circleClass} text-white text-sm font-bold flex items-center justify-center`}>
        {index + 1}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed pt-1">{tip}</p>
    </div>
  )
}
