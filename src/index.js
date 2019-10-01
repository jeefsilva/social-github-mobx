import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { Provider } from "mobx-react";
import { onSnapshot, destroy, getSnapshot } from "mobx-state-tree";
import { Users } from "./models/Users";
import { Repos } from "./models/Repos";
import * as serviceWorker from "./serviceWorker";

const localStorageKey = "social-github-mobx";

var initialState = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey))
  : {
      users: [
        {
          login: "roberto",
          id: 3,
          avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          html_url: "https://github.com/jeefsilva",
          name: "Jefferson Silva",
          company: "",
          blog: "http://teste.com.br",
          location: "São Paulo",
          public_repos: 6,
          followers: 1
        },
        {
          login: "roberto",
          id: 3,
          avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          html_url: "https://github.com/jeefsilva",
          name: "Jefferson Silva",
          company: "",
          blog: "http://teste.com.br",
          location: "São Paulo",
          public_repos: 6,
          followers: 1
        },
        {
          login: "roberto",
          id: 3,
          avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          html_url: "https://github.com/jeefsilva",
          name: "Jefferson Silva",
          company: "",
          blog: "http://teste.com.br",
          location: "São Paulo",
          public_repos: 6,
          followers: 1
        },
        {
          login: "roberto",
          id: 3,
          avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          html_url: "https://github.com/jeefsilva",
          name: "Jefferson Silva",
          company: "",
          blog: "http://teste.com.br",
          location: "São Paulo",
          public_repos: 6,
          followers: 1
        }
      ]
    };

var repoState = {
  repos: [
    {
      name: "Repo teste",
      stargazers_count: 200,
      language: "JavaScript"
    },
    {
      name: "Repo teste",
      stargazers_count: 200,
      language: "JavaScript"
    }
  ]
};

let store;
let snapshotListener;

function createUserList(snapshot) {
  // clean up snapshot listener
  if (snapshotListener) snapshotListener();
  // kill old store to prevent accidental use and run clean up hooks
  if (store) destroy(store);

  // create new one
  store = Users.create(snapshot);

  // connect local storage
  snapshotListener = onSnapshot(store, snapshot =>
    localStorage.setItem(localStorageKey, JSON.stringify(snapshot))
  );

  return store;
}

let userList = Users.create(initialState);
let userRepo = Repos.create(repoState);

onSnapshot(userList, snapshot => {
  localStorage.setItem("users_list", JSON.stringify(snapshot));
});

function renderApp(App, store, repo) {
  ReactDOM.render(
    <Provider userList={store} userRepo={repo}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

renderApp(Routes, createUserList(initialState), userRepo);

// Connect HMR
if (module.hot) {
  module.hot.accept(["./models/Users"], () => {
    // Store definition changed, recreate a new one from old state
    renderApp(Routes, createUserList(getSnapshot(store)));
  });

  module.hot.accept(["./components/App"], () => {
    // Componenent definition changed, re-render app
    renderApp(Routes, store);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
