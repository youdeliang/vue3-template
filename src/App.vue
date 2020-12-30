<template>
  <div id="app">
    <router-view />
    <!-- <service-worker-update-popup /> -->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'App'
  })
</script>
