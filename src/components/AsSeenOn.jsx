const AsSeenOn = () => {
  const logos = [
    'https://dummyimage.com/180x60/ebebeb/777&text=Golf+Digest',
    'https://dummyimage.com/180x60/ebebeb/777&text=Golf+Monthly',
    'https://dummyimage.com/180x60/ebebeb/777&text=Today+Golf',
    'https://dummyimage.com/180x60/ebebeb/777&text=Club+Pro+Mag'
  ]
  return (
    <section className="py-14 bg-[#F5F3EE]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
          {logos.map((src, i) => (
            <img key={i} src={src} className="h-10 object-contain" alt="Logo" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AsSeenOn
