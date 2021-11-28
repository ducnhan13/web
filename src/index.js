const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require('cors')
const logger = require('morgan');
const bodyParser = require('body-parser')
require('dotenv').config()
const route = require('./routes')
// const database = require('./configs/database');
const path = require('path');
var session = require('express-session')




// Middle ware
app.use(express.urlencoded({extended : true}))

var sess = {
  secret: 'keyboard cat',
  cookie: {},
  resave: true,
  saveUninitialized: true
}

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
//app.use(cookieParser())


app.use(express.static(path.join(__dirname,'public')));
app.use(logger('dev'));
app.use(cors())
app.use(express.json());

//config sử dụng ejs
app.set('view engine', 'ejs');
//set path views
app.set('views',path.join(__dirname,'resources','views'))


//app.use(express.urlencoded({ extended: true }));


//routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

