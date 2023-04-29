<template>
  <div class="home">
    <div class="p-input-icon-right disabled" :class="{text__copied:copied}">
      <i
          class="pi enabled"
          :class="copied ? 'pi-check' : 'pi-copy'"
          :style="{color: copied ? 'var(--green-600)' : 'var(--primary-color)'}"
          @click="copyToClipboard"
      />
      <InputText :value="exampleLink" style="width: 100%" readonly />
    </div>

    <InputText v-if="edit" v-model="value" placeholder="https://" @focusout="onFocusOut" />
    <div v-else>
      <Button link :label="title" @click="goToPage" size="small" :loading="loading" />
      <Button v-if="!loading" icon="pi pi-pencil" text size="small" @click="handleEditClick" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputText from 'primevue/inputtext';
import Button from "primevue/button";
import axios from 'axios';

export default defineComponent({
      name: 'HomeView',
      components: {
        InputText,
        Button
      },
      data() {
        return {
          exampleLink: 'https://docs.google.com/document/d/1G2f_nDmJIuDHxPJCoaYaLJQLFirxtErc8iYPnl8Zvq0/edit#',
          value: '',
          title: '',
          edit: true,
          copied: false,
          loading: true
        }
      },
      methods: {
        isValidURL(url: string) {
          try {
            new URL(url);
            return true;
          } catch (err) {
            return false;
          }
        },
        async copyToClipboard() {
          await navigator.clipboard.writeText(this.exampleLink);
          this.copied = true
        },
        handleEditClick() {
          this.edit = true
        },
        async onFocusOut() {
          if (!this.value.length && !this.isValidURL(this.value)) return
          this.edit = false
          await this.getPageTitle()
        },
        async getPageTitle() {
          try {
            this.loading = true
            this.title = 'Fetching title...'
            const response = await axios.get(this.value);
            const titleRegex = /<title>(.*)<\/title>/i;
            const titleMatch = response.data.match(titleRegex);
            this.title = titleMatch ? titleMatch[1] : 'Title not found';
          } catch (error) {
            console.error(error);
            this.title = 'Error fetching title'
          } finally {
            this.loading = false
          }
        },

        async goToPage() {
          window.open(this.value)
        }
      }
    }
);
</script>

<style>
.disabled > .p-inputtext {
  color: rgba(44, 62, 80, 0.6);
}

.text__copied > .p-inputtext {
  color: rgba(29, 167, 80, 0.6);
}
</style>
