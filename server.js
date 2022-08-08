const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');

const { s3, generateUploadURL } = require('./config/s3js');

require('dotenv');

const app = express()

const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SECRET_SALT,
  cookie: {maxAge:6000000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

//Handlebars
const hbs = exphbs.create({ /* helpers */ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//create url for images uploaded to AWS
app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url });
});

app.get('*', (req, res) => {
  res.render('404');
});


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});