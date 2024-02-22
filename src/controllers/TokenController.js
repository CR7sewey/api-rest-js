import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res, next) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      res.status(401).json({ errors: ['Credenciais envalidas'] });
    }
    const userEmail = await User.findOne({ where: { email } });
    if (!userEmail) {
      res.status(401).json({ errors: ['Não existe este usuario'] });
    }
    const userPassword = await userEmail.passwordIsValid(password);
    if (!userPassword) {
      res.status(401).json({ errors: ['Password invalida'] });
    }

    const { id } = userEmail;

    const token = jwt.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION },
    );

    return res.json({ token });
  }
}

// tenho de mandar a isntancia
export default new TokenController();
