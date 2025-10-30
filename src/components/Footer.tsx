import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate()
    const currentYear = new Date().getFullYear();
    return (
        <footer className="fixed md:flex md:flex-col bottom-0 w-full py-4 px-4 space-y-2 md:space-y-4 bg-white/10 backdrop-blur-sm shadow-sm shadow-purple-950/25 ">
            <div className="md:w-7xl md:mx-auto flex flex-wrap justify-between text-xs md:text-base space-x-2">
                <a onClick={() => navigate("/")} className="cursor-pointer text-gray-600 hover:text-black hover:underline transition-all duration-300">Home</a>
                <a onClick={() => navigate('/official-words-list')} className="cursor-pointer text-gray-600 hover:text-black hover:underline transition-all duration-300">Words List</a>
                <a onClick={() => navigate('/rulebook')} className="cursor-pointer text-gray-600 hover:text-black hover:underline transition-all duration-300">Rulebook</a>
                <a onClick={() => navigate('/guest-guidelines')} className="cursor-pointer text-gray-600 hover:text-black hover:underline transition-all duration-300">Guest Guidelines</a>
                <a onClick={() => navigate('/contact-us')} className="cursor-pointer text-gray-600 hover:text-black hover:underline transition-all duration-300">Contact Us</a>
            </div>
            <p className="text-gray-600 text-center text-xs md:text-lg">©{currentYear}: Khmer American School. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
