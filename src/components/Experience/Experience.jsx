import React from "react";
import './Experience.css';
import dataDetails from './dataDetails.json';
import Details from "./Details";

export default function Experience() {
  return (
    <>
    <div className='container container-experience'>
      <h3 className='experience-title'>What you need to know about my experience?</h3>
        <div className='experience-wrapper'>
          {dataDetails.map(item => {
            return <Details key={item.question} item={item} />
          })}
        </div>
      </div>
    </>
  )
}
