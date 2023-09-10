const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash') // Corrected require statement

//Connection MOgodb
mongoose.connect('mongodb+srv://admin:1234@cluster0.a1lynex.mongodb.net/?retryWrites=true&w=majority', {
  userNewUrlParser: true,
 
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


// Controllers
const indexController = require('./controllers/indexController')
const loginController = require('./controllers/loginController')
const registerController = require('./controllers//registerController')
const storeController = require('./controllers/storeController')


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded()) // Added 'extended' option
app.use(flash())
app.use(expressSession({
    secret: "node secret"
}))
app.set('view engine', 'ejs')

app.get('/', indexController)
app.get('/login', loginController)
app.get('/register', registerController)
app.post('/user/register',storeController)


app.listen(4000, () => {
  console.log("App listening on port 4000"); // Corrected console message
})
