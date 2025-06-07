import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 shadow z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">Udin.com</h1>
        <ul className="flex space-x-6 text-sm text-gray-300">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar