import { Options, Sequelize } from 'sequelize'
import config from './config'

const username = config.username as string
const password = config.password as string
const database = config.database as string

const sequelizeConnection = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: true
    }
})

export default sequelizeConnection
