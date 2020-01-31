import React from 'react';
import './Stage.css';



export default function Stage(props){
  if(props.onStage === true){
      return (
     <div className="flex">
      <p className="name-style">{props.name}</p>
     <img className="image-style" src={props.avatar} alt="video-img"/>
     </div>
      )
  }else if(props.onStage === false){
    return ( <div></div>);
  }
}