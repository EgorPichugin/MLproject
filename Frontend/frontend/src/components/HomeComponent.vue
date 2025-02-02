<script setup>
import { ref } from 'vue';
import ProcessButton from './ProcessButton.vue'
import PageHeader from './PageHeader.vue'
import FileInput from './FileInput.vue'
import { NCard } from 'naive-ui';
import CommonInformation from './CommonInformation.vue';
import ClientInformation from './ClientInformation.vue';

const diagnose = ref('');
const isButtonVisible = ref(false);

function onMakeButtonVisible() {
  isButtonVisible.value = true;
}

function clearDiagnose() {
  diagnose.value = '';
}
</script>

<template>
  <n-card>
    <PageHeader/>
  </n-card>
  
  <n-card title="Enter pacient information and uplaod brain x-ray to see a result">
    <div class="container">
      <ClientInformation/>
      <FileInput 
      @makeButtonVisible="onMakeButtonVisible"
      @clearDiagnose="clearDiagnose"
      />
      <ProcessButton 
      v-model="diagnose"
      v-model:is-visible="isButtonVisible"
      />
    </div>
  </n-card>
  

  <n-card>
    <CommonInformation/>
  </n-card>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>