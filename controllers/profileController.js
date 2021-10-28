const UserService = require('../services/userServices');
const TestsController = require('../services/testsServices');
const TestsService = require('../services/testsServices');

class ProfileController {
  static async render(req, res) {
    try {
      const users = await UserService.getUsers();
      const currentUserFromDb = await UserService.getCurrentUsers(req.session.user.id);
      const tests = await TestsService.getTestsList();
      const { first_name, last_name, email, phone } = currentUserFromDb;
      const userInfo = { first_name, last_name, email, phone };
      res.render('profile', { users, tests, userInfo });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProfileController;
