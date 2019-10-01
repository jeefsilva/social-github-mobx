import { types } from "mobx-state-tree";

export const Repo = types
  .model({
    "name": types.string,
    "stargazers_count": types.number,
    "language": types.string,
  });

  export const Repos = types
  .model({
    repos: types.optional(types.array(Repo), []),
  });
