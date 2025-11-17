import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

const SocialProof = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || ''
    fetch(`${base}/api/testimonials`)
      .then(r => r.json())
      .then(data => setItems(data))
      .catch(() => setItems([]))
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#333333]" style={{ fontFamily: 'Montserrat, var(--font-sans)' }}>
          Join 2,000+ Golfers Improving at Home
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <div key={idx} className="bg-[#F5F3EE] rounded-lg overflow-hidden">
              {t.photo && (
                <img src={t.photo} alt={t.name} className="w-full h-52 object-cover" />
              )}
              <div className="p-4">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                </div>
                <p className="mt-2 text-[#333333]">“{t.quote}”</p>
                <p className="mt-2 text-sm text-[#333333]/70">- {t.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 sm:grid-cols-6 gap-2">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-md">
              <img
                src={`https://source.unsplash.com/random/400x400?golf,home,${i}`}
                alt="Instagram post"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
