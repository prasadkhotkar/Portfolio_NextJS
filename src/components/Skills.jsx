const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-500",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "SQL", "PostgreSQL", "Spring Boot"],
      bgColor: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "Figma", "VS Code", ],
      bgColor: "bg-gradient-to-br from-amber-500 to-orange-500",
    },
  ]

  return (
    <div className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Skills</span>
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-fuchsia-600 to-pink-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in web development. Here's an overview of my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-white overflow-hidden relative`}
            >
              <div className={`absolute inset-0 ${category.bgColor} opacity-90`}></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {["React", "Node.js", "MongoDB", "JavaScript", "Tailwind CSS", "Git"].map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg shadow-md p-4 flex items-center justify-center h-24 border-2 border-transparent hover:border-fuchsia-500 transition-all"
            >
              <span className="font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">
                {tech}
              </span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Skills
