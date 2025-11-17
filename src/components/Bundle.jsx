const Bundle = () => {
  const [bundle, setBundle] = React.useState(null)

  React.useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || ''
    fetch(`${base}/api/bundle`).then(r=>r.json()).then(setBundle).catch(()=>setBundle(null))
  }, [])

  if (!bundle) return null

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F3EE' }}>
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <img src={bundle.image} alt={bundle.title} className="rounded-lg shadow object-cover w-full h-[420px]" />
        </div>
        <div className="text-[#333333]">
          <h2 className="text-3xl font-bold" style={{ fontFamily: 'Montserrat, var(--font-sans)' }}>{bundle.title}</h2>
          <p className="mt-3 text-[#333333]/80">{bundle.description}</p>

          <ul className="mt-6 space-y-2">
            <li>✓ Premium 10ft Putting Mat</li>
            <li>✓ Swing Trainer Aid</li>
            <li>✓ Alignment Sticks (3-pack)</li>
            <li>✓ Chipping Practice Net</li>
            <li>✓ Practice Balls (Dozen)</li>
          </ul>

          <div className="mt-6 flex items-end gap-4">
            <p className="text-[#333333]/70 line-through text-xl">${bundle.regular_price.toFixed(0)}</p>
            <p className="text-3xl font-extrabold text-[#2C5F2D]">${bundle.bundle_price.toFixed(0)}</p>
            <span className="px-2 py-1 rounded bg-[#2C5F2D] text-white text-sm">{bundle.savings_text}</span>
          </div>

          <button className="mt-6 px-6 py-3 rounded-md bg-[#2C5F2D] hover:bg-[#244f25] text-white font-semibold">Get The Complete System</button>
        </div>
      </div>
    </section>
  )
}

export default Bundle
