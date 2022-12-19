import React, { useEffect} from 'react';
import { io } from "socket.io-client";
import { SOCKET_URL} from "./constants/constans"
 
const socket = io(SOCKET_URL);



const App = () => {

  useEffect(() => {
    socket.on("connect", () => {
      console.log("USER CONNECTED to SOCKET");
    })
  })
  return (
    <div>App</div>
  )
}

export default App;
