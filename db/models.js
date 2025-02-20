
import dbClient from './client.js'

const TASK_STATUSES = {
  PENDING: 'pending',
  COMPLETED: 'completed'
}

const Task = dbClient.define('task', {
  id: {
    type: dbClient.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: dbClient.DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: dbClient.DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: dbClient.DataTypes.STRING,
    allowNull: false
  }
})

const User = dbClient.define('user', {
  id: {
    type: dbClient.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: dbClient.DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: dbClient.DataTypes.STRING,
    allowNull: false
  }
})

(async () => {
  await sequelize.sync({ force: true })
})()

export { Task, TASK_STATUSES, User }
