const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white text-[#333333]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <img
            src="https://images.unsplash.com/photo-1565168392139-b760f91c9a30?q=80&w=1400&auto=format&fit=crop"
            alt="Empty driving range"
            className="rounded-lg shadow-md object-cover w-full h-72"
          />
          <h3 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, var(--font-sans)' }}>
            Tired of expensive range fees? Limited practice time? Unpredictable weather?
          </h3>
        </div>
        <div className="space-y-4">
          <img
            src="https://images.unsplash.com/photo-1604490205019-95898235570d?q=80&w=1400&auto=format&fit=crop"
            alt="Home putting setup"
            className="rounded-lg shadow-md object-cover w-full h-72"
          />
          <h3 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, var(--font-sans)' }}>
            Practice anytime, anywhere. Build consistency with daily training. Save thousands on range fees.
          </h3>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
