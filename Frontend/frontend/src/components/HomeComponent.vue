<script setup>
import { ref, watch } from 'vue';
import ProcessButton from './ProcessButton.vue'
import PageHeader from './PageHeader.vue'
import FileInput from './FileInput.vue'
import { NCard } from 'naive-ui';
import CommonInformation from './CommonInformation.vue';
import ClientInformation from './ClientInformation.vue';
import { NModal } from 'naive-ui';
import { healthy, mild, moderate, severe } from '@/constants/TextConstants.ts';
import { NButton } from 'naive-ui';

const diagnose = ref('');
const isButtonVisible = ref(false);
const showModal = ref(false);
const modalTitle = ref('');
const diagnoseContent = ref('');

function onMakeButtonVisible() {
  isButtonVisible.value = true;
}

function clearDiagnose() {
  diagnose.value = '';
  diagnoseContent.value = '';
}

function okClick() {
  diagnose.value = '';
  showModal.value = false;
}

watch(diagnose, (updatedDiagnose) => {
  if (updatedDiagnose === '') return;

  switch (updatedDiagnose.trim()) {
    case "Healthy":
      modalTitle.value = 'Healthy';
      diagnoseContent.value = healthy;
      break;
      
    case "Stage 1":
      modalTitle.value = 'Mild stage';
      diagnoseContent.value = mild;
      break;
        
    case "Stage 2":  
      modalTitle.value = 'Moderate stage';
      diagnoseContent.value = moderate;
      break;
      
    case "Stage 3":
      modalTitle.value = 'Severe stage';
      diagnoseContent.value = severe;
      break;

    default:
      console.warn("Unknown diagnose:", updatedDiagnose);
      return;
  }

  showModal.value = true;
});
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

  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      :title="modalTitle"
      :bordered="true"
      size="huge"
      role="dialog"
      aria-modal="true">
        <div v-html="diagnoseContent">
        </div>
        <n-button
          @click="okClick" 
          style="width: 100%; margin-top: 20px;">
            Ok
        </n-button>
    </n-card>
  </n-modal>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>