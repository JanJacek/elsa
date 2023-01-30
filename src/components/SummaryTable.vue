<template>
  <div>
    <p>{{ s_store.counter }}</p>
  </div>
</template>

<script setup lang="ts">
//stores
import { summaryStore } from 'src/stores/summaryStore';
/* script */
const s_store = summaryStore();
</script>

<style scoped></style>
