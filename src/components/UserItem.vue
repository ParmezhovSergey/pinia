<template>
  <div @click="" class="users">
    <div class="user">{{ props.user.name }}</div>
    <div class="user">{{ props.user.city }}</div>
    <div class="user">{{ props.user.age }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { IUser } from "@/stores/usersStore";
interface Props {
  user: IUser;
}
const props = defineProps<Props>();
</script>

<style scoped>
.users {
  padding: 15px;
  border: 2px solid rgb(71, 55, 4);
  margin: 15px 15px 0 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
}
.users:hover {
  background-color: rgb(71, 55, 4);
  color: white;
}
.user {
  width: 200px;
  display: flex;
  justify-content: center;
}
</style>
