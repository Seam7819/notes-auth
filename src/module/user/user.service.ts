import { User } from "../../generated/client";
import { prisma } from "../../lib/prisma";


const signUpUser = async (payload: User): Promise<User> =>{
    const user = await prisma.user.create({
        data: payload
    })
    return user;
}

export const userService = {
    signUpUser
}