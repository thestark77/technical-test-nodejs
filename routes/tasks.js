import { Router } from 'express'
import {
  createTask,
  getTask,
  updateTask,
  getAllTasks,
  deleteTask
} from '../controller/tasks.js'

const tasksRouter = Router()

tasksRouter.get('/', getAllTasks)
tasksRouter.get('/:id', getTask)
tasksRouter.post('/', createTask)
tasksRouter.put('/:id', updateTask)
tasksRouter.delete('/:id', deleteTask)

export { tasksRouter }
