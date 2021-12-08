import { Options, Sequelize } from 'sequelize'
import config from './config'

const username = config.username as string
const password = config.password as string
const database = config.database as string

let sequelize = null

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: true
        }
    })
}
else {
    sequelize = new Sequelize(database, username, password, config as Options)
}

export default sequelize
