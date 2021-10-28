document.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.name === 'buttonTestAdd') {
    $delliteButton = document.querySelector('#buttonTest');
    $formWraper = document.querySelector('[data-tabWrapper]');
    $formWraper.insertAdjacentHTML('beforeend', formAddtest());
    $delliteButton.remove();
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
