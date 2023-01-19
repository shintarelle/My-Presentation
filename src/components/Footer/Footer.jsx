import React from "react";
import './Footer.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const photo = 'photo.jpeg';
const style = {
  'width': '20px',
  'height': '20px',
  'alignSelf': 'center',
}

export default function Footer() {
  return (
    <>
    <div className='container container-footer'>
      <h3>Download my CV</h3>
      <div className='footer-wrapper'>
    <ul className="main-network">
              <li className='main-list'><a className="main-icon" href='https://www.linkedin.com/in/ann-rozhkina-37a827239/'>
                <FontAwesomeIcon icon={faLinkedin} style={style} /></a></li>
              <li className='main-list'><a className="main-icon" href="https://github.com/shintarelle">
                <FontAwesomeIcon icon={faGithub} style={style}/></a></li>
              <li className='main-list'><a className="main-icon" href="https://t.me/shintarelle">
                <FontAwesomeIcon icon={faTelegram} style={style} /></a></li>
            </ul>



      </div>
      </div>
    </>
  )
}
