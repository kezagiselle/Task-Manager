const Task = require('../models/task')
const {createCustomError} = require('../errors/custom-error')
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error){
        res.status(500).json({msg: error})
    }
} 

const createTasks = (req, res) => {
    try {
        const task = Task.create(req.body)
        res.status(201).json(req.body)
    } catch (error){
        res.status(500).json({msg: error})
    }  
}

const getTasks = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}` , 404))
        }
        res.status(200).json({task})
    } catch (error){
        res.status(500).json({msg: error})
    }
 
}

const updateTasks = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{
            new: true,
            runValidators: true,
        })

        if(!task){
            return next(createCustomError(`No task with id: ${taskID}` , 404))
        }
        res.status(200).json({id:taskID,data:req.body})
    } catch (error){
        res.status(500).json({msg: error})
    }

}

const deleteTasks = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}` , 404))
        }
        res.status(200).json({msg: error})
    } catch (error){
        res.status(500).json({msg: error})
    }
   
}

module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}