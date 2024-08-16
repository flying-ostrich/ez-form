<template>
  <div>AAAAABBBBB</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  a: string;
  b: {a:string}
}>()
</script>
