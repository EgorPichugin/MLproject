<script setup>
import { ref, defineModel } from 'vue';
import { NDropdown } from 'naive-ui';
import { NButton } from 'naive-ui';

const options = ref([
        {
          label: 'EfficientNet model',
          key: 'EfficientNet'
        },
        {
          label: 'DenseNet model',
          key: 'DenseNet'
        },
        // {
        //   label: 'ResNet model',
        //   key: 'ResNet'
        // }
        ]);

const selectedOption = defineModel({default: '', required: true})

function handleSelect(model) {
    selectedOption.value = model;
}
</script>

<template>

<n-dropdown 
    width="200px" 
    trigger="hover" 
    :options="options" 
    @select="handleSelect">
    <n-button 
        style="margin-left: auto; width: 200px;">
        Select a model
    </n-button>
</n-dropdown>

</template>