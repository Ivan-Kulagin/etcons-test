<template>
  <DataTableSearch :data="products" :columns="columns" />
</template>

<script setup>
import {onMounted, ref} from "vue";
import { ProductService } from '@/service/ProductService';
import DataTableSearch from "@/components/DataTableSearch.vue";

const products = ref()
const columns = ref([
  { field: 'code', header: 'Code' },
  { field: 'name', header: 'Name' },
  { field: 'category', header: 'Category' },
  { field: 'quantity', header: 'Quantity' }
]);

onMounted(() => {
  // получение данных
  ProductService.getProducts().then((data) => (products.value = data));
});
</script>