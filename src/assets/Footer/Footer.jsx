import "./Footer.css"
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia' >
                <FaInstagramSquare />
                <AiFillTikTok />
                <BsTwitterX />
                <FaFacebookSquare />
                <FaLinkedin />
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()}Micah Tadiwanashe Website</p>
            </div>


        </div>


    );
}
export default Footer