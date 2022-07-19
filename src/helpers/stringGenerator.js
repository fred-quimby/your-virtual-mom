import { answers, momQuestions } from "./../phrasesDB/phrases";

export const generateAnswer = () => {
  const index = Math.floor(Math.random() * (answers.length - 0)) + 0;
  console.log(answers, index, answers[index])
  return answers[index];
}

export const generateMomQuestion = () => {
  const index = Math.floor(Math.random() * (momQuestions.length - 0)) + 0;
  console.log(momQuestions, index, momQuestions[index])
  return momQuestions[index];
}