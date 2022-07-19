<template>
  <h3>{{ answer }}</h3>
</template>

<script>
export default {
  props: {
    answer: String
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
  font-size: 20px;
  color: #304f65;
}
</style>