import { userDocument } from "../src/model/user"
import { Request } from "express"

export interface AuthReq extends Request {
    user?: {
        username: string;
        email: string;
    };
}