<script setup>
import { NSpace } from 'naive-ui';
import { NInput } from 'naive-ui';
import { NRadioGroup } from 'naive-ui';
import { NRadioButton } from 'naive-ui';
import { ref } from 'vue';

const gender = ref('Male');
const name = ref('');
const age = ref('');

</script>


<template>

    <n-radio-group
        v-model:value="gender"
        name="left-size"
        >
        <n-radio-button value="Male">
            Male
        </n-radio-button>
        <n-radio-button value="Female">
            Female
        </n-radio-button>
    </n-radio-group>

    <n-space vertical>
        <n-input labeltype="text" placeholder="Name" v-model:value="name"/>
        <n-input labeltype="text" placeholder="Age" v-model:value="age"/>
    </n-space>

</template>