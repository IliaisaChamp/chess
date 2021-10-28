const UserService = require('../services/userServices');


class ProfileController {
  static async render(req, res) {
    try {
      const users = await UserService.getUsers();
      res.render('profile', users)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProfileController;
