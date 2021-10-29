const bcrypt = require('bcrypt');
const { Children, User, Test, Question, Option } = require('../db/models');

class TestsService {
  static async createTest(data) {
    try {
      const { questions, options } = data;
      const test = await Test.create();

      const questionsToDB = questions.map((el, id) => ({
        question: el,
        test_id: test.id,
      }));
      const questionsFromDB = await Question.bulkCreate(questionsToDB);

      const optionsToDb = options.map((el, idx) => ({
        answer: el,
        isRight: idx === 0 || idx % 3 === 0 ? true : false,
        question_id: Math.floor(idx / 3) + 1,
      }));
      console.log(optionsToDb);
      const opt = await Option.bulkCreate(optionsToDb);
    } catch (error) {
      throw error;
    }
  }

  static async getTestsList() {
    try {
      const tests = await Test.findAll();

      return tests;
    } catch (error) {
      throw error;
    }
  }

  static async getQuestions(id) {
    try {
      const questions = await Option.findAll({
        include: {
          model: Question,
          where: {
            test_id: id,
          },
        },
        raw: true,
      });

      // console.log(questions);
      return questions
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TestsService;
