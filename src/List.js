
import React from 'react';
import './List.css';




export default function List(props){
  let data="";
  if(props.inSession === true){
     if(props.onStage === true){
         data = 'On Stage';
     }else if(props.onStage === false) {
        data = 'In Session';
      }
    
   }else if(props.inSession === false){
        data='left session';
    
    }

    
    
      return (
      <div className= "listItem" key={props.id}>
      <img src={props.avatar}  alt="personal" />
      <p>{props.name}</p> 
      <div><p className="green"></p>{data}</div> 
      </div>
     )
      };

  