<template>
  <div class="title">Список сотрудников</div>
  <div class="header">
    <div class="user">Имя</div>
    <div class="user">Город</div>
    <div class="user">Возраст</div>
    <div class="userRemove"></div>
  </div>
  <div>
    <UserItem v-for="user in props.users" :user="user" :key="user.id" />
  </div>
</template>
<script setup lang="ts">
import UserItem from "@/components/UserItem.vue";
import type { IUser } from "@/stores/usersStore";
const props = defineProps({
  users: {
    type: Array<IUser>,
  },
});
</script>

<style scoped>
.title {
  padding-top: 15px;
  font-size: 20px;
  display: flex;
  justify-content: center;
}
.header {
  padding: 15px;
  border: 2px solid rgb(71, 55, 4);
  margin: 20px 15px 0 15px;
  border-radius: 2px;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  color: white;
  background-color: rgb(71, 55, 4);
}
.user {
  width: 200px;
  display: flex;
  justify-content: center;
}
.userRemove {
  width: 70px;
  display: flex;
  justify-content: center;
}
</style>
