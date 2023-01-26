import React from "react";
import Network from "../Main/Network";
import './Footer.css';

const resume = 'https://drive.google.com/file/d/1kUNrFVHIe8GEc03jSz8S24slI22E8gtr/view?usp=sharing';

export default function Footer() {
  return (
    <>
      <div className='container-footer'>
        <div className='footer-wrapper'>
          <h3 className='footer-title'><a className='footer-link' href={resume}  download>Download my CV</a></h3>
          <div className='footer-network'>
            <Network />
          </div>
        </div>
      </div>
    </>
  )
}
