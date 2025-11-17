import React from 'react'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Products from './components/Products'
import SocialProof from './components/SocialProof'
import Bundle from './components/Bundle'
import WhyChooseUs from './components/WhyChooseUs'
import AsSeenOn from './components/AsSeenOn'
import Footer from './components/Footer'
import ProductPage from './components/ProductPage'

function App() {
  const [view, setView] = React.useState({ type: 'home', slug: null })

  const handleSeeHow = () => {
    const el = document.getElementById('products')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {view.type === 'home' ? (
        <>
          <Hero onSeeHow={handleSeeHow} />
          <ProblemSolution />
          <Products />
          <SocialProof />
          <Bundle />
          <WhyChooseUs />
          <AsSeenOn />
          <Footer />
        </>
      ) : (
        <ProductPage slug={view.slug} onBack={() => setView({ type: 'home', slug: null })} />
      )}
    </div>
  )
}

export default App
