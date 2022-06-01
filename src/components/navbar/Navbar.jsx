import { useState } from "react";
import NavbarList from "./NavbarList"
// import logo from "../../images/logo.webp";
import IMAGES from "../../images/index.js";

const Navbar = () => {
const navbarPages = ['Home','About','Gallary','Contact Us']
const [isActive , setIsActive] = useState(false);
const [navbarBg , setNavbarBg] = useState('transparent');
const handleToggle = () =>{
    setIsActive(!isActive);
 };
 const handleLinkClick = () => {
     if(window.innerWidth <= 768) { setIsActive(!isActive) }
 }
 const onScroll = ()=>{
    if(window.scrollY >= 660) {
        setNavbarBg('#17181c');
    }else{
        setNavbarBg('transparent');
    }
}
 window.addEventListener('scroll', onScroll)

 console.log(IMAGES)

const logoImg = <img className="navbar__brand--img" src={IMAGES.logo} alt="logo" />

const toggleBtn = <svg className={isActive ? 'ham hamRotate active' : 'ham hamRotate ' } viewBox="0 0 100 100" width="60" onClick={handleToggle}>
    <path className="line top"
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
    <path className="line middle" d="m 30,50 h 40" />
    <path className="line bottom"
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
</svg>;




return (

<nav className="navbar" style={{ backgroundColor : navbarBg}}>
    <ul className="navbar__nav">
        <NavbarList className='navbar__brand' url='home' text={logoImg} />
        <ul className={isActive ? 'navbar__main active' : 'navbar__main' }>
            
            {
                navbarPages.map((page)=>{
                   return <NavbarList onClick={handleLinkClick}  key={page} url={page} text={page} />
                })
            }
            
        </ul>
        <li className="navbar__toggle">
            {toggleBtn}
        </li>
    </ul>
</nav>

)}

export default Navbar