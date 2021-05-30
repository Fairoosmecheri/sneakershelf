var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var db = require('./config/connection')

var userRouter = require('./routes/user');
var adminRouter = require('./routes/admin');
const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())


app.use('/', userRouter);
app.use('/admin', adminRouter);

// const CONNECTION_URL = 'mongodb+srv://admin:admin123@cluster0.zb4ah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 7000
db.connect((err) => {
    if(err) console.log("Error")
    else {
        console.log("Database connected")
        app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
    }
});
// mongoose.connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
// }).catch((error) => {
//     console.log(error.message)
// })

// mongoose.set('useFindAndModify', false)