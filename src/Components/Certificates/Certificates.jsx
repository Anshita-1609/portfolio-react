import { FaTrophy } from "react-icons/fa"; // Optional icon for participation

const participations = [
    {
        name: "Google Cloud Study Jam Campaign",
        date: "2023",
        description: "Participated in the Google Cloud Study Jam campaign to enhance cloud computing skills.",
        image: "/participations/google.jpg"
    },
    {
        name: "Flipkart Runway Season 4",
        date: "2024",
        description: "Participated in the Online Quiz of Flipkart's Runway Season 4.",
        image: "/participations/flipkart.jpg"
    },
    {
        name: "SUSTAIN-A-THON 2024 Sustainability Hackathon",
        date: "2024",
        description: "Participated in the SUSTAIN-A-THON 2024 Sustainability Hackathon by Indian Oil Corporation Ltd.",
        image: "/participations/iol.jpg"
    }

];

const Participation = () => {
    return (
        <div id="participation" className="text-pink-900 md:flex flex-wrap justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black p-10 md:p-20">
            <h2 className="text-4xl font-bold text-white w-full text-center mb-8">My Participation</h2>
            <div className="flex flex-wrap gap-6 justify-center">
                {participations.map((event, index) => (
                    <div key={index} className="bg-gray-200 shadow-xl p-6 rounded-lg w-full md:w-80 hover:scale-105 transition-transform relative group">
                        {/* Event Image with hover effect */}
                        <div className="overflow-hidden rounded-lg">
                            <img src={event.image} alt={event.name} className="w-full h-60 object-cover group-hover:opacity-80 transition-opacity duration-300" />
                        </div>

                        {/* Event details */}
                        <div className="mt-4">
                            <h3 className="text-2xl font-semibold text-pink-700 flex items-center">
                                <FaTrophy className="mr-2 text-pink-500" />
                                {event.name}
                            </h3>
                            <p className="text-md text-pink-600">Year: {event.date}</p>
                            <p className="text-sm text-pink-500">{event.description}</p>
                        </div>

                        {/* Tooltip on hover */}
                        <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-xl hover:scale-100">
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Participation;
