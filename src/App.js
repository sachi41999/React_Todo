import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { Todo } from "./componenet/Todo";
import db from "./componenet/Firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";

function App() {
  const [todos, settodos] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todo_co")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        // console.log(snapShot.docs.map((doc) => doc.data()));
        settodos(
          snapShot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            getim: doc.data().timestamp,
          }))
        );
      });
  }, []);

  const addtodo = (eb) => {
    eb.preventDefault();
    db.collection("todo_co").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //settodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>🚀 Hello SabyaSachi to React World! 🚀</h1>
      <form>
        <FormControl>
          <InputLabel>✍️ Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          variant="contained"
          type="submit"
          onClick={addtodo}
          color="primary"
        >
          Add Todo
        </Button>
      </form>
      {todos.map((todo) => (
        <Todo text={todo} />
      ))}
    </div>
  );
}

export default App;
