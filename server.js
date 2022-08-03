const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const { s3, generateUploadURL} = require('./config/s3js');
// const s3 = require('./config/s3js');

//image requirements
// const fs = require('fs')
// const util = require('util')
// const unlinkFile = util.promisify(fs.unlink)
// const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })
// const { uploadFile, getFileStream } = require('./s3')

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


//image stuff
// app.get('/images/:key', (req, res) => {
//     console.log(req.params)
//     const key = req.params.key
//     const readStream = getFileStream(key)
  
//     readStream.pipe(res)
//   })
  
//   app.post('/images', upload.single('image'), async (req, res) => {
//     const file = req.file
//     console.log(file)
  
//     // apply filter
//     // resize 
  
//     const result = await uploadFile(file)
//     await unlinkFile(file.path)
//     console.log(result)
//     const description = req.body.description
//     res.send({imagePath: `/images/${result.Key}`})
//   })

app.get('/s3Url', async (req, res)=> {
    console.log(generateUploadURL())
    const url = await generateUploadURL()
    res.send({url})
})

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
