const express = require('express');

const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    req.session.destroy((err) => {
      console.log('logout');
      if (err) {
        return next(err);
      }
      res.clearCookie('user_sid');
      res.locals.username = null;
      res.locals.isAuth = false;
      return res.redirect('/');
    });
  });

module.exports = router;
