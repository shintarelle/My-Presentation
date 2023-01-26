import React from "react";

export default function Details(props) {
  return (
    <>
    <details className='experience-item'>
          <summary className='item-question'>{props.item.question}</summary>
          <p className='item-answer'>{props.item.answer}</p>
      </details>
    </>

  )
}
