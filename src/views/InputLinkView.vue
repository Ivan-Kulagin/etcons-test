<template>
  <div class="home">
    <ClipboardCopy :link="exampleLink" />
    <InputLink />
  </div>
</template>

<script setup>
import ClipboardCopy from "@/components/ClipboardCopy.vue";
import InputLink from "@/components/InputLink.vue";

const exampleLink = 'https://docs.google.com/document/d/1G2f_nDmJIuDHxPJCoaYaLJQLFirxtErc8iYPnl8Zvq0/edit#'
</script>
