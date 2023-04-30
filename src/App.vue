<template>
  <nav class="card">
    <TabMenu :model="items" />
  </nav>
  <router-view />
</template>

<style>
body {
  font-family: var(--font-family);
}

.home {
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin: 0 auto;
  width: 500px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  margin: 0 auto;
  max-width: 1200px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
import TabMenu from 'primevue/tabmenu';
import { ref } from "vue";

const items = ref([
  {
    label: 'Поле Link',
    icon: 'pi pi-fw pi-external-link',
    to: '/'
  },
  {
    label: 'Time Picker',
    icon: 'pi pi-fw pi-calendar',
    to: '/task2'
  },
  {
    label: 'Сброс значений в Select',
    icon: 'pi pi-fw pi-times-circle',
    to: '/task3'
  },
  {
    label: 'Многострочный текст в ячейке',
    icon: 'pi pi-fw pi-list',
    to: '/task4'
  },
  {
    label: 'Таблица с поиском',
    icon: 'pi pi-fw pi-cog',
    to: '/task5'
  }
]);

</script>