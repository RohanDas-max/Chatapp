import "./App.css";
import SignIn from "./Components/SignIn";
import "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import firebase, { auth } from "./Components/Config/Firebase"
import ChatRoom from "./Components/ChatRoom";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./Components/SignOut";

function App() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    var user = firebase.auth().currentUser;
  }, []);

  return (
    <div className="App">
      <h1 className="font">Chat App</h1>
      <h1>{user != null ? <SignOut /> : ""}</h1>
      <div>{user != null ? <ChatRoom /> : <SignIn />}</div>
    </div>
  );
}

export default App;
