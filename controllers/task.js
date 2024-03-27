const getAllTasks = (req, res) => {
    res.send('all items')
} 

const createTasks = (req, res) => {
    res.json(req.body)
}

const getTasks = (req, res) => {
    res.json({id: req.params.id})
}

const updateTasks = (req, res) => {
    res.send('Update a task')
}

const deleteTasks = (req, res) => {
    res.json({id: req.params.id})
}

module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}