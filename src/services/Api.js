import axios from "axios";

const Api = axios.create({ baseURL: "https://api.github.com/" });

export const loadProfile = async value => {
  try {
    var user = value;
    const profiles = await Api.get(`/users/${user}`, {
      auth: {
        username: "testvoxus",
        password: "258webVOXUS"
      }
    });
    localStorage.setItem("list_user", JSON.stringify(profiles.data));
  } catch {
    alert(`Usuário ${user} Inválido`);
    localStorage.removeItem("list_user");
  }
  //load dos dados da API via input pelo nome de usuário
};

export const consoleValue = async value => {
  console.log(value);
};

export const loadUsers = async () => {
  const response = await Api.get("/users", {
    auth: {
      username: "testvoxus",
      password: "258webVOXUS"
    }
  });

  const users = response.data;
  const result = users.map(user => user.login);

  var collection = [];

  for (const a of result) {
    const profiles = await Api.get(`/users/${a}`, {
      auth: {
        username: "testvoxus",
        password: "258webVOXUS"
      }
    });
    collection.push(profiles.data);
  }
  localStorage.setItem("list_users", JSON.stringify(collection));
  collection = JSON.parse(localStorage.getItem("list_users"));
  //load dos dados da API do github
};
