import Navbar from "../../components/navbar/Navbar";
import SocialMediaLink from "../../components/socialMediaLinks/SocialMediaLink";

import { MdMenuBook } from 'react-icons/md';
import { FaInstagram , FaFacebook , FaSnapchat } from 'react-icons/fa';


const Header = () => {
return (
<header className="header" id="home">

  <Navbar />
  <div className="header__intro">
    <h1 className="header__intro--title">Creating Memories, A Bit More Than A Coffee </h1>
    <p className="header__intro--subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae maiores rem iusto? Quae sequi pariatur dolorum, unde modi error rem aut architecto dicta facere voluptatem cumque praesentium cupiditate ad doloribus?</p>
    <a href='https://drive.google.com/file/d/1hDw_GYnEgjS2sN1kH1t5UYLuz_BmZI1M/view?usp=sharing' className="cta"
      target='_blank' rel="noreferrer noopener" >
      Menu
      < MdMenuBook className='cta__icon' />
    </a>

  </div>
  <div className="header__info">
    <div className="header__info__hours">
      <h2 className="header__info--title">Operating Hours</h2>
      <p>SUN - THU : 4PM - 12AM</p>
      <p>FRI - SAT : 4PM - 2AM</p>
    </div>
    <div className="header__info__socialMedia">
      <h2 className="header__info--title">Follow US</h2>
      <nav className="social">
        <ul className="social__navbar">
          <li className="social__navbar__list">
            <SocialMediaLink text={<FaFacebook />} className='social__navbar__list--link' link={'https://www.facebook.com/'}/>
          </li>
          <li className="social__navbar__list">
            <SocialMediaLink text={<FaInstagram />} className='social__navbar__list--link' link={'https://www.facebook.com/'}/>
          </li>
          <li className="social__navbar__list">
            <SocialMediaLink text={<FaSnapchat />} className='social__navbar__list--link' link={'https://www.facebook.com/'}/>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
)
}

export default Header