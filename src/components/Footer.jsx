import { Mail, Instagram, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[#0e1f10] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-white/80">
            <li><a href="#products" className="hover:underline">Shop All</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#shipping" className="hover:underline">Shipping Info</a></li>
            <li><a href="#returns" className="hover:underline">Returns</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Customer Service</h4>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>FAQ</li>
            <li>Track Order</li>
            <li>Size Guide</li>
            <li>Practice Tips</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Connect</h4>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded">
              <Mail size={16} />
              <input placeholder="Get 10% off — enter email" className="bg-transparent outline-none placeholder:text-white/70 text-sm" />
            </div>
            <button className="px-4 py-2 bg-[#2C5F2D] hover:bg-[#244f25] rounded text-sm font-semibold">Sign Up</button>
          </div>
          <div className="mt-4 flex items-center gap-4 opacity-80">
            <Instagram />
            <Facebook />
            <Youtube />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-white/70 text-sm">
        © 2024 The Practice Bay · Privacy Policy · Terms of Service
      </div>
    </footer>
  )
}

export default Footer
