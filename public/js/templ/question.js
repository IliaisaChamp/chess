function setQuestionTmpl(question) {
  return `
      <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Вопрос</span>
          <p>${question.question}</p>
        </div>
        <div class="card-action">
           ${setOption(question.options)}
        </div>
      </div>
      <a class="waves-effect waves-light btn button_confirm">Ответить</a>
    </div>
  </div>
  `;
}

function setOption(options) {
  const str = ''
  options.forEach(el => {
    str += `
      <label>
            <input type="checkbox" class="filled-in" checked="checked" data-isright="${el.isRight}"/>
            <span>${el.answer}</span>
            </label>
    `
  });

  return str;

}


module.export =
