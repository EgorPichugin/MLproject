<script setup>
import { NGradientText } from 'naive-ui';
import { NImage } from 'naive-ui';
import Logo from "@/resources/logo.png"


</script>

<template>
    <div  class="center-container">
        <n-image
            width="80"
            height="80"
            :src="Logo"/>
    
        <n-gradient-text :size="28" type="info">
            Alzheimer’s Disease Research Institute
        </n-gradient-text>
    </div>

</template>

<style scoped>
.center-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 10vh;
  padding-right: 120px
}
</style>