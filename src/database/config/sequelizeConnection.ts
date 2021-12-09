import { Options, Sequelize } from 'sequelize'
import config from './config'

const username = config.username as string
const password = config.password as string
const database = config.database as string

export default new Sequelize(database, username, password, config as Options)
