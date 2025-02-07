<script setup>
import { ref } from "vue";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { NUpload, NUploadDragger, NIcon, NText } from "naive-ui";
import { defineEmits } from "vue";

const fileList = ref([]);

const emit = defineEmits(["makeButtonVisible", "clearDiagnose"]);

const uploadImage = async ({ file }) => {
  emit("clearDiagnose");
  if (!file.file) {
    alert('Please select an image to upload.');
    return;
  }

  try {
    const formData = new FormData();
    formData.append('image', file.file);
    
    console.log(formData)
    const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
    });
        
    if (response.ok) {
      const data = await response.json();
      alert('Image uploaded successfully: ' + data.filePath);
      emit("makeButtonVisible");
    } else {
      alert('Failed to upload image.');
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

</script>

<template>
  <n-upload
    v-model:file-list="fileList"
    multiple
    directory-dnd
    :custom-request="uploadImage"
    :max="1">
    <n-upload-dragger>
      <div style="margin-bottom: 12px">
        <n-icon size="48" :depth="3">
          <ArchiveIcon />
        </n-icon>
      </div>
      <n-text style="font-size: 16px">
        Click or drag a file to this area to upload
      </n-text>

    </n-upload-dragger>
  </n-upload>
</template>