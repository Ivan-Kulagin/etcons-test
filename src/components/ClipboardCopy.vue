<template>
  <div class="p-input-icon-right disabled" :class="{text__copied: copied}">
    <i
        class="pi enabled"
        :class="copied ? 'pi-check' : 'pi-copy'"
        :style="{color: copied ? 'var(--green-600)' : 'var(--primary-color)'}"
        @click="copyToClipboard"
    />
    <InputText :value="props.link" style="width: 100%" readonly />
  </div>
</template>

<script setup>
import {ref} from "vue"
import InputText from "primevue/inputtext";

// eslint-disable-next-line no-undef
const props = defineProps({
  link: String
})

const copied = ref(false)

async function copyToClipboard() {
  await navigator.clipboard.writeText(props.link);
  copied.value = true
}
</script>

<style scoped>
.disabled > .p-inputtext {
  color: rgba(44, 62, 80, 0.6);
}

.text__copied > .p-inputtext {
  color: rgba(29, 167, 80, 0.6);
}
</style>