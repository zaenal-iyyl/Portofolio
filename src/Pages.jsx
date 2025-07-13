import React from 'react'

const Pages = () => {
  return (
    <main className="bg-white dark:bg-[#0f172a] text-black dark:text-white min-h-screen space-y-32 max-w-6xl mx-auto px-4 py-16">
      <section id="hero" className="text-center relative">
        <div className="relative inline-block">
          <img
            src="https://files.catbox.moe/pbw8o4.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-pink-500 shadow"
          />
          <div className="absolute -top-2 -left-2 bg-[#1e293b] text-white p-2 rounded-full shadow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M17.53 10.706a.75.75 0 000-1.06l-3.722-3.722a.75.75 0 10-1.06 1.06L15.19 10l-2.44 2.44a.75.75 0 101.06 1.06l3.72-3.793zM2.47 10.707l3.72 3.793a.75.75 0 101.06-1.06L4.81 10l2.44-2.44a.75.75 0 10-1.06-1.06L2.47 9.646a.75.75 0 000 1.06z" />
            </svg>
          </div>
        </div>
        <h1 className="text-5xl font-extrabold mt-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          udin
        </h1>
        <p className="text-lg text-gray-400 font-medium mt-2">Frontend Developer</p>
      </section>

      <section id="about">
        <h2 className="text-4xl font-bold border-b-4 border-blue-600 inline-block mb-4">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
          Hello! I’m <span className="text-blue-600 dark:text-blue-400 font-semibold">Udin</span>, a <strong>Frontend Developer</strong> who specializes in building clean, responsive, and modern web interfaces.
          I enjoy minimal UI design and integrating web or bot features into real-world web projects.
        </p>
      </section>

      <section id="projects">
        <h2 className="text-4xl font-bold border-b-4 border-green-600 inline-block mb-6">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: 'REST API',
              desc: 'Simple REST API with Express and MongoDB. Includes authentication and modular structure.',
              link: 'https://api-kurumi.biz.id',
            },
            {
              title: 'WhatsApp Bot',
              desc: 'Automated bot with AI replies, media downloader, and command system using Baileys.',
              link: 'https://wa.me/6288221019426',
            },
            {
              title: 'Web AI App',
              desc: 'Lightweight AI chat app using React and OpenAI API. Built for smooth and modern UX.',
              link: 'https://zanexis.vercel.app',
            },
          ].map((proj, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-md transition p-6">
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">{proj.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{proj.desc}</p>
              <a href={proj.link} target="_blank" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                Visit →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills">
        <h2 className="text-4xl font-bold border-b-4 border-purple-600 inline-block mb-4">
          Skills
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 text-lg">
          {[
            'HTML & CSS',
            'JavaScript',
            'React.js',
            'Next.js',
            'Node.js',
            'MongoDB',
            'Go',
            'vue.js',
            'mysql',
          ].map((skill, i) => (
            <li key={i} className="bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded text-yellow-500">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact">
        <h2 className="text-4xl font-bold border-b-4 border-yellow-500 inline-block mb-4">
          Contact
        </h2>
        <p className="text-gray-800 dark:text-gray-300 mb-2">Interested in working together or starting a project?</p>
        <ul className="space-y-2 text-gray-800 dark:text-gray-300">
          <li>
            Email: <a href="mailto:clpmadang@gmail.com" className="text-blue-600 dark:text-blue-400 underline">clpmadang@gmail.com</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/zaenalasu" target="_blank" className="text-blue-600 dark:text-blue-400 underline">zaenalasu</a>
          </li>
          <li>
            WhatsApp: <a href="https://wa.me/6288221019426" target="_blank" className="text-blue-600 dark:text-blue-400 underline">Message Me</a>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Pages
