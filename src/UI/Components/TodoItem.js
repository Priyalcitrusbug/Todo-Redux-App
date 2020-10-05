import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";

const ToDoItem = ({ isDone, title, todoID }) => {
  const [isTodoItemDone, setTodoItemDone] = useState(isDone);
  const [inpdisabled, setInpDisable] = useState(true);
  const firestore = useFirestore();
  const {uid} = useSelector(state => state.firebase.auth);
  const [inpValue, setInputValue] = useState(title)

  const editTodo = (event) => {
    if(event.currentTarget.type === "button") {
      setInpDisable(false);
    }
  }

  const deleteTodo = () => {
    firestore.collection("users").doc(uid).collection("todos").doc(todoID).delete().then(function() {
      alert("Item successfully deleted.");      
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });
  }

  const handleChange = ({ currentTarget: { name, value } }) => {
    if (name === "editTodo") {
      setInputValue(value);
    }
  };

  const handleInpLeave = () =>{
    setInpDisable(true);
    firestore.collection("users").doc(uid).collection("todos").doc(todoID).update({
      title: inpValue,
      isDone: isTodoItemDone
  })
  }

  return (
    <div className="container">
      <table class="table">
        <tbody>
          <tr>
            <td>
              <form action="" onSubmit={e => { e.preventDefault(); }}>
                <span className="form-group">
                  <input type="text" className="form-control border-0" name="editTodo" value={inpValue} onChange={handleChange} readOnly={inpdisabled} onMouseLeave={handleInpLeave}/>
                </span>
              </form>
            </td>
            <td>
              <span>
                <button type='button' className='btn btn-secondary' onClick={editTodo}>Edit</button>
              </span>
            </td>
            <td>
              <span>
                  <button type="button" className="btn btn-secondary" onClick={deleteTodo} >Remove</button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ToDoItem;