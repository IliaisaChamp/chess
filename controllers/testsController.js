// const TetsService = require('../services/testsServices');

class TestsController {
  static async createTest(req, res) {
try {
  const { question, options } = req.body
  const isCreate = await TetsService.createTest(req.body)

} catch (error) {
  console.log(error);
}

  }

  static async getTest(req, res) {
    res.json({
      level: 'начальный',
      questions: [
        {
          question: 'Вопрос1',
          answers: [
            ['ответ', 'true'],
            ['ответ', 'false'],
            ['ответ', 'false'],
          ],
        },
        {
          question: 'Вопрос2',
          options: {
            ответ: true,
            ответ: false,
            ответ: false,
          },
        },
      ],
    });
  }

  static async getResult(req, res) {}
}

module.exports = TestsController;
