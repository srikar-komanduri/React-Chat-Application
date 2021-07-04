import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";
function App() {
  if(!localStorage.getItem('userName')){
    return <LoginForm/>
  }
  return (
    <ChatEngine 
      height="100vh"
      projectID='da9bebfc-f78b-4955-96a5-bfd5ad4b51d9'
      userName={localStorage.getItem('userName')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
