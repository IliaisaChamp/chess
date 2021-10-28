export default function addNewQuestionField() {
  return `
      <div class='row'>
          <div class='input-field col s6'>
            <input
              placeholder='Вопрос'
              id='question'
              type='text'
              class='validate'
              name='questions'
            />
          </div>
          <div class='input-field col s6'>
            <input
              placeholder='Правильный ответ'
              id='correct'
              type='text'
              class='validate'
              name='options'
              data-isright='true'
            />
          </div>
          <div class='input-field col s6'>
            <input
              placeholder='Первый неправильный вопрос'
              id='correct'
              type='text'
              class='validate'
              name='options'
              data-isright='false'
            />
          </div>
          <div class='input-field col s6'>
            <input
              placeholder='Второй неправильный вопрос'
              id='correct'
              type='text'
              class='validate'
              name='options'
              data-isright='false'
            />
          </div>
          <hr />
    `;
}
