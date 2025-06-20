<template>
  <div class="header"></div>
  <div class="page">
    <div class="auth">
      <div class="title">Вход</div>

      <div class="login">
        <div class="text">логин</div>
        <input
          class="loginText"
          type="text"
          placeholder="user"
          v-model="login.login"
        />
      </div>

      <div class="login">
        <div class="text">пароль</div>
        <input
          class="passText"
          type="text"
          placeholder="pass"
          v-model="login.pass"
        />
      </div>

      <div class="btn">
        <button @click="addLogin">Войти</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUsersStore } from "../stores/usersStore";

const login = ref({ login: "", pass: "" });
const right = ref(false);

const usersStore = useUsersStore();
usersStore.fetchUsers();
const router = useRouter();

const addLogin = () => {
  if (
    login.value.login === usersStore.auth.login &&
    login.value.pass === usersStore.auth.pass
  ) {
    right.value = true;
    router.push(`/users`);
    console.log("add", usersStore.auth);
  }
};
</script>

<style scoped>
.header {
  height: 70px;
  background-color: rgb(25, 73, 248);
}
.page {
  background-color: rgb(251, 246, 238);
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
}
.auth {
  background-color: bisque;
  border: 1px solid black;
  border-radius: 10px;
  width: 250px;
  height: 200px;
}
.title {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 25px;
}
.login {
  display: flex;
  margin-top: 20px;
}

.text {
  margin-left: 10px;
  font-size: 20px;
}
.loginText {
  margin-left: 20px;
}
.passText {
  margin-left: 10px;
}
.btn {
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}
</style>
