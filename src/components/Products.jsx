import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'

const Products = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || ''
    fetch(`${base}/api/products`)
      .then(r => r.json())
      .then(data => setItems(data))
      .catch(() => setItems([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="products" className="py-20 bg-[#F5F3EE]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#333333]" style={{ fontFamily: 'Montserrat, var(--font-sans)' }}>
          Everything You Need to Practice Like a Pro
        </h2>

        {loading ? (
          <p className="mt-6 text-[#333333]/70">Loading products…</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {items.map((p) => (
              <div key={p.slug} className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <div className="relative aspect-square overflow-hidden">
                  <img src={p.images?.[0]} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
                  <button className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition px-4 py-2 rounded-md bg-[#2C5F2D] text-white text-sm font-semibold">
                    Quick View
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#333333]">{p.title}</h3>
                  <div className="flex items-center gap-1 text-amber-500 mt-1">
                    <Star size={16} fill="#f59e0b" color="#f59e0b" />
                    <span className="text-sm text-[#333333]/80">{p.rating?.toFixed(1)} ★★★★★</span>
                  </div>
                  <p className="mt-2 font-bold text-[#333333]">${p.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
