import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import knex from 'knex'
import Knex from 'knex'
import dotenv from 'dotenv'
import { connection } from '../connections/dataBaseConnection'
import { User } from '../types/users'



