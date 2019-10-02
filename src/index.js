import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { Provider } from "mobx-react";
import { onSnapshot, destroy, getSnapshot } from "mobx-state-tree";
import { Users } from "./models/Users";
import * as serviceWorker from "./serviceWorker";

const localStorageKey = "social-github-mobx";

var initialState = localStorage.getItem(localStorageKey)
  ? JSON.parse(localStorage.getItem(localStorageKey))
  : {
      users: [
        {
          login: "mojombo",
          id: 1,
          node_id: "MDQ6VXNlcjE=",
          avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mojombo",
          html_url: "https://github.com/mojombo",
          followers_url: "https://api.github.com/users/mojombo/followers",
          following_url:
            "https://api.github.com/users/mojombo/following{/other_user}",
          gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/mojombo/subscriptions",
          organizations_url: "https://api.github.com/users/mojombo/orgs",
          repos_url: "https://api.github.com/users/mojombo/repos",
          events_url: "https://api.github.com/users/mojombo/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/mojombo/received_events",
          type: "User",
          site_admin: false,
          name: "Tom Preston-Werner",
          company: null,
          blog: "http://tom.preston-werner.com",
          location: "San Francisco",
          email: null,
          hireable: null,
          bio: null,
          public_repos: 61,
          public_gists: 62,
          followers: 21655,
          following: 11,
          created_at: "2007-10-20T05:24:19Z",
          updated_at: "2019-08-19T19:50:56Z"
        },
        {
          login: "defunkt",
          id: 2,
          node_id: "MDQ6VXNlcjI=",
          avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/defunkt",
          html_url: "https://github.com/defunkt",
          followers_url: "https://api.github.com/users/defunkt/followers",
          following_url:
            "https://api.github.com/users/defunkt/following{/other_user}",
          gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/defunkt/subscriptions",
          organizations_url: "https://api.github.com/users/defunkt/orgs",
          repos_url: "https://api.github.com/users/defunkt/repos",
          events_url: "https://api.github.com/users/defunkt/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/defunkt/received_events",
          type: "User",
          site_admin: false,
          name: "Chris Wanstrath",
          company: null,
          blog: "http://chriswanstrath.com/",
          location: null,
          email: null,
          hireable: null,
          bio: "🍔",
          public_repos: 107,
          public_gists: 273,
          followers: 20811,
          following: 210,
          created_at: "2007-10-20T05:24:19Z",
          updated_at: "2019-02-15T18:05:47Z"
        },
        {
          login: "pjhyett",
          id: 3,
          node_id: "MDQ6VXNlcjM=",
          avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/pjhyett",
          html_url: "https://github.com/pjhyett",
          followers_url: "https://api.github.com/users/pjhyett/followers",
          following_url:
            "https://api.github.com/users/pjhyett/following{/other_user}",
          gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/pjhyett/subscriptions",
          organizations_url: "https://api.github.com/users/pjhyett/orgs",
          repos_url: "https://api.github.com/users/pjhyett/repos",
          events_url: "https://api.github.com/users/pjhyett/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/pjhyett/received_events",
          type: "User",
          site_admin: false,
          name: "PJ Hyett",
          company: "GitHub, Inc.",
          blog: "https://hyett.com",
          location: "San Francisco",
          email: null,
          hireable: null,
          bio: null,
          public_repos: 8,
          public_gists: 21,
          followers: 8191,
          following: 30,
          created_at: "2008-01-07T17:54:22Z",
          updated_at: "2018-07-12T15:25:03Z"
        },
        {
          login: "wycats",
          id: 4,
          node_id: "MDQ6VXNlcjQ=",
          avatar_url: "https://avatars0.githubusercontent.com/u/4?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wycats",
          html_url: "https://github.com/wycats",
          followers_url: "https://api.github.com/users/wycats/followers",
          following_url:
            "https://api.github.com/users/wycats/following{/other_user}",
          gists_url: "https://api.github.com/users/wycats/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wycats/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/wycats/subscriptions",
          organizations_url: "https://api.github.com/users/wycats/orgs",
          repos_url: "https://api.github.com/users/wycats/repos",
          events_url: "https://api.github.com/users/wycats/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wycats/received_events",
          type: "User",
          site_admin: false,
          name: "Yehuda Katz",
          company: "Tilde, Inc.",
          blog: "http://yehudakatz.com",
          location: "San Francisco",
          email: null,
          hireable: null,
          bio: null,
          public_repos: 220,
          public_gists: 751,
          followers: 9376,
          following: 4,
          created_at: "2008-01-12T05:38:33Z",
          updated_at: "2019-10-01T18:18:50Z"
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

onSnapshot(userList, snapshot => {
  localStorage.setItem("users_list", JSON.stringify(snapshot));
});

function renderApp(App, store) {
  ReactDOM.render(
    <Provider userList={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}

renderApp(Routes, createUserList(initialState));

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
