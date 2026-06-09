import { Request, Response } from "express";
import { userService } from "./user.service";

const signUpUser = async (req:Request,res:Response)=>{
    const payload = req.body;
    try{
        const user = await userService.signUpUser(payload);
        res.status(201).json({
            success: true,
            message: 'user created successfully',
            data: user
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message : err
        })
    }
}

export const  userController = {
    signUpUser
}