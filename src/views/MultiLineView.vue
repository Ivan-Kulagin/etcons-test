<template>
  <div class="card mw-900 mx-auto">
    <DataTable :value="tableData" tableStyle="min-width: 50rem">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="description" header="Description">
        <template #body="slotProps">
          <div class="pre">
            {{ slotProps.data.description }}
          </div>
        </template>
      </Column>
      <Column field="price" header="Price"></Column>
      <Column field="rating" header="Rating"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import {ProductService} from "@/service/ProductService";

const tableData = ref()
onMounted(() => {
  // предобработанные данные лога с добавлением переноса строк, полученные из API
  ProductService.getProcessedMultilineLog().then((data) => (tableData.value = data));
});
</script>

<style>
.mx-auto {
  margin: 0 auto;
}
.mw-900 {
  max-width: 900px;
}

.pre {
  /* для сохранения разрывов строк */
  white-space: pre;
}
</style>