// import chessTest from './chessTest.js';
import addNewQuestionField from './templ/test.js';

document.addEventListener('DOMContentLoaded', function () {
  console.log('123');
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems);
  const el = document.querySelectorAll('.tabs');
  const instance = M.Tabs.init(el);
});

const newTEstBtn = document.querySelector('.new-test_btn');
newTEstBtn.addEventListener('click', () => {
  window.location.href = '/tests/create-test';
})

// const startTestBtn = document.querySelector('.start-test');
// startTestBtn.addEventListener('click', async () => {
//   try {
//     const response = await fetch('/tests');

//     if (response.ok) {
//       const { questions } = await response.json();
//       const result = chessTest(questions);
//     }
//   } catch (error) {}
// });

// document.addEventListener('click', async (event) => {
//   event.preventDefault();
//   if (event.target.name === 'buttonTestAdd') {
//     $delliteButton = document.querySelector('#buttonTest');
//     $formWraper = document.querySelector('[data-tabWrapper]');
//     $formWraper.insertAdjacentHTML('beforeend', createTestField());
//     $delliteButton.remove();
//   }
// });

const addQuestion = document.querySelector('.new_question-btn');

addQuestion.addEventListener('click', (e) => {
  e.preventDefault();
  const createTestWrapper = document.querySelector('.create-test_wrapper');
  const form = document.querySelector('.create-test__form');
  form.insertAdjacentHTML('beforeend', addNewQuestionField());

  // form.addEventListener('submit', testFormHandler);
});

// async function testFormHandler(event) {
//   event.preventDefault();
//   const formData = Object.fromEntries(new FormData(this));
//   console.log(formData);
//   try {
//     const response = await fetch('/tests/create-test', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       console.log(response);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
