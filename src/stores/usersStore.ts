import { defineStore } from "pinia";
import { getUsers } from "./api";

export interface IUser {
  id: number;
  name: string;
  age: number;
  city: string;
}

export interface initialState {
  users: Array<IUser>;
}

export const useUsersStore = defineStore("usersStore", {
  state: () => ({
    users:  [] as IUser[],
  }),
  getters: {},
  actions: {
    async fetchUsers() {
      const settings = await getUsers();
      this.users = settings;
      console.log("post", settings);
    },
  },
});
