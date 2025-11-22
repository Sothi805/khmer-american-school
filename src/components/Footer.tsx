import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate()
    const currentYear = new Date().getFullYear();
    return (
        <footer className="fixed md:flex md:flex-col bottom-0 w-full py-4 px-4 space-y-2 md:space-y-4 bg-white/10 backdrop-blur-sm shadow-sm shadow-purple-950/25 ">
            <p className="text-gray-600 text-center text-xs md:text-lg">©{currentYear}: Khmer American School. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
