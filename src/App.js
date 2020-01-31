
import React from 'react';
import List from './List';
import Stage from './Stage';
import Chat from './Chat';
import './index.css';
import './App.css';


function App(props) {
  const listOnStage = (props.store.participants).map(item =>
    <List key={item.id} name={item.name} avatar={item.avatar} inSession={item.inSession} onStage={item.onStage} />);
  const liveVideo = (props.store.participants).map(item =>
    <Stage key={item.id} name={item.name} avatar={item.avatar} inSession={item.inSession} onStage={item.onStage} />);
  const chatRoom =(props.store.chatEvent).map(item =>
   <Chat partcipants= {props.store.participants} key={item.participantId} type ={item.type} message ={item.message} time ={item.time} timestamp={item.timestamp} />)
  return (
    <div className="App">
      <main className="App-header">
        <div className="stage">{listOnStage}</div>
        <div className="live" >{liveVideo}</div>
        <div>{chatRoom}</div>
      </main>
    </div>
  );
}

export default App;
