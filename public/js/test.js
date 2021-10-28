const addQuestion = document.querySelector('.new_question-btn');
import addNewQuestionField from './templ/test.js';

addQuestion.addEventListener('click', (e) => {
  e.preventDefault();
  const createTestWrapper = document.querySelector('.create-test_wrapper');
  const form = document.querySelector('.create-test__form');
  form.insertAdjacentHTML('beforeend', addNewQuestionField());
});


// form.addEventListener('submit', testFormHandler);


async function testFormHandler(event) {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(this));
  console.log(formData);
  // try {
  //   const response = await fetch('/tests/create-test', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   });

  //   if (response.ok) {
  //     console.log(response);
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
}
