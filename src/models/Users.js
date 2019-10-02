import { types, getParent, destroy, flow, getEnv } from "mobx-state-tree";
import { getUser } from "../services/Api"
import { Repos } from "./Repos"
 

export const User = types
  .model({
    "login": types.string,
    "avatar_url": "",
    "html_url": "",
    "name": types.maybeNull(types.string),
    "blog": "",
    "location": types.maybeNull(types.string),
    "public_repos": types.number,
    "followers": types.number,
    "repos": types.optional(Repos, () => Repos.create())
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
    },
    showRepos() {
      self.repos.addApi()
    }
  }));

export const Users = types
  .model({
    users: types.optional(types.array(User), []),
  })
  .actions(self => ({
    add(user) {
      self.users.unshift(user);
    },
    addUsers(user) {
      self.users.push(...user)
    },
    remove(user) {
      destroy(user)
    },
    addApi: flow(function* (value){
      try{ var user = yield getUser(value)
        self.users.unshift(user)
      } catch {
        getEnv('anyNotificationLibrary').notify(`User: ${user} not found`)
      }
  })
  }))
  .views(self => ({
      get totalUser() {
          return self.users.length
      },
      getUserByName(login) {
        return self.users.filter(user => user.login === login)[0]
      }
  }))
