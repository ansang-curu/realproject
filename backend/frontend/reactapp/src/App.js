import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./home/nav";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/test")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <Nav></Nav>
      <br></br>
      <h1>자 이제 시작이야!!</h1>
      <br></br>

      <h1>{message}메세지</h1>
    </div>
  );
}

export default App;
