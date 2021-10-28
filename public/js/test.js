// // console.log('ok')

// document.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   console.log(event.target);
//   if (event.target.name === 'addForm') {
//     $formWraper = document.querySelector('[data-formWraper]');
//     $formWraper.insertAdjacentHTML('beforeend', formAddTest());

//     event.target.remove();
//   } if (event.target.name === 'addFormHorse') {
//     const newHorse = Object.fromEntries(new FormData(event.target));
//     // console.log( newHorse );
//     console.log(newHorse);
//     const response = await fetch('/horses', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newHorse),
//     });
//     if (response.ok) {
//       const dataFromBack = await response.json();
//       // console.log(dataFromBack);
//       const { newHorse: { name } } = dataFromBack;
//       // console.log({name});
//     }
//   }
//   // event.target.remove()

//   // $SubmitButton = document.querySelector('SubmitButton')
//   // console.log($SubmitButton);
//   // $SubmitButton?.insertAdjacentHTML('beforeend', buttonAddaHorse())
// });

// function buttonAddaHorse() {
//     return `<form name= "addForm">
//     <button type="submit" class="button dark">Add a Horse</button>
//     </form>`;
// }

document.addEventListener('click', async (event) => {
    event.preventDefault();
    if (event.target.name === 'buttonTestAdd') {
        $delliteButton = document.querySelector('#buttonTest')
        $formWraper = document.querySelector('[data-tabWrapper]');
        $formWraper.insertAdjacentHTML('beforeend', formAddtest());
       $delliteButton.remove()
    }
    });
function formAddtest() {
  return `<div style="margin-top: 3%" class="row">
  <div class="col s8 offset-s2">

    <form >
      <div class="row">
        <div class="input-field col s6">
          <input data-testQuestion placeholder="Нужно указать вопрос теста" id="question" type="text" class="validate">
             </div>
        <div class="input-field col s6">
          <input data-testCorrectAnswer placeholder="Нужно указать правильный ответ" id="correct" type="text"
            class="validate">
          
        </div>
        <div class="input-field col s6">
          <input data-1testUnorrectAnswer placeholder="первый неправильный вопрос" id="correct" type="text"
            class="validate">
          
        </div>
        <div class="input-field col s6">
          <input data-2testUnorrectAnswer placeholder="второй неправильный вопрос" id="correct" type="text"
            class="validate">
          
        </div>
      </div>
      <div class='modal-footer'>
        <button id="buttonTest" name="buttonTest" data-testButton type='submit' class='row'> Добавить</button>
      </div>
    </form>

      </div>
      <hr class="col s12">
  </div>
 
    `;
}
