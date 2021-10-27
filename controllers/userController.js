const UserService = require('../services/userServices');

class UserController {
  static async create(req, res) {
    try {
      const {
        email,
        first_name,
        last_name,
        phone,
        password,
        role,
      } = req.body;
console.log(req.body);
      // switch (role) {
      //   case 'parent':
      //     // const currentUser = await UserService.createParentUser(req.body);
      //     // req.session.user = { id: currentUser.id, name: currentUser.first_name };
      //     // return res.redirect('/account');
      //     break;
      //   case 'teacher':
      //     const currentUser = await UserService.createTeacherUser({
      //       email,
      //       first_name,
      //       last_name,
      //       phone,
      //       password,
      //     });
      //     req.session.user = { id: currentUser.id, name: currentUser.first_name };
      //     break;
      // }

      return res.redirect('/account');
    } catch (error) {
      console.log(error);
      return res.redirect('/');
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
