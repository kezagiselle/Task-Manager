require('dotenv').config()
const express = require('express');
const app = express();
const tasks =  require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
//middleware
//app.use(express.static('./))
app.use(express.json())

//routes
app.get('/hello',(req,res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/task',tasks)
app.use(notFound)

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

//app.get('/api/v1/tasks') get all tasks
//app.post('/api/v1/tasks') create a new task
//app.get('/api/v1/tasks/:id') get a single task
//app.patch('/api/v1/tasks/:id') get a single task
//app.delete('/api/v1/tasks/:id) delete task
