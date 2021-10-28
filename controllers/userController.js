const UserService = require('../services/userServices');

class UserController {
  static async create(req, res) {
    try {
      const { email, first_name, last_name, phone, password, role } = req.body;
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
          });
          req.session.user = {
            id: currentTeacher.id,
            name: currentTeacher.first_name,
            role: currentUser.role,
          };
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
          console.log(currentUser);
          req.session.user = {
            id: currentUser.id,
            name: currentUser.name,
            role: currentUser.role,
          };
          return res.redirect('/users/profile');
        } else {
          return sendStatus(500);
        }
      } else {
        return res.redirect('/users/profile');
      }
    } catch (error) {
      console.log(error);
      return res.redirect('/');
    }
  }


  static logout(req, res) {
    req.session.destroy();
    res.clearCookie('sid').redirect('/');
  }
}

module.exports = UserController;
