<template>
  <Header>
    <template #headerContent>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </template>
  </Header>
  <QuestionForm @set-answer="setAnswer" :questionString="questionString"/>
  <Answer :answer="answerString"/>
</template>

<script>
import Header from "./Header.vue";
import QuestionForm from "./QuestionForm.vue";
import Answer from "./Answer.vue";

import { generateAnswer, generateMomQuestion } from "./../helpers/stringGenerator";

export default {
  components: {
    Header,
    QuestionForm,
    Answer
  },
  data() {
    return {
      title: "Я - твоя виртуальная мама!",
      description: "Ты можешь поговорить со мной о чём угодно. Я здесь, чтобы помочь тебе. Позволь позаботиться о тебе, не отнимай у меня смысл жизни, кому сказала!",
      answerString: "",
      questionString: ""
    }
  },
  watch: {
    answerString() {
      this.questionString = generateMomQuestion();
    }
  },
  methods: {
    setAnswer() {
      this.answerString = generateAnswer();
    }
  },
  mounted() {
    console.log("mounted")
    this.questionString = generateMomQuestion();
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

h2 {
  font-size: 20px;
  color: rgb(255 255 255);
  font-weight: bold;
  /* text-align: center; */
}

p {
  font-size: 17px;
  color: rgb(146, 146, 146);
  /* text-align: center; */
}
</style>

<!-- 1. input
2. button 
3. answer -->
