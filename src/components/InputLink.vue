<template>
  <InputText v-if="edit" v-model="link" placeholder="https://" @focusout="onFocusOut" />
  <div v-else>
    <Button link :label="title" @click="goToPage" size="small" :loading="loading" />
    <Button v-if="!loading" icon="pi pi-pencil" text size="small" @click="handleEditClick" />
  </div>
</template>

<script setup>
import {ref} from "vue";
import axios from "axios";

import InputText from "primevue/inputtext";
import Button from "primevue/button";

const link = ref('')
const title = ref('')
const edit = ref(true)
const loading = ref(true)

async function getPageTitle() {
  try {
    loading.value = true
    title.value = 'Fetching title...'
    const response = await axios.get(link.value);
    const titleRegex = /<title>(.*)<\/title>/i;
    const titleMatch = response.data.match(titleRegex);
    title.value = titleMatch ? titleMatch[1] : 'Title not found';
  } catch (error) {
    console.error(error);
    title.value = 'Error fetching title'
  } finally {
    loading.value = false
  }
}

async function goToPage() {
  window.open(link.value)
}

function handleEditClick() {
  edit.value = true
}

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}

async function onFocusOut() {
  if (!link.value?.length && !isValidURL(link.value)) return
  edit.value = false
  await getPageTitle()
}
</script>