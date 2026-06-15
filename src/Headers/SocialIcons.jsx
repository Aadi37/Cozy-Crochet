import {Link} from "react-router-dom"
import { PiWhatsappLogoLight } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";

const Socialicons = ()=> {
    return (
     <ul className="flex items-center gap-[15px] justify-end">
        <li>
            <Link to='#'><CiInstagram size={25}/></Link>
        </li>
        <li>
            <Link to='#'><PiWhatsappLogoLight size={25} /></Link>
        </li>
     </ul>
    )
}
export default Socialicons;