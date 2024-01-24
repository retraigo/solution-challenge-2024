import { defineStore } from "pinia";

type User = { username: string; level: number };

export const useUserStore = defineStore("userInfo", {
  state: () => {
    return {
      username: "",
      loggedIn: false,
      level: 3,
    } as User & { loggedIn: boolean };
  },
  actions: {
    signOut() {
      this.loggedIn = false;
    },
  },
});
