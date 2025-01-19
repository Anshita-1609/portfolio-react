import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <div
            id="contact"
            className="text-rose-600 bg-gray-900 min-h-screen flex flex-col justify-center items-center p-10 md:p-20"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
                Get in Touch
            </h2>

            <p className="text-2xl text-center mb-12 text-white">
                I am always open to discuss exciting projects, collaborations, or new
                opportunities. Reach out to me through any of the channels below.
            </p>

            <div className="flex gap-8 justify-center items-center">
                <a
                    href="https://www.linkedin.com/in/anshita-dilawari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-2xl md:text-3xl text-white hover:text-pink-400 transition-all duration-300"
                >
                    <FaLinkedin className="text-6xl" />
                </a>

                <a
                    href="https://github.com/Anshita-1609"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-2xl md:text-3xl text-white hover:text-pink-400 transition-all duration-300"
                >
                    <FaGithub className="text-6xl" />
                </a>
                <a
                    href="anshidilawari@gmail.com"
                    className="flex items-center text-2xl md:text-3xl text-white hover:text-pink-400 transition-all duration-300"
                >
                    <FaEnvelope className="text-6xl" />
                </a>
            </div>

            <div className="mt-12">
                <p className="text-lg text-center text-pink-200">
                    Feel free to reach out, and I will get back to you as soon as possible.
                </p>
            </div>
        </div>
    );
};

export default Contact;
