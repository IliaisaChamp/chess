
import chessTest from './chessTest.js';
import addNewQuestionField from './templ/test.js';

const startTestBtn = document.querySelector('.start-test');
startTestBtn.addEventListener('click', async () => {
  console.log(startTestBtn);
  try {
    const response = await fetch('/tests');
    if (response.ok) {
      const { questions } = await response.json();
      const result = chessTest(questions);
    }
  } catch (error) {
    console.log(error);
  }
});
