import { useState, useEffect, useRef } from "react"
import logo from "../Images/Logo.png"
import { Link } from "react-router-dom";
import Socialicons from "../Headers/SocialIcons"
import { AiOutlineBars } from "react-icons/ai";
import Products from "../data/Product"
const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
    const [menu, SetMenu] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                SetMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const CollectionData = [...new Set(Products.map(item => item.category.toLowerCase().replace( " ", "-")))]
    const menuRef = useRef();
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="row">
                    <div className={`Header grid grid-cols-2 md:grid-cols-[1fr_5fr_1fr] gap-[50px] items-center ${isMobile ? "MobileWidth" : ""
                        }`}>
                        <div className="LogoWrapper">
                            <Link to='/'><img src={logo} loading="lazy" alt="site-logo" /> </Link>
                        </div>
                        <div ref={menuRef} className={`MenuWrapper ${menu ? 'showMenu' : ''}`}>
                            <ul className="flex items-center justify-between">
                                <li className="NavItem">
                                    <Link to=''>Home</Link>
                                </li>
                                <li className="NavItem relative dropdownMenu">
                                    <Link to="">Collections</Link>

                                    <div className="dropdownItem">
                                        <ul>
                                            {CollectionData.map((col, index) => (
                                                <li key={index}>
                                                    <Link to={`/${col}`}>
                                                        {col.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                                <li className="NavItem">
                                    <Link to='/shop'>Shop All</Link>
                                </li>
                                <li className="NavItem">
                                    <Link to='/contact'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="SocialList">
                            <Socialicons />
                        </div>
                    </div>
                </div>
            </div>
            <div className="MobileMenu md:hidden" onClick={() => SetMenu(prev => !prev)}>
                <AiOutlineBars size={32} />
            </div>
        </>
    )
}
export default Header;