import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from "./Components/ChatFeed";
function App() {
  return (
    <ChatEngine 
      height="100vh"
      projectID='da9bebfc-f78b-4955-96a5-bfd5ad4b51d9'
      userName='srikar'
      userSecret='srikar'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
