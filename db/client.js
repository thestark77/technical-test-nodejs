import { Sequelize } from '@sequelize/core'
import { SqliteDialect } from '@sequelize/sqlite3'

const dbClient = new Sequelize({
  dialect: SqliteDialect,
  storage: 'sequelize.sqlite'
})

try {
  await dbClient.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

export default dbClient
