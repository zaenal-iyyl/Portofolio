import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-700 mt-20">
      © {new Date().getFullYear()} Udin. All rights reserved.
    </footer>
  )
}

export default Footer