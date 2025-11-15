import accountUsers from "../models/user.model.js"

export const createUser = async ({ name, email, hashed, provider }) => {

    if (!name || !email || !hashed) {
        throw new Error("Name, Email or Password, one of these is missing, please provide them.")
    }

    const user = await accountUsers.create({
        name,
        email,
        password: hashed,
        provider,
    })

    return user
}

