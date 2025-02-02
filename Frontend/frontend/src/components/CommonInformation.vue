<script setup>
import { NCollapse } from 'naive-ui';
import { NCollapseItem } from 'naive-ui';
import {alzgeimerDefinition} from '@/constants/TextConstants.ts';
import {alzgeimerSymptoms} from '@/constants/TextConstants.ts';
import StagesTable from './StagesTable.vue';

</script>

<template>

    <n-collapse>

        <n-collapse-item title="What is Alzheimer’s disease?" name="1" >
        <div>{{ alzgeimerDefinition }}</div>
        </n-collapse-item>

        <n-collapse-item title="How is Alzheimer's different from other forms of dementia?" name="2">
        <div>{{alzgeimerSymptoms}}</div>
        </n-collapse-item>

        <n-collapse-item title="Alzheimer's stages" name="3">
            <StagesTable/>
        </n-collapse-item>

  </n-collapse>

</template>