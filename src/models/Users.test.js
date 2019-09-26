import { getSnapshot, onSnapshot, onPatch } from "mobx-state-tree";
import { Users, User } from "./Users";
import { reaction } from "mobx"

it("can create a instance of a model", () => {
  const data = User.create({
    login: "mojombo",
    id: 1,
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
    name: "Tom Preston-Werner",
    company: "",
    blog: "http://tom.preston-werner.com",
    location: "San Francisco",
    public_repos: 61,
    followers: 21658
  });

  expect(data.company).toBe("");
  data.changeLogin("jeefsilva");
  expect(data.login).toBe("jeefsilva");
});

it("can add new users - 2", () => {
  const userList = Users.create();
  const patches = [];
  onPatch(userList, snapshot => {
    patches.push(snapshot);
  });
  userList.add({
    login: "jeefsilva",
    id: 2,
    avatar_url: "",
    html_url: "https://github.com/jeefsilva",
    name: "Jefferson Silva",
    company: "",
    blog: "http://aagenciasalvare.com.br",
    location: "São Paulo",
    public_repos: 6,
    followers: 1
  });

  userList.users[0].changeLogin("roberto");

  expect(patches).toMatchSnapshot();
});

it("can calculate the total of users", () => {
  const userList = Users.create({
    users: [
      {
        login: "roberto",
        id: 1,
        avatar_url: "",
        html_url: "https://github.com/jeefsilva",
        name: "Jefferson Silva",
        company: "",
        blog: "http://aagenciasalvare.com.br",
        location: "São Paulo",
        public_repos: 6,
        followers: 1
      },
      {
        login: "jeefsilva",
        id: 2,
        avatar_url: "",
        html_url: "https://github.com/jeefsilva",
        name: "Jefferson Silva",
        company: "",
        blog: "http://aagenciasalvare.com.br",
        location: "São Paulo",
        public_repos: 6,
        followers: 1
      }
    ]
  })

  expect(userList.totalUser).toBe(12)

  let changed = 0
  reaction(() => userList.totalUser, () => changed++)

  expect(changed).toBe(0)
  console.log(userList.totalUser)
  userList.users[0].changeLogin("oswaldo")
  expect(changed).toBe(0)
  userList.users[0].changePublicRepos(18)
  expect(changed).toBe(1)
});
