import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
const AddTodo = () => {
  const [presentToDo, setPresentToDo] = useState("");
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);
  const handleChange = ({ currentTarget: { name, value } }) => {
    if (name === "addTodo") {
      setPresentToDo(value);
    }
  };
  const addNewTodo = (todo) => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("todos")
      .add({
        title: todo,
        isDone: false,
      })
      .then((docRef) => {
        docRef.update({
          todoID: docRef.id,
        });
      });
    setPresentToDo("");
  };
  return (
    <div className='container d-flex justify-content-center mb-6'>
      <form action="">
          <input
            type="text"
            name="addTodo"
            value={presentToDo}
            onChange={handleChange}
            className='mt-2 mb-5'
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              addNewTodo(presentToDo);
          }}
          className="btn btn-info ml-5"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
export default AddTodo;