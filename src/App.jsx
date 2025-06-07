import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pages from './Pages'

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <Pages />
      </main>
      <Footer />
    </div>
  )
}

export default App