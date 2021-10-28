const bcrypt = require('bcrypt');
const { Children, User, Test, Question, Options } = require('../db/models');

class UserService {
  static async createTest(data) {
    try {
      const { level, questions } = data;
      const test = await Test.create({ level });
      
      const questionsToDB = questions.map((el) => ({
        question: el.question,
        test_id: test.id,
      }));
      const q = await Question.bulkCreate(questionsToDB);

      const optionsToDB = questions.map((el) => ({
        answer: el.options
          isRight:
        question_id:
      }))

      const opt = await Options.bulkCreate();
    } catch (error) {}
  }

  static async getTest() {}
}

module.exports = UserService;
