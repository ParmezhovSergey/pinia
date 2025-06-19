<template>
  <div v-for="user in usersStore.users" >hello  {{user.name}} </div>
</template>

<script setup lang="ts">
import { useUsersStore } from "../stores/usersStore";

const usersStore = useUsersStore();

usersStore.fetchUsers();
</script>
