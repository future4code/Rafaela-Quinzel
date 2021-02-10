import { UserBusiness } from "../src/business/UserBusiness"
import { IdGenerator } from "../src/services/idGenerator"
import { HashGenerator } from "../src/services/hashGenerator"
import { TokenGenerator } from "../src/services/tokenGenerator"

describe("Testing signup Business", () => {

    const idGenerator = { generate: jest.fn(() => "bananinha") } as IdGenerator
    const hashGenerator = { hash: jest.fn(async () => "senha cripto"), compareHash: jest.fn() } as HashGenerator
    const userDatabase = {
        createUser: jest.fn()
    } as any
    const tokenGenerator = { generate: jest.fn(() => "token"), verify: jest.fn() } as TokenGenerator

    const userBusiness: UserBusiness =
        new UserBusiness(idGenerator, hashGenerator, userDatabase, tokenGenerator)

    test("Should return Missing Input Error on empty name", async () => {

        expect.assertions(2)

        try {

            await userBusiness.signup(
                "",
                "joao@email.com",
                "maxixe",
                "normal"
            )

        } catch (error) {
            expect(error.statusCode).toBe(422);
            expect(error.message).toEqual("Missing input")
        }
    })

    test("Should return Missing Input Error on empty email", async () => {

        expect.assertions(2)

        try {

            await userBusiness.signup(
                "João",
                "",
                "maxixe",
                "normal"
            )

        } catch (error) {
            expect(error.statusCode).toBe(422);
            expect(error.message).toEqual("Missing input");
        }
    })

    test("Should return Missing Input Error on empty password", async () => {

        expect.assertions(2)

        try {

            await userBusiness.signup(
                "João",
                "joao@email.com",
                "",
                "normal"
            );

        } catch (error) {
            expect(error.statusCode).toBe(422)
            expect(error.message).toEqual("Missing input")
        }
    })

    test("Should return Missing Input Error on empty role", async () => {

        expect.assertions(2)

        try {

            await userBusiness.signup(
                "João",
                "joao@email.com",
                "maxixe",
                ""
            )

        } catch (error) {
            expect(error.statusCode).toBe(422)
            expect(error.message).toEqual("Missing input")
        }
    })

    test("Should return All addresses must have an @ Error on invalid email", async () => {

        expect.assertions(2)

        try {

            await userBusiness.signup(
                "João",
                "joao",
                "maxixe",
                "normal"
            )

        } catch (error) {
            expect(error.statusCode).toBe(422)
            expect(error.message).toEqual("All addresses must have an @")
        }
    })

    test("Should return Invalid password Error on password with length shorter than 6", async () => {

        expect.assertions(2)

        try {

            await userBusiness.signup(
                "João",
                "joao@email.com",
                "maxix",
                "normal"
            );

        } catch (error) {
            expect(error.statusCode).toBe(422)
            expect(error.message).toEqual("Invalid password")
        }

    })

    test("Should return Invalid user role Error when Role is not ADMIN or NORMAL", async () => {

        expect.assertions(2)

        try {

            await userBusiness.signup(
                "João",
                "joao@email.com",
                "maxixe",
                "PHILIPPE COUTINHO"
            )

        } catch (error) {
            expect(error.statusCode).toBe(422)
            expect(error.message).toEqual("Invalid user role")
        }
    })

    test("Should return token", async () => {

        const token = await userBusiness.signup(
            "João",
            "joao@email.com",
            "maxixe",
            "ADMIN"
        )

        expect(hashGenerator.hash).toHaveBeenCalled()
        expect(hashGenerator.hash).toHaveReturnedWith("senha cripto")
        expect(tokenGenerator.generate).toHaveBeenCalled()
        expect(tokenGenerator.generate).toHaveReturnedWith("token")
        expect(token).toEqual({ accessToken: "token" })
    })

})