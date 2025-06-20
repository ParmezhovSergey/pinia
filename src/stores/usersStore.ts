import { defineStore } from "pinia";
import { getUsers } from "./api";

interface IUser {
  id: number;
  name: string;
  age: number;
  city: string;
}
interface IAuth {
  login: string;
  pass: string;
}

// interface initialState {
//   users: Array<IUser>;
// }

export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    users: [] as IUser[],
    auth: {} as IAuth,
  }),

  getters: {},

  actions: {
    async fetchUsers() {
      const settings = await getUsers();
      this.users = settings.users;
      this.auth = settings.auth;
      console.log("post", settings.auth);
    },
  },
});
