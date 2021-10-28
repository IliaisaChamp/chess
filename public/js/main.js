import chessTest from './chessTest.js';

document.addEventListener('DOMContentLoaded', function () {
  console.log('123');
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems);
  const el = document.querySelectorAll('.tabs');
  const instance = M.Tabs.init(el);
});



const startTestBtn = document.querySelector('.start-test');
startTestBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('/test');
    if (response.ok) {
      const test = await response.json();

      const result = chessTest(test);
    }
  } catch (error) {}
});
