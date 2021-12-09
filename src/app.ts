import dotenv from 'dotenv'
import express from 'express'
import dbInit from './database/init'
import routes from './routes'

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

class AppController {

    public express

    constructor() {
        this.express = express()

        this.middlewares()
        this.routes()

        dbInit()
    }

    middlewares() {
        this.express.use(express.json())
    }


    routes() {
        this.express.use('/api', routes)
    }
}

export default (new AppController()).express