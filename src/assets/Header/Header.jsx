import "./Header.css"
import React,{useRef, useState} from 'react'
import menu_open from "../../pics/menu_open.svg"
import menu_close from "../../pics/menu_close.svg"
import { Link } from 'react-router-dom'
function Header() {
    const [menu, setMenu] = React.useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (


        <div className="navbar">


            <h1 className="ov">OV</h1>
            <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt="" />
            <ul className="nav-menu" ref={menuRef}>
                <img src={menu_close} onClick={closeMenu } alt="" className="nav-mob-close" />
                <li ><a href="./"><p onClick={()=>setMenu("Home")}>Home </p></a></li>
                <li><a href="./Services"><p onClick={()=>setMenu("Services")}>Services</p></a></li>
                <li><a href="./About"><p onClick={()=>setMenu("About")}>About</p></a></li>
                <li><a href="./Testimonial"><p onClick={()=>setMenu("Testimonial")}>Testimonials</p></a></li>
                <li><a href="./Contact"><p onClick={()=>setMenu("Contact")}>Contact</p></a></li>
            </ul>
            <div className="nav-connect"><Link to='/contact'>CONNECT WITH ME</Link></div>
        </div>

    );

}
export default Header