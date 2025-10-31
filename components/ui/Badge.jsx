export default function Badge({ text = 'NEW' }) {
  const map = {
    NEW: 'bg-blue-50 text-blue-800',
    AD: 'bg-amber-50 text-amber-800',
    PICK: 'bg-pink-50 text-pink-800',
    LIVE: 'bg-green-50 text-green-800',
    END: 'bg-gray-100 text-gray-700',
  }
  const cls = map[text] || 'bg-gray-100 text-gray-700'
  return (
    <span
      className={`inline-block rounded px-2 py-0.5 text-xs font-semibold ${cls}`}
    >
      {text}
    </span>
  )
}
