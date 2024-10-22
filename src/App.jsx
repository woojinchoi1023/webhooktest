import axios from "axios";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    axios.post("https://meeting.ssafy.com/hooks/ptzu19mghtn4teqfdi57hnebye", {
      text: message,
    });
    setMessage("");
  };
  return (
    <div>
      <h1>메세지 대신 전해드립니다.</h1>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <button onClick={sendMessage}>전송</button>
    </div>
  );
}

export default App;
