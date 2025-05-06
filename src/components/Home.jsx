"use client"

import { ArrowRight } from "lucide-react"
import profilePic from "../../public/prasad3.jpg"

const Home = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center  relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-300 dark:bg-fuchsia-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-medium text-fuchsia-600 dark:text-fuchsia-400">Hello, I'm</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600">
              Prasad Khotkar
            </h1>
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300">Full Stack Developer</h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
              Building fast, secure, and user-friendly web apps.
            </p>
            <div className="pt-4">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600 text-white font-medium rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
              >
                Contact Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-xl">
              <img src="/prasad3.jpg" alt="Prasad Khotkar" className="w-full h-full object-cover" />
              {/* <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 to-pink-600/20"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
