import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Certificates from "./Components/Certificates/Certificates";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="bg-gray-200 h-auto w-full overflow-hidden">
      <Navbar />
      <hr className="border-t-4 border-pink-700 w-full" />
      <Home />
      <hr className="border-t-4 border-pink-700 w-full" />
      <About />
      <hr className="border-t-4 border-pink-700 w-full dark:bg-gray-900" />
      <Projects />
      <hr className="border-t-4 border-pink-700 w-full" />
      <Certificates />
      <hr className="border-t-4 border-pink-700 w-full" />
      <Contact />
    </div>
  );
}

export default App;
