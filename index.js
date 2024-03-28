require('dotenv').config()
const express = require('express');
const app = express();
const tasks =  require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
//middleware
app.use(express.json() )
//routes
app.get('/hello',(req,res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/task',tasks)

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL || 'mongodb://localhost:27017/TaskManager')
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
       console.log(error)
    }
}

start()
//module.exports = connectDB

