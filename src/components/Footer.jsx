import { Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-slate-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-600 to-pink-600">
              Portfolio
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="hover:text-fuchsia-600 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-fuchsia-600 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-fuchsia-600 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-fuchsia-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-fuchsia-600 transition-colors">
              Contact
            </a>
          </div>

          <div className="mt-4 md:mt-0">
            <div className="flex gap-4">
              {["GitHub", "Twitter", "LinkedIn", "Instagram"].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-100 to-pink-100 dark:from-fuchsia-900/30 dark:to-pink-900/30 flex items-center justify-center hover:bg-gradient-to-r hover:from-fuchsia-600 hover:to-pink-600 hover:text-white transition-colors text-xs"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-slate-600 dark:text-slate-400">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} John Doe. Made with <Heart size={16} className="text-pink-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
