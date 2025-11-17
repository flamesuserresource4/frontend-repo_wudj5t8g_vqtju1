import React from 'react'
import { Star, Lock } from 'lucide-react'

const Bullet = ({children}) => (
  <li className="flex items-start gap-2"><span className="text-[#2C5F2D]">✓</span><span>{children}</span></li>
)

const ProductPage = ({ slug, onBack }) => {
  const [product, setProduct] = React.useState(null)

  React.useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || ''
    fetch(`${base}/api/products/${slug}`).then(r=>r.json()).then(setProduct)
  }, [slug])

  if (!product) return null

  return (
    <div className="bg-white text-[#333333]">
      <div className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-4 gap-3">
            <div className="col-span-4">
              <img src={product.images?.[0]} alt={product.title} className="w-full h-[480px] object-cover rounded" />
            </div>
            {product.images?.slice(1).map((src, i) => (
              <img key={i} src={src} alt="thumb" className="w-full h-28 object-cover rounded" />
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <button onClick={onBack} className="text-sm text-[#2C5F2D]">← Back</button>
          <h1 className="mt-2 text-3xl font-bold" style={{ fontFamily: 'Montserrat, var(--font-sans)' }}>{product.title}</h1>
          <div className="mt-2 flex items-center gap-2 text-amber-500">
            <Star size={18} fill="#f59e0b" color="#f59e0b" />
            <span className="text-sm">{product.rating?.toFixed(1)} ★★★★★</span>
            <button className="text-sm text-[#2C5F2D]">{product.reviews_count || 127} reviews</button>
          </div>
          <p className="mt-4 text-2xl font-extrabold text-[#2C5F2D]">${product.price?.toFixed(2)}</p>

          <ul className="mt-4 space-y-2 text-sm">
            {product.benefits?.length ? product.benefits.map((b, i) => <Bullet key={i}>{b}</Bullet>) : (
              <>
                <Bullet>Improves putting accuracy by 40%</Bullet>
                <Bullet>Professional auto-ball return system</Bullet>
                <Bullet>Premium velvet surface mimics real greens</Bullet>
                <Bullet>Non-slip backing for any floor</Bullet>
                <Bullet>Rolls up for easy storage</Bullet>
              </>
            )}
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <input type="number" min="1" defaultValue="1" className="w-16 border rounded px-2 py-2" />
            <button className="flex-1 px-6 py-3 rounded-md bg-[#2C5F2D] hover:bg-[#244f25] text-white font-semibold">Add to Cart</button>
          </div>

          <div className="mt-3 text-sm text-[#333333]/70">
            <p>✓ Free shipping on orders over $75</p>
            <p>✓ 30-day money-back guarantee</p>
            <p className="flex items-center gap-1"><Lock size={14}/> Secure checkout</p>
          </div>

          <div className="mt-8 divide-y border rounded">
            <details className="p-4" open>
              <summary className="font-semibold">Description</summary>
              <p className="pt-2 text-sm text-[#333333]/80">{product.details || 'Premium materials and smart design for true-roll practice.'}</p>
            </details>
            <details className="p-4">
              <summary className="font-semibold">Shipping & Returns</summary>
              <p className="pt-2 text-sm text-[#333333]/80">2-3 week delivery. Free returns within 30 days.</p>
            </details>
            <details className="p-4">
              <summary className="font-semibold">Customer Reviews</summary>
              <p className="pt-2 text-sm text-[#333333]/80">Rating: {product.rating?.toFixed(1)} / 5.0</p>
            </details>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold">Complete Your Setup</h3>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[1,2,3].map(i => (
                <div key={i} className="border rounded p-2 text-sm">
                  <div className="aspect-square bg-[#F5F3EE] rounded" />
                  <p className="mt-2">Related Product {i}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
