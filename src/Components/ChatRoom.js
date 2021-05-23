import React, { useState, useRef, useEffect } from "react";
import SignOut from "./SignOut";
import firebase from "../Config/firebaseConfig";
import auth from "../Config/firebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ChatRoom.css";
import { Button, Form, FormGroup, Label} from "reactstrap";

export default function ChatRoom() {
  const trash = useRef(null);
  const [Message, setMessage] = useState("");
  const [Data, setData] = useState([]);
  var user = firebase.auth().currentUser;

  var db = firebase.firestore();
  var messageRef = db.collection("message");

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("message").get();
      setData(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, [Data]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await messageRef.add({
      text: Message,
      name: user.displayName,
    });
    setMessage("");
    trash.current.focus();
  };

  return (
    <>
    
      <div className="main">
        <div className="signout">
          
        </div>

        <Form className="form">
          <FormGroup  ref={trash}>
            <Label for="exampleText" className="text-white">Lets do ChitChat</Label>
            <div 
              className="form-control"
              type="textarea"
              name="text"
              id="exampleText"
            >
              {" "}
              {Data.map((msg) => (
                <li className="text-dark" key={msg.text}>
                  {msg.name} : {msg.text}
                </li>
              ))}
            </div>
          </FormGroup>
        </Form>

        <form className="form-2 fixed-bottom " onSubmit={onSubmit}>
          <input
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Speak Your Mind"
          />
          <Button className="btn btn-success">Send</Button>
        </form>
      </div>
    </>
  );
}
