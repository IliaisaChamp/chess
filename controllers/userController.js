const UserService = require('../services/userServices');

class UserController {
  static async create(req, res) {
    try {
      const { email, name, password } = req.body;
      if (email && name && password) {
        const currentUser = await UserService.createUser({
          email,
          name,
          password,
        });
        req.session.user = { id: currentUser.id, name: currentUser.name };

        return res.redirect('/');
      } else {
        return res.redirect('/user/signup');
      }
    } catch (error) {
      console.log(error);
      return res.redirect('/user/signup');
    }
  }

  static async signin(req, res) {
    try {
      console.log(req.body);
      const { email, password } = req.body;
      if (email && password) {
        const currentUser = await UserService.findUser({ email, password });

        if (currentUser) {
          req.session.user = { id: currentUser.id, name: currentUser.name };
          return res.redirect('/');
        } else {
          return sendStatus(500);
        }
      } else {
        return res.redirect('/user/signin');
      }
    } catch (error) {
      console.log(error);
      return res.redirect('/user/signin');
    }
  }

  static signinRender(req, res) {
    res.render('signin');
  }

  static signupRender(req, res) {
    res.render('signup');
  }

  static logout(req, res) {
    req.session.destroy();
    res.clearCookie('sid').redirect('/');
  }
}

module.exports = UserController;
