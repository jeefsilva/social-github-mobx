import axios from "axios";
import {flow} from "mobx-state-tree"

export const Api = axios.create({ baseURL: "https://api.github.com/" });


export const getUser = flow(function* addApi(value){
    try{ var user = value;
      const profile = yield Api.get(`/users/${user}`, {
        auth: {
          username: "testvoxus",
          password: "258webVOXUS"
        }
      });
      return profile.data
    } catch {
      alert(`Usuário ${user} Inválido`);
    }
})
