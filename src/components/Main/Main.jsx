import React from "react";
import Image from "../Image";
import './Main.css';
import Network from "./Network";

const photo = 'photo.jpeg';

export default function Main(){
  return (
    <>
      <div className="container container-main">
        <div className="main-person-data">
          <div className="main-contacts">
            <p className="main-text">e-mail: <a className="main-mail" href="mailto:annrozhkina@gmail.com">annrozhkina@gmail.com</a></p>
            <p className="main-text">phone: <a className="main-phone" href="tel:+380635283957">+380635283957</a></p>
            <Network />
          </div>
          <div className="main-person-wrapper">
            <div className="main-person-photo">
              <Image src={photo} className={'main-person-image'} />
            </div>
            <div className='main-person-info'>
              <h1 className='info-title'>Ann</h1>
              <h2 className='info-subtitle'>Rozhkina</h2>
              <p className='main-profession'>Frontend developer</p>
            </div>
          </div>
      </div>
    </div>
    </>
  );
}
