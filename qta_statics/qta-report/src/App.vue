<script setup>
import Button from "ant-design-vue/lib/button/button"
import ReportHeader from "./components/ReportHeader.vue"
import { RouterView,RouterLink } from "vue-router";
</script>

<template>
  <ReportHeader></ReportHeader>
  <RouterView v-show="'/'" />
</template>

<style scoped>
</style>
