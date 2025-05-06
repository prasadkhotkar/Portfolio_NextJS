import { ExternalLink, Github } from "lucide-react"


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Chatbot",
      image: "/chatbot.png",
      description: "A full-stack e-An intelligent chatbot with real-time responses using OpenAI API platform with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "openAI API"],
      demoLink: "#",
      githubLink: "https://github.com/prasadkhotkar/AI-Chatbot",
    },
    {
      id: 2,
      title: "AI Email Reply Generator",
      image: "/placeholder.svg?height=400&width=600",
      description: "Generates smart email replies using Gemini API with a Spring Boot backend and a Chrome extension",
      technologies: ["React", "Java", "Spring Boot", "Gemini API"],
      demoLink: "#",
      githubLink: "https://github.com/prasadkhotkar/Email-writer",
    },
    {
      id: 3,
      title: "Text to Speech",
      image: "/TextToSpeak.png",
      description: " A web application that converts text to speech using the Web Speech API",
      technologies: ["JavaScript", "Bootstrap"],
      demoLink: "https://prasadkhotkar.github.io/Text-to-Speech/",
      githubLink: "https://github.com/prasadkhotkar/Text-to-Speech",
    },
    {
      id: 4,
      title: "Portfolio",
      image: "/portfolio.png",
      description: "A personal portfolio website showcasing my projects and skills",
      technologies: ["Next.js", "Tailwind CSS"],
      demoLink: "https://portfolio-next-js-three-nu.vercel.app/",
      githubLink: "https://github.com/prasadkhotkar/Portfolio_NextJS",
    },
    {
      id: 5,
      title: "ShoppingCart",
      image: "/shopping.png",
      description: "A simple shopping cart application with product listing and cart functionality",
      technologies: ["React", "Redux"],
      demoLink: "https://prasadkhotkar.github.io/ShoppingCart-React/",
      githubLink: "https://github.com/prasadkhotkar/ShoppingCart-React",
    },
    {
      id: 6,
      title: "Currency Converter",
      image: "/CurrencyConverter.png",
      description: "A simple currency converter application using React and Tailwind CSS",
      technologies: ["React", "Tailwind CSS"],
      demoLink: "https://currency-converter-blue-xi-97.vercel.app/",
      githubLink: "https://github.com/prasadkhotkar/currencyConverter",
    },
    {
      id: 7,
      title: "Notes App",
      image: "/notes.png",
      description: "A simple notes application with CRUD functionality",
      technologies: ["React","Tailwind CSS"],
      demoLink: "https://prasadkhotkar.github.io/React-NoteBookApp/",
      githubLink: "https://github.com/prasadkhotkar/React-NoteBookApp",
    },
    {
      id: 8,
      title: "Relaxer",
      image: "/Relaxer.png",
      description: " A simple web application that helps you relax with brathing animation",
      technologies: ["CSS", "JavaScript"],
      demoLink: "https://prasadkhotkar.github.io/Relaxer/",
      githubLink: "https://github.com/prasadkhotkar/Relaxer",
    },
    
  ]

  return (
    <div className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">
              Projects
            </span>
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-fuchsia-600 to-pink-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent web development projects. Each project reflects my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-fuchsia-500"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-fuchsia-100 to-pink-100 dark:from-fuchsia-900/30 dark:to-pink-900/30 text-fuchsia-600 dark:text-fuchsia-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-1 text-sm font-medium text-fuchsia-600 dark:text-fuchsia-400 hover:text-fuchsia-800 dark:hover:text-fuchsia-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-300 transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
