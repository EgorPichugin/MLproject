<script setup>
import { defineModel } from 'vue';
import { NModal } from 'naive-ui';
import { NCard } from 'naive-ui';
import { NButton } from 'naive-ui';

const diagnoseContent = defineModel('diagnose', {default: '', required: true});
const modalTitle = defineModel('title', {default: '', required: true});
const showModal = defineModel({default: false, required: true});

function okClick() {
    diagnoseContent.value = '';
    showModal.value = false;
}

</script>

<template>
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