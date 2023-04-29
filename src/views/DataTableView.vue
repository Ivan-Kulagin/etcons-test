<template>
  <div class="card mw-1200 mx-auto">
    <DataTable
        :filters="filters"
        :value="products"
        tableStyle="min-width: 50rem"
        paginator
        :rows="10"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5,10,25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
        :globalFilterFields="globalFilterFields"
    >
      <template #empty><span>No data found for the current search query</span></template>
      <template #header>
        <div class="d-flex">
          <div class="p-inputgroup w-80">
            <MultiSelect
                dropdown-icon="pi pi-pw pi-sliders-v"
                v-model="selectedFilters"
                style="min-width: 48px;"
                :options="selectedColumns"
                optionLabel="header"
            />
          <span class="p-input-icon-right" style="width: 100%">
            <i class="pi pi-times" @click="clearSearchField" v-if="searchField" />
            <InputText
                v-model="searchField"
                @keydown.enter="searchItems"
                placeholder="Поиск..."
                style="width: 100%"
            />
          </span>
            <Button label="Search" @click="searchItems" severity="info" />
          </div>
          <div class="w-20">
            <MultiSelect
                class="border-0"
                v-model="selectedColumns"
                :options="columns"
                optionLabel="header"
                :maxSelectedLabels="2"
                placeholder="Поля Таблицы"
                style="width: 100%"
            />
          </div>
        </div>
      </template>
      <Column v-for="col of selectedColumns" :key="col.field" :field="col.field" :header="col.header"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { ProductService } from '@/service/ProductService';
import MultiSelect from "primevue/multiselect";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const products = ref();
onMounted(() => {
  ProductService.getProducts().then((data) => (products.value = data));
});

const columns = [
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' }
];

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
});

const selectedColumns = ref([...columns]);
const selectedFilters = ref(selectedColumns.value);
const globalFilterFields = computed(() => selectedFilters.value
    ?.filter(item => selectedColumns.value.includes(item))
    .map(item => item.field)
);

const searchField = ref();

function searchItems() {
  filters.value.global.value = searchField.value
}
function clearSearchField() {
  searchField.value = ''
  searchItems()
}

</script>

<style scoped>
.mx-auto {
  margin: 0 auto;
}
.mw-1200 {
  max-width: 1200px;
}

.d-flex {
  display: flex;
  gap: 10px;
}

.w-80 {
  width: 80%
}

.w-20 {
  width: 20%
}

.p-inputtext {
    border-radius: 0 !important;
}
</style>
