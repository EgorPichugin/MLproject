<script setup>
import { ref } from 'vue';
import ProcessButton from './ProcessButton.vue'
import { NCard } from 'naive-ui';

const diagnose = ref('');
const image = ref(null);

//region Functions
const uploadImage = async () => {
  if (!image.value) {
    alert('Please select an image to upload.');
    return;
  }

  try {
    const formData = new FormData();
    formData.append('image', image.value);

    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      alert('Image uploaded successfully: ' + data.filePath);
    } else {
      alert('Failed to upload image.');
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  document.getElementById('fileName').innerText = file ? file.name : 'No file chosen';
  image.value = file;
};
//endregion
</script>

<template>
  <n-card title="Upload an image to see result">
    <ProcessButton v-model="diagnose"/>
  </n-card>
  <div grid gap-4>
    <h1>Upload an Image</h1>
    <div>
      <span id="fileName" style="cursor: pointer; padding: 5px; border: 1px solid grey; display: inline-block;">No file chosen</span>
      <label for="fileUpload" style="cursor: pointer; display: inline-block;">
        <img src="@/assets/icons/folder.svg" alt="Upload Icon" style="width: 30px; height: 30px; margin-right: 5px;" />
      </label>
      <input id="fileUpload" type="file" style="display: none;" @change="onFileChange" />
    </div>
    <button @click="uploadImage">
      <img src="@/assets/icons/cloud.svg" alt="Upload Icon" style="width: 50px; height: 20px; margin-right: 5px;" />        
    </button>
  </div>
  
</template>