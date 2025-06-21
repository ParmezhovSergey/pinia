<template>
  <div @click="setOpen" class="users">
    <div class="user">{{ props.user.name }}</div>
    <div class="user">{{ props.user.city }}</div>
    <div class="user">{{ props.user.age }}</div>
    <button class="userBtn" @click.stop="deleteUser" >Удалить</button>
  </div>
<div  v-if="isOpen===true">
    <UserInfo  :user="props.user" @back="setClose"/>
</div>
  
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { ref } from "vue";
import { useUsersStore, type IUser } from "@/stores/usersStore";
import UserInfo from "./UserInfo.vue";

interface Props {
  user: IUser;
}
const props = defineProps<Props>();
const usersStore = useUsersStore();

const isOpen = ref(false)

const setOpen = () => {
    isOpen.value = true
}
const setClose = () => {
    isOpen.value = false
}

const deleteUser = () => {
  usersStore.removeUser(props.user.id);
};


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
.userBtn {
  width: 70px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
}
.userBtn:hover {
  background-color: red;
  color: white;
}
</style>
