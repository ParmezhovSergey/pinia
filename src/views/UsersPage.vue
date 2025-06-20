<template>
    
    <div v-for="user in usersStore.users" :key="user.id" >hello  {{user.name}} </div>
    <div>{{usersStore.auth.login}}</div>

  </template>
  
  <script setup lang="ts">
  import { useUsersStore } from "../stores/usersStore";
  
  const usersStore = useUsersStore();
  
  usersStore.fetchUsers();
  </script>