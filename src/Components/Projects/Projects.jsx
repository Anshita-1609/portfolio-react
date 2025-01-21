
const projects = [
    {
        name: "Food-App",
        description: "A user-friendly food delivery app with a focus on UI/UX and fast performance.",
        techStack: ["React", "TailwindCSS"],
        link: "https://github.com/Anshita-1609/FoodApp",
        image: "/projects/foodapp.png"
    },
    {
        name: "Academic Management System",
        description: "Acedamic Management System is a web application that allows students to view their grades, attendance, and other academic information.",
        techStack: ["Node.js", "Express js", "EJS", "MongoDB"],
        link: "https://github.com/Anshita-1609/ChalkpadPro",
        image: "/projects/ams.png"
    },
    {
        name: "Guess the Word Game",
        description: "An interactive game built with TypeScript, featuring various difficulty levels and animations.",
        techStack: ["HTML", "CSS", "TypeScript"],
        link: "https://github.com/Anshita-1609/GuessTheWord",
        image: "/projects/gtw.png"
    },
    {
        name: "Weather API",
        description: "A weather app using JavaScript and DOM manipulation to display real-time weather data.",
        techStack: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Anshita-1609/weatherApi",
        image: "/projects/wApp.png"
    }
];

const Projects = () => {
    return (
        <div id="projects" style={{ backgroundColor: '#1a202c' }} className="p-10">

            <h2 className="text-4xl font-bold text-center text-gray-800 text-pink-600 mb-10">My Projects</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block max-w-sm mx-auto transform overflow-hidden rounded-lg border border-gray-300 bg-white dark:bg-gray-800 shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={`${project.name} Preview`}
                            className="h-56 w-full object-cover transition duration-300 group-hover:brightness-90"
                        />

                        {/* Project Details */}
                        <div className="p-5">
                            <h2 className="flex items-center justify-between text-xl font-bold text-gray-900 dark:text-gray-200">
                                {project.name}
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    className="h-5 w-5 text-purple-500 dark:text-blue-400 transition group-hover:translate-x-1 group-hover:rotate-45"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                                    ></path>
                                </svg>
                            </h2>
                            <p className="mt-3 text-sm text-gray-700 dark:text-gray-400 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.techStack.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="inline-block rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-md"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
