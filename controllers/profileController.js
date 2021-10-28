const UserService = require('../services/userServices');


class ProfileController {
  static async render(req, res) {
    try {
      const users = await UserService.getUsers();
      console.log(req.session.user);
      console.log(res.locals.user);
      res.render('profile', users)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ProfileController;
