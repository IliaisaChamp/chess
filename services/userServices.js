const bcrypt = require('bcrypt');
const { Post, Tag, PostTag, User } = require('../db/models');

class UserService {
  static async createUser(data) {
    const { email, name, password } = data;
    try {
      const cryptPass = await bcrypt.hash(password, Number(process.env.SALT_ROUND));

      const currentUser = await User.create({ ...data, password: cryptPass });
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
}

module.exports = UserService;
