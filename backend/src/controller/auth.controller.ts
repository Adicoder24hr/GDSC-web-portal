import { Request, Response } from "express";
import { createUserBody } from "../helper/valid.helper";
import user from "../model/user";
import { createToken } from "../lib/jwt.lib";


export const userRegistration = async (req: Request, res: Response) =>{
    try{
        const body = createUserBody.safeParse(req.body);

        if(!body.success){
            return res.status(400).json({
                status: 400,
                message: body.error.message
            });
        };

        const existingUser = await user.findOne({email: body.data.email});

        if(existingUser){
            return res.status(400).json({
                status: 400,
                message: "user already exists"
            });
        };

        let UserData = {...body.data};

        await user.create(UserData);

        res.cookie("token", createToken({username: body.data.username, email: body.data.email}),{
            path: "/user",
            httpOnly: true,
            encode: btoa,
            expires: new Date(new Date().setDate(new Date().getDate() + 30 )),
        })
        return res.status(200).json({
            status: 200,
            message: "User registered successfully",
            data: UserData
        });
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            status: 500,
            Message: "Internal server error"
        });
    }
}

export const check_mail = async (req: Request, res: Response) =>{
    try{
        console.log(req.body);
        
        const body = req.body;

        if(!body.email){
            return res.status(400).json({
                status: 400,
                message: "Email is required!"
            })
        };

        if(typeof body.email !== "string"){
            return res.status(400).json({
                status: 400,
                message: "Invalid Email!"
            })
        }

        const existingUser = await user.findOne({email: body.email})
        console.log("Existing user", existingUser);
        

        if(!existingUser){
            return res.status(404).json({
                status: 404,
                message: "User Not Found!"
            });
        };
        
        return res.status(200).json({
            status: 200,
            message: "User Exists",
            data: existingUser
        })
    }
    catch(e){
        return res.status(500).json({
            status: 500,
            message: "Internal server error!"
        })
    }
}