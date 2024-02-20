import logo from './logo.svg';
import './Components/ChatGPT.css';
import gptLogo from './Components/assets/chatgpt.svg';
import addBtn from './Components/assets/add-30.png';
import msgIcon from './Components/assets/message.svg';
import home from './Components/assets/home.svg';
import saved from './Components/assets/bookmark.svg';
import rocket from './Components/assets/rocket.svg';
import sendBtn from './Components/assets/send.svg';
import userIcon from './Components/assets/user-icon.jpg';
import gptImgLogo from './Components/assets/chatgptLogo.svg';


function App() {
  return (
    <div className="app">
      <div className="sidebar">
        
         <div className="upperside">
         <div className="upperSideTop"><img src= {gptLogo} alt="logo" className="logo" /><span className="brand">ChatGPT</span></div>
         <button className="midBtn"><img src="{addBtn}" alt="" className="addBtn" />New Chat</button>
         <div className="upperSideBottom">

          <button className="query"><img src={msgIcon} alt="Query" />What is programming</button>
          <button className="Query"><img src={msgIcon} alt="" />How to use an API</button>

         </div>
         </div>
         <div className="lowerside">
            <div className="listItems"><img src={home} alt="" className="listItemImg" />Home</div>
            <div className="listItems"><img src={saved} alt="" className="listItemImg" />Saved</div>
            <div className="listItems"><img src={rocket} alt="" className="listItemImg" />Upgrade to pro</div>
         </div>

      </div>
      <div className="main">
           <div className="chats">
             <div className="chat"><img src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis velit nemo quidem error dolorum quia, modi voluptatem minima assumenda vel odit, provident a placeat. Praesentium!</p></div>
             <div className="chat"><img src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis velit nemo quidem error dolorum quia, modi voluptatem minima assumenda vel odit, provident a placeat. Praesentium!</p></div>
           </div>
           <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder = 'message ChatGPT...'/> 
              <button className="send"><img src={sendBtn} alt="Send" /></button>
            </div>
           </div>
      </div>
    </div>
  );
}

export default App;
