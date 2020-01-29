
import React from 'react';
import List from './List';
import Stage from './Stage';
import './index.css';



function App(props) {
  const listOnStage = (props.store.participants).map(item =>
    <List key={item.id} name ={item.name} image ={item.avatar} join ={item.inSession} stage={item.onStage} />);
    const listVideo = (props.store.participants).map(item =>
    <Stage  key={item.id} name ={item.name} image ={item.avatar} join ={item.inSession} stage={item.onStage} />);
  return (
    <div className="App">
      <header className="App-header">
      <div>{listOnStage}</div>
      <div>{listVideo}</div>
      </header>
    </div>
  );
}

export default App;
