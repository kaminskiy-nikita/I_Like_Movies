const express = require('express');
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.render('login');
  })
  .post(async (req, res) => {
    try {
      const { email, password } = req.body;

      const userByEmail = await User.findOne({
        where: {
          email,
        },
      });

      if (!userByEmail) {
        res.status(401).json({ isInvalidEmail: true });
      }

      const isValidPassword = await bcrypt.compare(password, userByEmail.password);

      if (!isValidPassword) {
        return res.status(401).json({ isInvalidPassword: true });
      }

      req.session.user = {
        id: userByEmail.id,
        username: userByEmail.username,
        email: userByEmail.username,
      };
    } catch (error) {
      console.log(error.message);
      res.status(401).end();
    }
    res.json({ userSignedIn: true });
  });
module.exports = router;
