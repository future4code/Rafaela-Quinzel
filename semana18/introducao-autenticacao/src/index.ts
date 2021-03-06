import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import  createUser from './endpoints/createUser'
import login from './endpoints/login'
import getUserById from './endpoints/getUserById'



dotenv.config()

export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306
    }
})


const app = express()
app.use(express.json())
app.use(cors())



app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/profile', getUserById)





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
})