import { types, flow, getParent, getEnv } from "mobx-state-tree";
import { getRepos } from "../services/Api"

export const Repo = types
  .model({
    "name": types.string,
    "stargazers_count": types.number,
    "language": types.maybeNull(types.string)
  });

  export const Repos = types
  .model({
    repos: types.optional(types.array(Repo), []),
  })
  .actions(self => ({
    addApi: flow(function* (){
      const value = getParent(self, 1).login
      try{ var repo = yield getRepos(value)
        self.repos.push(...repo)
      } catch(error) {
        getEnv('anyNotificationLibrary').notify(`Repos: ${repo} not found`)
        throw error;
      }
  })
  }))
