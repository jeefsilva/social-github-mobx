import { types, getParent, destroy, flow } from "mobx-state-tree";
import { getUser } from "../services/Api"


export const User = types
  .model({
    "login": types.string,
    "avatar_url": "",
    "html_url": "",
    "name": types.optional(types.maybeNull(types.string), null),
    "blog": "",
    "location": types.optional(types.maybeNull(types.string), null),
    "public_repos": types.number,
    "followers": types.number,
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
      self.users.unshift(user);
    },
    addUsers(user) {
      self.users.push(...user)
    },
    remove(user) {
      destroy(user)
    },
    addApi: flow(function* addApi(value){
      try{ var user = yield getUser(value)
        self.users.unshift(user)
      } catch {
        alert(`User: ${user} not found`);
      }
  })
  }))
  .views(self => ({
      get totalUser() {
          return self.users.length
      }
  }))
