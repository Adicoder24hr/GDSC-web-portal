import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../lib/jwt.lib";
import { AuthReq } from "../../types/para";
import user from "../model/user";

export const checkAuth = async (req: AuthReq, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                status: 401,
                message: "Unauthorized: No token provided",
            });
        }

        const decodedToken = atob(token);
        const validToken = verifyToken(decodedToken);

        // Type guard to check if validToken is a JwtPayload
        if (typeof validToken === "string" || typeof validToken === "boolean" || !("email" in validToken)) {
            return res.status(401).json({
                status: 401,
                message: "Unauthorized: Invalid token",
            });
        }

        // Now TypeScript knows validToken is a JwtPayload and has an email property
        const foundUser = await user.findOne({ email: validToken.email });

        if (!foundUser || foundUser.username !== validToken.username) {
            return res.status(401).json({
                status: 401,
                message: "Unauthorized: User not found or mismatched",
            });
        }

        req.user = {
            username: validToken.username,
            email: validToken.email,
        };

        next();
    } catch (e) {
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error",
        });
    }
};