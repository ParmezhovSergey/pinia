import { defineStore } from "pinia";
import { getUsers } from "./api";

export interface IUser {
  id: number;
  name: string;
  age: number | null;
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

    removeUser(id: number){
      this.users = this.users.filter((p) => p.id !== id)
    },

    changeUsers(newUser: IUser) {
      const newUsers = this.users.map((obj)=> {
        if (obj.id === newUser.id) {
          return newUser;
        }
        return obj;
      })
      this.users = newUsers
    }
  },
});
