import { FaReact, FaDatabase, FaCode, FaUserAlt, FaNodeJs } from "react-icons/fa";

const About = () => {
    return (
        <div id="about" className="bg-gray-900 text-white p-10 md:p-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column: About Summary with Icon and Hover Effects */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <FaUserAlt className="text-4xl text-pink-500" />
                        <h2 className="text-4xl font-bold text-gray-100 hover:text-pink-400 transition-all duration-300 transform hover:scale-105">
                            About Me
                        </h2>
                    </div>
                    <p className="text-lg text-gray-300 opacity-0 animate-fadeIn delay-1000">
                        I am a passionate BE-CSE student with a keen interest in technology and programming.
                    </p>
                    <p className="text-lg text-gray-300 opacity-0 animate-fadeIn delay-2000">
                        I seek opportunities to enhance my skills and contribute to impactful tech solutions.
                    </p>

                    <p className="text-lg text-gray-300 opacity-0 animate-fadeIn delay-3000">
                        My goal is to become a proficient developer and work on projects that solve real-world problems.
                    </p>
                </div>

                {/* Right Column: Skills */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-100">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="flex flex-col items-center bg-gray-800 p-8 w-full rounded-lg hover:bg-gray-700 transition-transform duration-300 hover:scale-105">
                            <FaReact className="text-4xl text-blue-400 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-200">React</h3>
                            <p className="text-gray-400">Building interactive user interfaces with React.</p>
                        </div>
                        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-transform duration-300 hover:scale-105">
                            <FaNodeJs className="text-4xl text-green-500 mb-4" /> {/* Express.js icon */}
                            <h3 className="text-xl font-semibold text-gray-200">Express.js</h3>
                            <p className="text-gray-400">Building server-side applications with Express.js.</p>
                        </div>
                        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-transform duration-300 hover:scale-105">
                            <FaDatabase className="text-4xl text-green-400 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-200">Database Management</h3>
                            <p className="text-gray-400">Database design and management using MongoDB and Mongoose</p>
                        </div>
                        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-transform duration-300 hover:scale-105">
                            <FaCode className="text-4xl text-gray-400 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-200">Programming</h3>
                            <p className="text-gray-400">Proficient in C++, Java for problem-solving and software development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
