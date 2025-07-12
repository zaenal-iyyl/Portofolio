import React from 'react'

const Pages = () => {
  return (
    <div className="space-y-32">
      {/* About */}
      <section id="about">
        <h2 className="text-4xl font-bold mb-4 border-b-4 border-blue-600 inline-block">
          About Me
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
          Hello! I’m <span className="text-blue-600 font-semibold">Udin</span>, a web developer who focuses on backend APIs, automation, and web-based AI tools.
          I love building useful projects with clean code and minimalist design. Currently, I explore AI integration into user-friendly web apps.
        </p>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-green-600 inline-block">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">REST API</h3>
            <p className="text-gray-700 mb-4">
              A RESTful API using Express.js, MongoDB, and JWT auth — optimized for speed and modularity.
            </p>
            <a
              href="https://api-kurumi.biz.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-600 hover:text-blue-500 underline"
            >
              View API →
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">WhatsApp Bot</h3>
            <p className="text-gray-700 mb-4">
              Multi-featured WhatsApp bot using Baileys. Includes downloader, AI reply, and command system.
            </p>
            <a
              href="https://wa.me/6288221019426"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-600 hover:text-blue-500 underline"
            >
              View on WhatsApp →
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-6">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">Web AI</h3>
            <p className="text-gray-700 mb-4">
              Lightweight AI chat interface using React + Tailwind + OpenAI API. Designed for smooth UX.
            </p>
            <a
              href="https://zanexis.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-600 hover:text-blue-500 underline"
            >
              Visit Demo →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="text-4xl font-bold mb-4 border-b-4 border-yellow-500 inline-block">
          Contact
        </h2>
        <p className="text-gray-700 mb-2">Let’s connect:</p>
        <ul className="text-gray-600 space-y-2">
          <li>
            Email:{" "}
            <a
              href="mailto:udin@example.com"
              className="text-blue-600 underline hover:text-blue-500"
            >
              udin@example.com
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/zaenal-cft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-500"
            >
              @zaenal-cft
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="#"
              className="text-blue-600 underline hover:text-blue-500"
            >
              linkedin.com/in/udin
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Pages
