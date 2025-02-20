import { Task, TASK_STATUSES } from '../models.js'

export async function createTask({ title, description }) {
  return await Task.create({
    title,
    description,
    status: TASK_STATUSES.PENDING
  })
}

export async function getTask({ id }) {
  return await Task.findOne({ where: { id } })
}

export async function updateTask({ id, title, description, status }) {
  return await Task.update({ title, description, status }, { where: { id } })
}

export async function getAllTasks() {
  return await Task.findAll()
}

export async function deleteTask({ id }) {
  return await Task.destroy({ where: { id } })
}
