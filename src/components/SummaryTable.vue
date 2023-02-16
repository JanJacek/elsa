<template>
  <div class="q-ma-md">
    <q-table
      title="Treats"
      :rows="s_store.getRows"
      :columns="s_store.getColumns"
      row-key="name"
    />
  </div>
</template>

<script setup lang="ts">
//libraries
//stores
import { summaryStore } from 'src/stores/summaryStore';
//types
/* script */
const s_store = summaryStore();
</script>

<style scoped></style>
