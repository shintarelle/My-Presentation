import React from "react";
import './Experience.css';

export default function Experience() {
  return (
    <>
    <div className='container container-experience'>
      <h3>What you need to know about my experience?</h3>
      <div className='experience-wrapper'>
        <details className='experience-item'>
          <summary className='item-question'>How many years of front-end development experience do you have?</summary>
          <p className='item-answer'>I have experience in front-end development at the time of starting at the Hillel Frontend Pro school, about three months of layout (assignment, diploma project and 3 separate landing pages) and 6 months in Javascript/React development (several applications)</p>
        </details>
        <details className='experience-item'>
          <summary className='item-question'>Have you worked with JavaScript? What JS tools/libraries have you worked with? Do you have experience with React? (commercial or on projects)</summary>
          <p className='item-answer'>Yes, worked with Webpack, Visual Studio Code, Chrome Dev Tools, ESLint, Git, Github, Npm and React, React-DOM, jQuerry, Formik, Yup libraries, no commercial experience</p>
        </details>
        <details className='experience-item'>
          <summary className='item-question'>What modern layout systems have you used?</summary>
          <p className='item-answer'>I used Webpack built into React</p>
        </details>
        <details className='experience-item'>
          <summary className='item-question'>
Are you familiar with SEO optimization? Have you worked with Google Analytics, GTM? Please tell us more about this experience.</summary>
          <p className='item-answer'>No. I know what it is, but I have not worked with it</p>
        </details>
        <details className='experience-item'>
          <summary className='item-question'>Did you create marketing landing pages specifically?</summary>
          <p className='item-answer'>I made several landing pages, such as a business card for a restaurant, an Izhi order site.</p>
        </details>
        <details className='experience-item'>
          <summary className='item-question'> How often and with whom do you use spoken English at work?</summary>
          <p className='item-answer'> At work, I use English so far only to gain knowledge and find solutions to tasks in the documentation.</p>
        </details>
      </div>
      </div>
    </>
  )
}
