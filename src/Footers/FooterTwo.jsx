import {useState} from "react"
import logo from "../Images/logo.png"
import {Link} from "react-router-dom"
import { PiWhatsappLogoLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
const FooterTwo = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="row">
                    <div className="MainLogo py-2">
                       <img src={logo} alt="logo" loading="lazy"/>
                    </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">

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
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form.
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
                    <li className="FooterNavItem"><Link to="/about">Gifts</Link></li>
                    <li className="FooterNavItem"><Link to="">New In</Link></li>
                    <li className="FooterNavItem"><Link to="">Best Sellers</Link></li>
                    <li className="FooterNavItem"><Link to="">Shop All</Link></li>
                    <li className="FooterNavItem"><Link to="">Contact</Link></li>
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
                    <li className="FooterNavItem"><Link to="">Contact</Link></li>
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