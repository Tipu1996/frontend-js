import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//import store from "./store/store";
//import * as actions from "./store/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//const value = store.getState();
/*
store.dispatch(
  actions.apiCallBegan({
    url: "https://restcountries.com/v3.1/all",
    onSuccess: "countries/countriesReceived",
    //onError: actions.apiCallFailed.type,
  })
);
*/
