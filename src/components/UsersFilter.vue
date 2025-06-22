<template>
  <div class="page">
    <div class="search">
      <input type="text" placeholder="поиск..." />
    </div>
    <div class="btn">
      <button>Поиск</button>
    </div>
    <div class="filter">
      <select @change="updateSelectedOption">
        <option value="" disabled selected>Выберите город...</option>
        <option
          v-for="city in usersStore.userCity"
          :value="city.city"
          :key="city.city"
        >
          {{ city.city }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from "@/stores/usersStore";
import { ref } from "vue";

const usersStore = useUsersStore();
const cityUs = ref<string>("");

const updateSelectedOption = (event: any) => {
  usersStore.setSelectedOption(event.target.value);
  console.log('usersFilter', usersStore.usersFilter);
  
}; 


</script>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: end;
}
.search {
  margin-right: 5px;
}
.btn {
  margin-right: 30px;
}
.filter {
  margin-right: 30px;
}
</style>
