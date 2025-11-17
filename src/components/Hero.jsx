import { motion } from 'framer-motion'

const Hero = ({ onSeeHow }) => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#0e1f10]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559827291-72ee739d0d9b?q=80&w=2000&auto=format&fit=crop"
          alt="Golfer practicing at home"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          style={{ fontFamily: 'Montserrat, var(--font-sans)' }}
        >
          Master Your Game Without Leaving Home
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
          style={{ fontFamily: 'Open Sans, var(--font-sans)' }}
        >
          Professional-grade training equipment for golfers who practice smart, not just hard
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#products" className="px-6 py-3 rounded-md bg-[#2C5F2D] hover:bg-[#244f25] transition text-white font-semibold">
            Shop Training Gear
          </a>
          <button onClick={onSeeHow} className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur transition text-white font-semibold border border-white/20">
            See How It Works
          </button>
        </motion.div>

        <div className="mt-10 flex items-center justify-center gap-6 text-sm text-white/80">
          <span>✓ 30-Day Returns</span>
          <span>✓ Free Shipping Over $75</span>
          <span>✓ 2,000+ Happy Golfers</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
