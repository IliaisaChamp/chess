const bcrypt = require('bcrypt');
const { Children, User, Test, Question, Options } = require('../db/models');

class TestsService {
  static async createTest(data) {
//     {
//   questions: [ 'Кто ходит первым?', 'Родина шахмат' ],
//   options: [ 'белые', 'черные', 'конь', 'Индия', 'Китай', 'Англия' ]
// }
    try {
      const { questions, options } = data;
      // const test = await Test.create();

      const questionsToDB = questions.map((el, id) => ({
        question: el,
        test_id: test.id || id,
      }));
      // const questionsFromDB = await Question.bulkCreate(questionsToDB);


      const optionsToDb = options.map((el, idx) => ({
        answer: el.options,
        isRight: idx === 0 || idx % 3 === 0 ? true: false,
        question_id: idx
      }))

      console.log(questionsToDB);
      console.log(optionsToDb);
      // const opt = await Options.bulkCreate();
    } catch (error) {
      throw error;
    }
  }

  static async getTestsList() {
    try {
      const tests = await Test.findAll()
      console.log(tests);
      return tests
    } catch (error) {
      throw error
    }
  }
}

module.exports = TestsService;
