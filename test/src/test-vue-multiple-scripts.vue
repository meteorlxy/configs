<script lang="ts">
let foo = 'foo';

export default {
  bar: '',
};
</script>

<script setup lang="ts">
const bar = 'bar';
</script>

<template>
  <h1 v-text="''" class="foo"></h1>
</template>

<style></style>
