require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const hbs = require('hbs');

// init session and Redis store
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = redis.createClient();

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(process.cwd(), 'views/partials'));

// hbs.registerHelper('ownerCheck', (post, user) => {
//   return post.user_id === user.id;
// });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    name: 'sid',
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    resave: false,
  }),
);

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});


const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/usersRouter');
const testsRouter = require('./routes/testsRouter');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tests', testsRouter);

function start() {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`server started on PORT: ${PORT}`);
  });
}

start();
