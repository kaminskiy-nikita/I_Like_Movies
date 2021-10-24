const express = require('express');

const router = express.Router();

router.route('/')
  .post((req, res, next) => {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('user_sid');
      return res.json({ isUserLogout: true, user: false });
    });
  });

module.exports = router;
