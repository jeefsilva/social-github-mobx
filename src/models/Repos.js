import { types, flow } from "mobx-state-tree";
import { getRepos } from "../services/Api"

export const Repo = types
  .model({
    "name": types.string,
    "stargazers_count": types.number,
    "language": types.string,
  });

  export const Repos = types
  .model({
    repos: types.optional(types.array(Repo), []),
  })
  .actions(self => ({
    add(repo) {
      self.repos.unshift(repo);
    },
    addUsers(repo) {
      self.repos.push(...repo)
    },
    addApi: flow(function* addApi(value){
      try{ var repo = yield getRepos(value)
        self.repos.push(...repo)
      } catch {
        alert(`Reposistories for user ${repo} not found`);
      }
  })
  }))
