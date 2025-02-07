<script setup>

import { NButton } from 'naive-ui';
import { defineModel } from 'vue';
import { NSpace } from 'naive-ui';
import { NSpin } from 'naive-ui';
import { ref } from 'vue';

const diagnose = defineModel({default: '', required: true});
const isVisible = defineModel('isVisible', {default: false, required: true});
const isSpinVisible = ref(false);

const process = async () => {
  isVisible.value = false;
  isSpinVisible.value = true;
  try {
    const response = await fetch('http://localhost:5000/process', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    isSpinVisible.value = false;
    diagnose.value = data;
  } catch (error) {
    console.error('Error fetching diagnose:', error);
  }
};

</script>

<template>
  <div class="center-container">

    <n-space v-if="isSpinVisible">
      <n-spin size="medium" />
    </n-space>
    <n-button v-else 
      @click="process" 
      style="width: 100%;" 
      :disabled="!isVisible">Get diagnose
    </n-button>
  </div>

</template>

<style scoped>
.center-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 100%;
  width: 100%;
}
</style>