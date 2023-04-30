<template>
  <div class="home">
    <div class="p-inputgroup flex-1">
      <MultiSelect v-model="selected" :options="options" optionLabel="name" placeholder="Select Cities"
                   :class="{borderfix: !clearButtonShown}"
                   :maxSelectedLabels="3" :show-toggle-all="false">
      </MultiSelect>
      <Button v-show="clearButtonShown" class="mt" outlined icon="pi pi-times" severity="secondary" @click="clearSelection"></Button>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";
import MultiSelect from "primevue/multiselect";
import Button from "primevue/button";

// eslint-disable-next-line no-undef
const props = defineProps({
  options: null,
  modelValue: null
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:modelValue'])

const selected = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
});

function clearSelection() {
  selected.value = []
}

const clearButtonShown = computed(() => {
  return selected.value?.length
})
</script>

<style>
.borderfix {
  border-top-right-radius: 6px !important;
  border-bottom-right-radius: 6px !important;
}
</style>
