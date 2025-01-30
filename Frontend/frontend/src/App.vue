<script setup>

import { darkTheme } from 'naive-ui';

</script>

<template>
  <n-config-provider :theme="darkTheme">
    <router-view />
  </n-config-provider>
</template>

<style>
#app {
  background-color: #121212; /* Тёмный фон */
  color: #ffffff; /* Белый текст */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
