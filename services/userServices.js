const bcrypt = require('bcrypt');
const { Children, User } = require('../db/models');

class UserService {
  static async createParentUser(data) {
    const {
      email,
      first_name,
      last_name,
      phone,
      password,
      childName,
      childExp,
      childAge,
      role,
    } = data;
    try {
      const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND));
      const currentUser = await User.create({
        email,
        first_name,
        last_name,
        phone,
        role,
        password: cryptPass,
      });

      const currentChild = await Children.create({
        name: childName,
        exp: childExp,
        age: childAge,
        user_id: currentUser.id,
      });

      return currentUser;
    } catch (error) {
      throw error;
    }
  }

  static async createTeacherUser(data) {
    const { password } = data;
    try {
      const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND));

      const currentUser = await User.create({
        ...data,
        password: cryptPass,
      });

      return currentUser;
    } catch (error) {
      throw error;
    }
  }

  static async findUser(data) {
    const { email, name, password } = data;
    try {
      const currentUser = await User.findOne({ where: { email } });
      if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
        return currentUser;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  static async getUsers() {
    try {
      const users = await User.findAll({ raw: true });
      return users;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
