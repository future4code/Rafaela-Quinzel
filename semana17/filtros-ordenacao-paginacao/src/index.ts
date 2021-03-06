import express, { Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import { getAllUsers } from './endpoints/getAllUsers'
import { getUserByName } from './endpoints/getUserByName'
import { getUserByType } from './endpoints/getUserByType'
import { getUserByNameOrType } from './endpoints/getUserByNameOrType'
import { getFiveUsers } from './endpoints/getFiveUsers'
import { getUsersWithAllFilters } from './endpoints/getUsersWithAllFilters'



dotenv.config()


const app: Express = express()
app.use(express.json())
app.use(cors())


app.get('/users/all', getAllUsers)

app.get('/user/searchName', getUserByName)

app.get('/user/:type', getUserByType)

app.get('/users/:orderBy', getUserByNameOrType)

app.get('/users', getFiveUsers)

app.get('/users/all/search', getUsersWithAllFilters)



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
})