require('dotenv').config();
const express = require('express');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const indexRouter = require('./routes/index.router');
const registerRouter = require('./routes/register.router');
const loginRouter = require('./routes/login.router');
const logoutRouter = require('./routes/logout.router');
const favouritesRouter = require('./routes/favourites.router');
const commentRouter = require('./routes/comment.router');
const searchRouter = require('./routes/search.router');
const infoRouter = require('./routes/info.router');
const userMiddleware = require('./middleware/user');

const app = express();

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
  store: new FileStore(),
};

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use(userMiddleware);
app.use('/', indexRouter);
app.use('/signup', registerRouter);
app.use('/signin', loginRouter);
app.use('/logout', logoutRouter);
app.use('/search', searchRouter);
app.use('/favourites', favouritesRouter);
app.use('/info', infoRouter);
app.use('/comment', commentRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
