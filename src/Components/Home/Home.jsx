import TextChange from "../TextChange";
import avatarImg from "/src/assets/Avatarimg.jpg";

const Home = () => {
    return (
        <div id="home" className="text-white flex md:flex-row  flex-col w-full justify-between items-start p-10 md:p-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div className="md:w-2/4 md:pt-10 space-y-6 flex-col">
                <h1 className="text-6xl md:text-6xl font-bold flex leading-snug tracking-tighter text-gray-100">
                    <TextChange />
                </h1>
                <p className="text-3xl md:text-3xl text-bold tracking-tight text-gray-300">
                    I believe in the power of programming to bring creative ideas to life and solve real-world challenges with simplicity and elegance
                </p>
            </div>
            <div>
                <img
                    className="rounded-full w-80 h-80 md:w-100 md:h-100 shadow-lg shadow-gray-600 border-4 border-gray-600 hover:scale-125 transition-transform duration-300 object-cover"
                    src={avatarImg}
                    alt="Avatar"
                />
            </div>
        </div>
    );
};

export default Home;
