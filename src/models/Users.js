import { types, getParent, destroy } from "mobx-state-tree";

export const User = types
  .model({
    login: types.string,
    avatar_url: "",
    html_url: "",
    name: types.string,
    company: types.string,
    blog: "",
    location: types.string,
    public_repos: types.number,
    followers: types.number
  })
  .actions(self => ({
    changeLogin(newLogin) {
      self.login = newLogin;
    },
    changeId(newId) {
      self.id = newId;
    },
    changeName(newName) {
      self.name = newName;
    },
    changeCompany(newCompany) {
      self.company = newCompany;
    },
    changeBlog(newBlog) {
      self.blog = newBlog;
    },
    changeLocation(newLocation) {
      self.location = newLocation;
    },
    changePublicRepos(newPublicRepo) {
      self.public_repos = newPublicRepo;
    },
    changeFollowers(newFollowers) {
      self.followers = newFollowers;
    },
    remove() {
      getParent(self, 2).remove(self)
    }
  }));

export const Users = types
  .model({
    users: types.optional(types.array(User), []),
  })
  .actions(self => ({
    add(user) {
      self.users.push(user);
    },
    remove(user) {
      destroy(user)
    },
    getUsers(user) {
      window.fetch(`https://api.github.com/users/${user.login}`)
      .then(response => response.json())
      .then(users => {
        alert(JSON.stringify(users))
      })
    }
  }))
  .views(self => ({
      get totalUser() {
          return self.users.length
      }
  }))
