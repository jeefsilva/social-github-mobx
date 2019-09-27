import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { getSnapshot } from "mobx-state-tree";

import { Users } from "./models/Users";

import * as serviceWorker from "./serviceWorker";
var initialState = {
  users: []
};


let userList = Users.create(initialState);


function renderApp() {
  ReactDOM.render(<App userList={userList} />, document.getElementById("root"));
}

renderApp()

if (module.hot) {
  module.hot.accept(["./components/App"], () => {
    renderApp();
  });

  module.hot.accept(["./models/Users"], () => {
    const snapshot = getSnapshot(userList);
    userList = Users.create(snapshot);
    renderApp();
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
