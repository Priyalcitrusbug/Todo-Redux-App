import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "../Components/AddTodo";
import { useFirestoreConnect, useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import ToDoItem from "../Components/TodoItem";

const Todos = () => {
  const { displayName, uid } = useSelector((state) => state.firebase.auth);
  useFirestoreConnect({
    collection: `users/${uid}/#/todos`,
    storeAs: "todos",
  });
  const todos = useSelector((state) => state.firestore.data.todos);
  const firebase = useFirebase();
  const history = useHistory();

  const signout = () => {
      firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      });
  };

  return (
    <div>
      <div className='bg-secondary h-68' style={{padding: '12px'}}>
        <h3 className='d-inline text-light'>Hello {displayName}</h3>
        <button
            onClick={(event) => {
              event.preventDefault();
              signout();
            }}
            className="btn btn-success d-inline ml-30 float-right"
          >
            SignOut
        </button>
      </div>
      <h4 className="mt-5">Todos</h4>
      <AddTodo />
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        {todos &&
          Object.values(todos).map((todo) => (
            <li>
              {todo === null ? '' : 
                <ToDoItem
                  title={todo.title}
                  isDone={todo.isDone}
                  todoID={todo.todoID}
                />
              }
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Todos;