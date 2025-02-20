import { safeParseValidation, createTaskSchema } from '../utils/validation.js'

function createTask(req, res) {
  const { title, description } = req.body

  const { title: validatedTitle, description: validatedDescription } =
    safeParseValidation(createTaskSchema, { title, description })
}

function getAllTasks(req, res) {
  
}

function getTask(req, res) {

}

function updateTask(req, res) {

}

function deleteTask(req, res) {

}

export { createTask, getTask, getAllTasks, updateTask, deleteTask }
