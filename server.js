const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const { Event } = require('./models/index')


const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const { s3, generateUploadURL} = require('./config/s3js');


const app = express()

const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
  
  app.use(session(sess));

  //Handlebars
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

<<<<<<< HEAD
app.delete("/event/delete/:event", async (req, res) => {
  console.log("trying")
  try {
    const event = await Event.findOne({
      where: {
        id: req.params.event
      }
    })
    event.destroy();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
=======
app.get('/s3Url', async (req, res)=> {
    console.log(generateUploadURL())
    const url = await generateUploadURL()
    res.send({url})
})
>>>>>>> a79ee2e62fdabc455035893cf4021eb20296fb9b

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
