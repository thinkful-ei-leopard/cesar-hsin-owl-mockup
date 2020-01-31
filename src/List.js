
import React from 'react';
import './List.css';




export default function List(props) {
  let data = "";
  let color = "grey";
  if (props.inSession === true) {
    if (props.onStage === true) {
      data = 'On Stage';
      color = "green";
    } else if (props.onStage === false) {
      data = 'In Session';
      color = "grey";
    }

  } else if (props.inSession === false) {
    data = 'left session';

  }



  return (
    <div className="listItem" key={props.id}>
      <img src={props.avatar} alt="personal" />
      <p>{props.name}</p>
      <div><p className= {color}></p>{data}</div>
    </div>
  )
};

