<template>
  <header v-if="$slots.headerContent">
    <slot name="headerContent"></slot>
  </header>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots.headerContent)
  }
}
</script>

<style scoped>
  header {
    width: 100%;
    padding: 20px;
    background-color: rgb(0, 0, 0);
  }
</style>