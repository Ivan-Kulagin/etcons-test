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
import { ref } from 'vue';
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const tableData = ref([{
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  price: 65,
  rating: 5
},{
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: '[13:36:53] Расчетное время: 9 мин\n' +
      '[13:36:58] Открыть клапан откачки К1\n' +
      '[13:36:58] Включить вакуумный насос\n' +
      '[13:36:58] Закрыть клапан К5\n' +
      '[13:36:58] Закрыть клапан дистилляции К2\n' +
      '[13:36:58] Ожидание: 8 с\n' +
      '[13:37:06] Заливка 2.2мл. в испаритель\n' +
      '[13:37:06] Заданно 26.50602409638554 шагов\n' +
      '[13:37:09] Заливка перекиси завершена\n' +
      '[13:37:09] Открыть клапан дистилляции К2\n' +
      '[13:42:09] Включить нагрев испарителя\n' +
      '[13:42:09] Закрыть клапан дистилляции К2\n' +
      '[13:42:09] конечное давление1.0960040758227925 торр\n' +
      '[13:42:09] Выпаривание через К2\n' +
      '[13:42:09] Выпаривание длилось5 мин\n' +
      '[13:42:09] Откачка до 1 торр\n' +
      '[13:42:15] Закрыть клапан откачки К1\n' +
      '[13:43:09] Открыть клапан откачки К1\n' +
      '[13:43:14] Аппаратное смещение 0 денсит. = -0.313683180809021\n' +
      '[13:43:14] Закрыть клапан дистилляции К2\n',
  price: 65,
  rating: 5
},{
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  price: 65,
  rating: 5
},{
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  price: 65,
  rating: 5
},{
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  price: 65,
  rating: 5
},])
</script>

<style>
.mx-auto {
  margin: 0 auto;
}
.mw-900 {
  max-width: 900px;
}

.pre {
  white-space: pre;
}
</style>