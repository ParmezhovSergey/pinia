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
    auth: {
      login: 'user',
      pass: 'pass'
    } as IAuth,
  }),

  getters: {},

  actions: {
    async fetchUsers() {
      const settings = await getUsers();
      this.users = settings.users;
      
      console.log("post", settings);
    },
  },
});
