import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="bg-blue-800 py-10">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-3xl text-white font-bold tracking-tight">
                    TravelCareFree.com 
                </span>
                <span className="text-white font-bold tracking-tight flex gap-3">
                    <Link to ="/privacy-policy" className="cursor-pointer">Privacy Policy</Link>
                    <Link to="/terms-of-service" className="cursor-pointer">Terms of Service</Link>
                </span>
            </div>
        </div>
    );
};

export default Footer;