import { Truck, RotateCcw, Star, Phone } from 'lucide-react'

const Item = ({icon: Icon, title, desc}) => (
  <div className="text-center p-6 bg-white rounded-lg shadow border border-[#D4C5A9]/40">
    <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center bg-[#F5F3EE] text-[#2C5F2D]">
      <Icon size={22} />
    </div>
    <h4 className="mt-4 font-semibold text-[#333333]">{title}</h4>
    <p className="mt-2 text-sm text-[#333333]/70">{desc}</p>
  </div>
)

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#333333]" style={{ fontFamily: 'Montserrat, var(--font-sans)' }}>Why Choose Us</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Item icon={Truck} title="Free Shipping" desc="Orders over $75" />
          <Item icon={RotateCcw} title="30-Day Returns" desc="Risk-free guarantee" />
          <Item icon={Star} title="Premium Quality" desc="Tournament-grade equipment" />
          <Item icon={Phone} title="Expert Support" desc="Golf pros available to help" />
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
