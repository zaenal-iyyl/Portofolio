import React from 'react'

const Pages = () => {
  return (
    <div className="space-y-32">
      
      <section id="about">
        <h2 className="text-4xl font-bold mb-4 border-b-4 border-blue-500 inline-block">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
          Hello! I’m <span className="text-blue-400 font-semibold">Udin</span>, a web developer who focuses on backend APIs, automation, and web-based AI tools.
          I love building useful projects with clean code and minimalist design. Currently, I explore AI integration into user-friendly web apps.
        </p>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-500 inline-block">Projects</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          
          <div className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-2">REST API</h3>
            <p className="text-gray-400 mb-4">
              A RESTful API using Express.js, MongoDB, and JWT auth — optimized for speed and modularity.
            </p>
            <a
              href="https://api-kurumi.biz.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-400 hover:text-blue-300 underline"
            >
              View on api →
            </a>
          </div>

          
          <div className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-2">WhatsApp Bot</h3>
            <p className="text-gray-400 mb-4">
              Multi-featured WhatsApp bot using Baileys. Includes downloader, AI reply, and command system.
            </p>
            <a
              href="wa.me/6288221019426"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-400 hover:text-blue-300 underline"
            >
              View on whatsapp →
            </a>
          </div>

          
          <div className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-2">Web AI</h3>
            <p className="text-gray-400 mb-4">
              Lightweight AI chat interface using React + Tailwind + OpenAI API. Designed for smooth UX.
            </p>
            <a
              href="https://zanexis
              vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-400 hover:text-blue-300 underline"
            >
              Visit Demo →
            </a>
          </div>
        </div>
      </section>

      
      <section id="contact">
        <h2 className="text-4xl font-bold mb-4 border-b-4 border-yellow-500 inline-block">Contact</h2>
        <p className="text-gray-300 mb-2">Let’s connect:</p>
        <ul className="text-gray-400 space-y-2">
          <li>
            Email: <a href="mailto:clpmadang@gmail.com" className="text-blue-400 underline">clpmadang@gmail.com</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/udin" className="text-blue-400 underline">@udin</a>
          </li>
          <li>
            LinkedIn: <a href="#" className="text-blue-400 underline">linkedin.com/in/udin</a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Pages