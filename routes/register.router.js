const express = require('express');
const bcrypt = require('bcrypt');

const { User } = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userWithSameEmail = await User.findOne({
      where: {
        email,
      },
    });

    if (userWithSameEmail) {
      res.status(401).json({ userHadRegistration: true });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, email, password: hashedPassword });

    req.session.user = {
      id: user.id,
      username: user.username,
      email: user.username,
    };
  } catch (error) {
    console.log(error.message);
    res.status(401).end();
  }
  res.json({ userSignedUp: true });
});

module.exports = router;
