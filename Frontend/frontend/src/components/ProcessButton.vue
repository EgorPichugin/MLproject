<script setup>

import { NButton } from 'naive-ui';
import { defineModel } from 'vue';

const diagnose = defineModel({default: '', required: true});

const process = async () => {
  try {
    const response = await fetch('http://localhost:5000/process', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    diagnose.value = data;
  } catch (error) {
    console.error('Error fetching diagnose:', error);
  }
};

</script>

<template>

    <n-button @click="process">Get diagnose</n-button>
    <h2 v-if="diagnose">{{ diagnose }}</h2>

</template>