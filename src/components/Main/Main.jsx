import React from "react";
import Image from "../Image";
import './Main.css';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

const photo = 'photo.jpeg';
const style = {
  'width': '20px',
  'height': '20px',
  'alignSelf': 'center',
}

export default function Main(){
  return (
    <>
      <div className="container container-main">
        <div className="main-person-data">
          <div className="main-contacts">
            <p className="main-text">e-mail: <a className="main-mail" href="mailto:annrozhkina@gmail.com">annrozhkina@gmail.com</a></p>
            <p className="main-text">phone: <a className="main-phone" href="tel:+380635283957">+380635283957</a></p>
            <ul className="main-network">
              <li className='main-list'><a className="main-icon" href='https://www.linkedin.com/in/ann-rozhkina-37a827239/'>
                <FontAwesomeIcon icon={faLinkedin} style={style} /></a></li>
              <li className='main-list'><a className="main-icon" href="https://github.com/shintarelle">
                <FontAwesomeIcon icon={faGithub} style={style}/></a></li>
              <li className='main-list'><a className="main-icon" href="https://t.me/shintarelle">
                <FontAwesomeIcon icon={faTelegram} style={style} /></a></li>
            </ul>
          </div>
          <div className="main-person-wrapper">
            <div className="main-person-photo">
              <Image src={photo} className={'main-person-image'} />
            </div>
            <div className='main-person-info'>
              <h1>Ann</h1>
              <h2>Rozhkina</h2>
              <p className='main-profession'>Frontend developer</p>
            </div>

          </div>
      </div>
    </div>
    </>
  );
}
