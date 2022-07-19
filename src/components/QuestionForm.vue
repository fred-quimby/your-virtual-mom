<template>
  <form action="#" @submit.prevent="setAnswer">
    <label>
      <p>{{ questionString }}</p>
      <input type="text" v-model="question" @input="handleInput">
    </label>
    <button type="submit">Помоги мне</button>
  </form>
</template>

<script>
export default {
  props: {
    questionString: String
  },
  data() {
    return {
      question: ""
    }
  },
  methods: {
    setAnswer() {
      if (!this.question.trim()) {
        return;
      }

      this.$emit("set-answer")
    },
    handleInput() {
      console.log(this.question)
    }
  }
}
</script>

<style scoped>
p {
  text-align: center;
  color: rgb(49, 49, 49);
  font-size: 16px;
}

form {
  width: 95%;
  margin: 0 auto;
}

input {
  outline: none;
  border: 1px solid rgb(134 169 173);
  background-color:rgb(134 169 173 / 38%);
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  color: rgb(48, 79, 101);
}

button {
  margin: 20px 0;
  outline: none;
  border: none;
  padding: 15px 20px;
  display: block;
  width: 100%;
  font-size: 20px;
  color: rgb(48, 79, 101);
  background-color: rgb(134 169 173);
}

button:active {
  outline: none;
  background-color: rgb(122, 159, 163);
}
</style>