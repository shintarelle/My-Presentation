import React from "react";
import Image from "../Image";
import './AboutMe.css';

const certificate1 = 'Certificate-1.png';
const certificate2 = 'Certificate-1.png'; //когда дадут изменить!!!

export default function AboutMe() {
  return (
    <>
      <div className='container container-aboutme'>
        <div className='aboutme-wrapper'>
          <h3 className='aboutme-title'>What you need to know about me?</h3>
          <div className='aboutme-info'>
          <div className='aboutme-education'>
            <h4 className='education-title'>Education</h4>
            <ul className='education-list'>
              <li className='education-item'>Ukrainian State Academy of Railway Transport 2003-2008</li>
              <li className='education-item'>
                <p>2022, Front End Basic course at Hillel IT-school</p>

              </li>
              <li className='education-item'>
                <p>2022-2023, Front End Pro course at Hillel IT-school</p>

              </li>
              </ul>
              <div className='education-certificate'>
                <a className="education-link" href='https://certificate.ithillel.ua/view/67778482' target="_blank" ><Image src={certificate1} className={'education-image'} /></a>
              <a className="education-link" href='https://certificate.ithillel.ua/view/67778482' target="_blank" ><Image src={certificate2} className={'education-image'} /></a>
              </div>

          </div>
        <div className='wrapper-skills'>
            <div className='aboutme-hardskills'>
              <h4 className='hardskills-title'>Hard skills</h4>
              <ul className='hardskills-list'>
                <li className='hardskills-item'>HTML5/CSS3</li>
                <li className='hardskills-item'>JavaScript (ES6+)</li>
                <li className='hardskills-item'>Git</li>
                <li className='hardskills-item'>React</li>
                <li className='hardskills-item'>Redux</li>
              </ul>
            </div>
            <div className='aboutme-softkills'>
              <h4 className='softskills-title'>Soft skills</h4>
              <ul className='softkills-list'>
                <li className='softkills-item'>Communicable</li>
                <li className='softkills-item'>Fast learning</li>
                <li className='softkills-item'>Highly responsible</li>
                <li className='softkills-item'>Logical thinking</li>
                <li className='softkills-item'>Friendly</li>
              </ul>
            </div>
            <div className='aboutme-hobbies'>
              <h4 className='hobbies-title'>Hobbies</h4>
              <ul className='hobbies-list'>
                <li className='hobbies-item'>yoga</li>
                <li className='hobbies-item'>bicycle</li>
                <li className='hobbies-item'>psychology</li>
              </ul>
            </div>
            </div>
            {/* <div className='aboutme-certificate'>
              <div><a className="education-link" href='https://certificate.ithillel.ua/view/67778482' target="_blank" >Certificate</a></div>
              <div><a className="education-link" href='https://certificate.ithillel.ua/view/67778482' target="_blank" >Certificate</a></div>
            </div> */}
          </div>
          </div>
    </div>
    </>
  )
}


// Personal Summary: I have non-commercial experience in creating websites.
// Technologies used: HTML, CSS, JavaScript, jQuery, Bootstrap, SCSS, Owl carousel.
// I’d like to invite you to review some projects in my portfolio:
// https://github.com/shintarelle/Food_Bill_Landing_page
// https://github.com/shintarelle/Diplom-project-1


// Hard skills:
// HTML5/CSS3;
// Bootstrap 3;
// jQuery;
// JavaScript (ES6+) 
// Git;
// Photoshop / Illustrator / Avocode / Figma


// Education:  Ukrainian State Academy of Railway Transport 2003-2008
// Communications Engineer Master

// Additional education:
// 2022, Front End Basic course at Hillel IT-school
//  https://certificate.ithillel.ua/view/67778482

// Now, Front End Pro course at Hillel IT-school


// Work Experience:
// 2015-2022 -entrepreneur, business owner
// 2008-2011- communications designer for the railway and subway
// 2007-2008 - cell tower installation company
// 2006-2007 - radio parts store

// Soft skills:
// Communicable
// Fast learning
// Highly responsible
// Logical thinking
// Friendly

// Additional Information:
// Healthy life-style
// English – pre-intermediate

// Hobbies: yoga, bicycle, psychology,
