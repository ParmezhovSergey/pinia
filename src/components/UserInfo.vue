<template>
  <div class="modal-container">
    <div class="modal">
      <div class="header">Редактирование</div>
      <div class="name">
        Имя
        <input
          type="text"
          placeholder="Имя"
          v-model="newUser.name"
          style="margin-left: 30px"
        />
      </div>
      <div class="city">
        Город
        <input
          type="text"
          placeholder="Город"
          v-model="newUser.city"
          style="margin-left: 19px"
        />
      </div>
      <div class="age">
        Возраст
        <input
          type="text"
          placeholder="Возраст"
          v-model="newUser.age"
          style="margin-left: 4px"
        />
      </div>
      <div class="btn">
        <button class="btnBack" @click="$emit('back')">Назад</button>
        <button class="btnSave" @click="">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { ref } from "vue";
import { type IUser } from "@/stores/usersStore";

interface Props {
  user: IUser;
}
interface MyObject {
  name: string;
  city: string;
  age: number | null;
}
const props = defineProps<Props>();

const newUser = ref<MyObject>({ name: "", city: "", age: null });

newUser.value.name = props.user.name;
newUser.value.city = props.user.city;
newUser.value.age = props.user.age;
</script>

<style scoped>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
.name {
  margin-top: 10px;
}
.city {
  margin-top: 10px;
}
.age {
  margin-top: 10px;
}
.btn {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
.btnBack {
  margin-right: 10px;
  background-color: orange;
  border: orange;
  border-radius: 5px;
}
.btnSave {
  background-color: green;
  border: green;
  border-radius: 5px;
}
.header {
  display: flex;
  justify-content: center;
  color: red;
}
</style>
