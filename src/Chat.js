import React from 'react'
import './Chat.css'

export default function Chat(props){

const participant = props.participants.find (p => p.id === props.participants.id)



    return(
        <div className= "listItem" key={props.participantId}>
        <img src={participant.avatar}  alt="personal" />
        <p>{participant.name}</p> 
        <div>{props.time}</div> 
        <div>{props.timestamp}</div> 
        </div>
    )
}