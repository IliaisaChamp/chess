const UserService = require('../services/userServices');

class UserController {
  static async create(req, res) {
    try {
      const { email, first_name, last_name, phone, password, role } = req.body;
      console.log(req.body);
      switch (role) {
        case 'parent':
          const user = await UserService.findUser(req.body);
          if (!user) {
            const currentUser = await UserService.createParentUser(req.body);
            req.session.user = {
              id: currentUser.id,
              name: currentUser.first_name,
              role: currentUser.role,
            };
            return res.redirect('/');
          } else {
            console.log('Такой пользователь уже есть');
            return res.redirect('/');
          }
          break;
        case 'teacher':
          const currentTeacher = await UserService.createTeacherUser({
            email,
            first_name,
            last_name,
            phone,
            password,
            role: role,
          });
          break;
      }

      return res.redirect('/');
    } catch (error) {
      console.log(error);
      return res.redirect('/');
    }
  }

  static async signin(req, res) {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const currentUser = await UserService.findUser({ email, password });
        console.log(currentUser);
        if (currentUser) {

          req.session.user = {
            id: currentUser.id,
            name: currentUser.first_name,
            role: currentUser.role,
          };
          return res.redirect('/profile');
        } else {
          return res.sendStatus(500);
        }
      } else {
        return res.redirect('/profile');
      }
    } catch (error) {
      console.log(error);
      return res.redirect('/');
    }
  }



  static deleteTeacher(req, res) {
    req.session.destroy();
    res.clearCookie('sid').redirect('/');
  }

  static logout(req, res) {
    req.session.destroy();
    res.clearCookie('sid').redirect('/');
  }
}

module.exports = UserController;
