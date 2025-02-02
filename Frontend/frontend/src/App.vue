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
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}
</style>
