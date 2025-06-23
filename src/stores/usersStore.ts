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

interface initialState {
  users: Array<IUser>;
  userCity: Array<IUser>;
  auth: IAuth;
  city: string;
  searchQuery: string;
}

export const useUsersStore = defineStore("usersStore", {
  state: (): initialState => ({
    users: [],
    userCity: [],
    auth: {
      login: "user",
      pass: "pass",
    },
    city: "",
    searchQuery: "",
  }),

  getters: {
    usersFilter(state) {
      if (state.city !== "") {
        return state.users.filter(
          (item: { city: string }) => item.city === state.city
        );
      } else {
        return state.users;
      }
    },
    searchUser(state: any) {
      if (state.searchQuery !== "") {
        return state.usersFilter.filter((item: { name: string }) =>
          item.name.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
      } else {
        return state.usersFilter;
      }
    },
  },

  actions: {
    async fetchUsers() {
      const settings = await getUsers();
      this.users = settings.users;

      const uniqueData = settings.users.filter(
        (item: { city: string }, index: number, self: IUser[]) =>
          index === self.findIndex((t) => t.city === item.city)
      );

      this.userCity = uniqueData;
      console.log("settings", this.userCity);
    },

    removeUser(id: number) {
      this.users = this.users.filter((p) => p.id !== id);
    },

    changeUsers(newUser: IUser) {
      const newUsers = this.users.map((obj) => {
        if (obj.id === newUser.id) {
          return newUser;
        }
        return obj;
      });
      this.users = newUsers;
    },

    setSelectedOption(city: string) {
      this.city = city;
    },
    setSearchQuery(name: string) {
      this.searchQuery = name;
    },
  },
});
