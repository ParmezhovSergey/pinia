<template>
  <div class="header">
    <button class="btn" @click="router.push(`/`);">Выход</button>
  </div>
  <div class="menu">
    menu
  </div>
  <div class="page">
    <UsersList :users="usersStore.users" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUsersStore } from "../stores/usersStore";
import UsersList from "@/components/usersList.vue";

const usersStore = useUsersStore();
usersStore.fetchUsers();
const router = useRouter();


</script>

<style scoped>
.header {
  height: 70px;
  background-color: rgb(25, 73, 248);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 5px;

}
.btn{
  margin-right: 10px;
  border-radius: 5px;
}
.page {
  background-color: rgb(246, 243, 240);
  height: calc(100vh - 140px);
  border-radius: 5px;
}
.menu{
  height: 70px;
  border-radius: 5px;
  background-color: rgb(250, 228, 193);
}
</style>
