import { Request, Response } from 'express'
import { generateId } from '../services/idGenerator'
import { generateToken } from '../services/authenticator'
import { getAddressByCep } from '../services/addressManager'
import { User } from '../types/user'
import { UserAddress } from '../types/userAddress'
import { hash } from '../services/hashManager'
import { USER_ROLES } from '../types/user'
import  insertUser  from '../data/insertUser'
import insertAddress from '../data/insertAddress'


export default async function createUser(req: Request, res: Response): Promise<void> {

    try {

        const { email, password, role, cep, number, complement } = req.body

        const id: string = generateId()

        const addressId: string = generateId()

 
        if (!email || email.indexOf("@") === -1) {

            throw new Error("E-mail inválido!")
        }
  
  
        if (!password || password.length < 6) {
  
            throw new Error("A senha deve conter mais de seis digitos!")

        }

        if (role !== USER_ROLES.ADMIN && role !== USER_ROLES.NORMAL) {

            throw new Error(`"role" deve ser "NORMAL" ou "ADMIN"`)
        }

        

        if (!cep) {

            res.statusCode = 422

            throw new Error("Por favor informe os números do CEP.")
        }

        if (!number) {

            res.statusCode = 422

            throw new Error("Por favor informe o número do endereço.")
        }
   
 
        const cypherPassword: string = await hash(password)
 
        const newUser: User = {
            id,
            email,
            password: cypherPassword,
            role
        }

        await insertUser(newUser)
 
        const token = generateToken({
            id,
            role: req.body.role
        })


        const addressInfo = await getAddressByCep(cep)

        const newAddress: UserAddress = {
            id: addressId,
            street: addressInfo.street,
            number: number,
            neighborhood: addressInfo.neighborhood,
            complement: complement,
            city: addressInfo.city,
            state: addressInfo.street,
            user_id: id
        }

        await insertAddress(newAddress)
 
        res
          .status(200)
          .send({message: "Usuário criado com sucesso!", token })
 
    } catch (error) {

       res.status(400).send({

          message: error.message || error.sqlMessage
       })
    }
}

