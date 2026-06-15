import { Link } from "react-router-dom"
import { PiWhatsappLogoLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
const MainFooter = () => {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="row">
                    <div className="grid grid-cols-4 gap-15">
                        <div className="FooterCol">
                            <h4 className="font-[600]">About Us</h4>
                            <p className="my-5">There are many variations of passages of Lorem Ipsum available,
                                but the majority have suffered alteration in some form, by injected humour,
                                or randomised words which don't look even slightly believable.
                                If you are going to use a passage of Lorem Ipsum</p>
                        </div>
                        <div className="FooterCol">
                            <h4 className="font-[600]">Main Menu</h4>
                            <ul className="my-5">
                                <li className="FooterNavItem">
                                    <Link to=''>Home</Link>
                                </li>
                                <li className="FooterNavItem">
                                    <Link to='/about'>Gifts</Link>
                                </li>
                                <li className="FooterNavItem">
                                    <Link to=''>New In</Link>
                                </li>
                                <li className="FooterNavItem">
                                    <Link to=''>BEST SELLERS</Link>
                                </li>
                                <li className="FooterNavItem">
                                    <Link to=''>Shop All</Link>
                                </li>
                                <li className="FooterNavItem">
                                    <Link to=''>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="FooterCol">
                            <h4 className="font-[600]">Legal Information</h4>
                            <ul className="my-5">
                                <li className="FooterNavItem">
                                    <Link to=''>Refund policy</Link>
                                </li>
                                <li className="FooterNavItem">
                                    <Link to='/about'>Privacy policy</Link>
                                </li>
                                <li className="FooterNavItem">
                                    <Link to=''>Terms of service</Link>
                                </li>
                                <li className="FooterNavItem">
                                    <Link to=''>Shipping policy</Link>
                                </li>
                                <li className="FooterNavItem">
                                    <Link to=''>Cancellation policy</Link>
                                </li>
                                <li className="FooterNavItem">
                                    <Link to=''>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="FooterCol">
                            <h4 className="font-[600]">Contact Us</h4>
                            <div className="my-5">
                               <ul className="flex items-center gap-[15px]">
        <li>
            <Link to='#'><CiInstagram size={25}/></Link>
        </li>
        <li>
            <Link to='#'><PiWhatsappLogoLight size={25} /></Link>
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
export default MainFooter;