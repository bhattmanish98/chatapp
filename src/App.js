import React  from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="8723fcd7-4277-4839-9506-93bd7c444416"
        userName="john"
        userSecret="qwerty"
        renderChatFeed={ (chatAppProps) => <ChatFeed { ...chatAppProps } />}
        onNewMessage={ () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play() }
      />
    </div>
  );
}

export default App;
