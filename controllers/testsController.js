const TestsService = require('../services/testsServices');

class TestsController {
  static async createTest(req, res) {
    try {
      const isCreate = await TestsService.createTest(req.body);
      if (isCreate) {
        res.redirect('profile');
      } else {
        res.redirect('create-test');
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async getTest(req, res) {
    const { id } = req.params;
    try {
      const questionFromDb = await TestsService.getQuestions(id);
      // const questions = {}
      // for (const iterator of questionFromDb) {
      //   questions[iterator['Question.question']]
      // }
      // console.log(questions);
      // // res.json()
    } catch (error) {
      // res.sendStatus(500);
      console.log(error);
    }
  }
}

module.exports = TestsController;
