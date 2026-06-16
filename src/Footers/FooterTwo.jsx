import {useState,useEffect} from "react"
import logo from "../Images/logo.png"
import {Link} from "react-router-dom"
import { PiWhatsappLogoLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
const FooterTwo = () => {
    const [isSmall, setIsSmall] = useState(window.innerWidth < 768);
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="row">
                    <div className="MainLogo py-2">
                       <img src={logo} alt="logo" loading="lazy"/>
                    </div>
                    <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mt-5 ${isSmall ? "small-device" : ""}`}>
                        {/* About Us */}
                        <div className="FooterCol">
                            <h4 
                                className="font-[600] cursor-pointer md:cursor-default"
                                onClick={() => toggleAccordion(0)}
                            >
                                About Us
                            </h4>

                            <div className={`${activeIndex === 0 ? "block" : "hidden"} md:block`}>
                                <p className="my-5">
                                   Discover premium handcrafted crochet products made with love and care. Explore stylish crochet bags, aesthetic home decor, coasters, and gift items. Each product is 100% handmade, eco-friendly, and uniquely designed by artisans in India.
                                </p>
                            </div>
                        </div>
                        {/* Main Menu */}
                        <div className="FooterCol">
                            <h4 
                                className="font-[600] cursor-pointer md:cursor-default"
                                onClick={() => toggleAccordion(1)}
                            >
                                Main Menu
                            </h4>
                            <ul className={`my-5 ${activeIndex === 1 ? "block" : "hidden"} md:block`}>
                                <li className="FooterNavItem"><Link to="">Home</Link></li>
                                <li className="FooterNavItem"><Link to="/shop">Shop All</Link></li>
                                <li className="FooterNavItem"><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        {/* Legal Info */}
                        <div className="FooterCol">
                            <h4 
                                className="font-[600] cursor-pointer md:cursor-default"
                                onClick={() => toggleAccordion(2)}
                            >
                                Legal Information
                            </h4>

                            <ul className={`my-5 ${activeIndex === 2 ? "block" : "hidden"} md:block`}>
                                <li className="FooterNavItem"><Link to="">Refund policy</Link></li>
                                <li className="FooterNavItem"><Link to="/about">Privacy policy</Link></li>
                                <li className="FooterNavItem"><Link to="">Terms of service</Link></li>
                                <li className="FooterNavItem"><Link to="">Shipping policy</Link></li>
                                <li className="FooterNavItem"><Link to="">Cancellation policy</Link></li>
                                <li className="FooterNavItem"><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        {/* Contact */}
                        <div className="FooterCol">
                            <h4 
                                className="font-[600] cursor-pointer md:cursor-default"
                                onClick={() => toggleAccordion(3)}
                            >
                                Contact Us
                            </h4>

                            <div className={`my-5 ${activeIndex === 3 ? "block" : "hidden"} md:block`}>
                                <ul className="flex items-center gap-[15px]">
                                    <li>
                                        <Link to="#"><CiInstagram size={25}/></Link>
                                    </li>
                                    <li>
                                        <Link to="#"><PiWhatsappLogoLight size={25} /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FooterTwo;