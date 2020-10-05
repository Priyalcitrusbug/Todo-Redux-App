import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from "./ducks/reducers";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAd4eJ6sW-JoEBoBlC8_bf1c246my4GXnE",
  authDomain: "to-do-app-b0d04.firebaseapp.com",
  databaseURL: "https://to-do-app-b0d04.firebaseio.com",
  projectId: "to-do-app-b0d04",
  storageBucket: "to-do-app-b0d04.appspot.com",
  messagingSenderId: "598084711554",
  appId: "1:598084711554:web:95695b55375efe60c8709b",
  measurementId: "G-2RMYB947NN"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
