import {useState,useEffect} from "react"
import logo from "../Images/logoresize.png"
import { Link } from "react-router-dom";
import Socialicons from "../Headers/SocialIcons"
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
      const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
      const [menu,SetMenu] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="row">
                    <div   className={`Header grid grid-cols-2 md:grid-cols-[1fr_5fr_1fr] gap-[25px] items-center ${
    isMobile ? "MobileWidth" : ""
  }`}>
                        <div className="LogoWrapper">
                            <img src={logo} loading="lazy" />
                        </div>
                        <div className={`MenuWrapper ${menu ? 'showMenu' : ''}`}>
                            <ul className="flex items-center justify-between">
                                <li className="NavItem">
                                   <Link to=''>Home</Link> 
                                </li>
                                <li className="NavItem">
                                   <Link to='/about'>Gifts</Link> 
                                </li>
                                <li className="NavItem">
                                   <Link to=''>New In</Link> 
                                </li>
                               <li className="NavItem">
                                  <Link to=''>BEST SELLERS</Link> 
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
                          <Socialicons/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MobileMenu" onClick={prev=>SetMenu(prev => !prev)}>
                   <AiOutlineBars size={32}/>
            </div>
        </>
    )
}
export default Header;