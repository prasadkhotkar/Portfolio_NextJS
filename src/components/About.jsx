import { FileText, MapPin } from "lucide-react"
//import profilePic from "../../public/prasad3.jpg"
//import pdf from "../../public/prasad_khotkar_7775842514.pdf"

const About = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Me</span>
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-fuchsia-600 to-pink-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative mx-auto max-w-sm">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl">
                <img
                  src="/prasad3.jpg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-lg -z-10 opacity-50 blur-xl"></div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">
              Full Stack Web Developer
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Hi, I'm Prasad Khotkar, a passionate Full Stack Developer experienced in building fast, secure, and scalable web applications using the MERN stack and Spring Boot. I specialize in creating seamless user experiences with technologies like React.js, Next.js, Node.js, MongoDB, PostgreSQL, and Java.
            </p>
            <p className="text-slate-600 dark:text-slate-300">
              My projects include an AI Chatbot, Email Reply Generator powered by Spring Boot and Google Gemini API, and a Text-to-Speech App designed for accessibility. I'm currently pursuing my Bachelor’s in Computer Science at JSPM’s BSIOTR, Pune, and actively contribute to tech communities through Hacktoberfest and GDSC BSIOTR.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-100 to-pink-100 dark:from-fuchsia-900/30 dark:to-pink-900/30 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Pune, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-100 to-pink-100 dark:from-fuchsia-900/30 dark:to-pink-900/30 flex items-center justify-center text-fuchsia-600 dark:text-fuchsia-400">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Degree</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">B.E. Computer Science</p>
                </div>
              </div>
            </div>

            {/* ✅ Modified Download Resume Button */}
            <div className="pt-4">
              <a
                href="/prasad_khotkar_7775842514.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-medium rounded-full transition-colors duration-300 inline-block hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
