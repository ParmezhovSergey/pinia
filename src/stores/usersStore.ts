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
    userCity: [] as IUser[],
    auth: {
      login: "user",
      pass: "pass",
    } as IAuth,
    city: "" as string,
  }),

  getters: {
    usersFilter(state) {
      if (state.city !== "") {
        return state.users.filter((item) => item.city === state.city);
      } else {
        return state.users;
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
  },
});
