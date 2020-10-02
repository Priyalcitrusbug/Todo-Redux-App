import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
const ToDoItem = ({ isDone, title, todoID }) => {
  const [isTodoItemDone, setTodoItemDone] = useState(isDone);
  const firestore = useFirestore();
  const {uid} = useSelector(state => state.firebase.auth);

  const handleChange = (event) => {
    if (event.currentTarget.type === "checkbox") {
      setTodoItemDone(!isTodoItemDone);
      firestore.collection("users").doc(uid).collection("todos").doc(todoID).update({
        isDone: !isTodoItemDone
      })
    }
  };

  const deleteTodo = () => {
    firestore.collection("users").doc(uid).collection("todos").doc(todoID).delete().then(function() {
      alert("Item successfully deleted.");      
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
  }

  return (
    <div className="container">
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>{title}</span>
          <span>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={handleChange}
              checked={isTodoItemDone}
            />
          </span>
          <span>{isTodoItemDone ? 
            <button type="button" className="btn btn-secondary" onClick={deleteTodo} >Remove</button> :
            <button className="btn btn-secondary" disabled>Remove</button>}</span>
        </li>
      </ul>
    </div>
  );
};
export default ToDoItem;