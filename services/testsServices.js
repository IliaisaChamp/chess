const bcrypt = require('bcrypt');
const { Children, User, Test, Question, Options } = require('../db/models');

class UserService {
  static async createTest(data) {
//     {
//   questions: [ 'Кто ходит первым?', 'Родина шахмат' ],
//   options: [ 'белые', 'черные', 'конь', 'Индия', 'Китай', 'Англия' ]
// }
    try {
      const { question, options } = data;
      const test = await Test.create();

      const questionsToDB = questions.map((el, id) => ({
        question: el,
        test_id: test.id,
      }));
      const questionsFromDB = await Question.bulkCreate(questionsToDB);

      
      const optionsToDB = questionsFromDB.map((el) => ({
        answer: el.options
        isRight:
        question_id: el.id
      }))

      const opt = await Options.bulkCreate();
    } catch (error) {}
  }

  static async getTest() {}
}

module.exports = UserService;
