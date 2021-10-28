function setQuestionTempl(data) {
  const { question, answers } = data
  console.log(question);
  setOption(answers);
  return `
      <div class="row">
      <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Вопрос</span>
          <p>${question}</p>
        </div>
        <div class="card-action">
           ${setOption(answers)}
        </div>
      </div>
      <a class="waves-effect waves-light btn button_confirm">Ответить</a>
    </div>
  </div>
  `;
}

function setOption(options) {
  let str = '';
  options.forEach((el) => {
    str += `
      <label>
            <input type="checkbox" class="filled-in" checked="checked" data-isright="${el.isRight}"/>
            <span>${el.answer}</span>
          </label>
    `;
  });
  console.log(str);
  return str;
}

export default setQuestionTempl;
