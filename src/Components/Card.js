import React from 'react'

function Card(props) {


  return (
    <li className="headTB">

      <img src={props.pictureUrl} className="imgCard" alt=""/>
      <h4>{props.name}</h4>
      <h4>{Math.floor(props.popularity)} </h4>
      <button onClick={() => props.removeContact(props.id)} className="btn-delete"> Delete </button>
    </li>
  )
}

export default Card