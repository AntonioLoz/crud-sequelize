import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import config from '../config/config.json';
import { User } from "../models/user";

export const checkJwt = (request: Request, response: Response, next: NextFunction) => {

    const token = <string>request.headers["authorization"];

    try{        
        const principal = jwt.verify(token, config.jwtSecret);
        response.locals.principal = principal;
    }catch(err) {
        console.log(err);
        response.sendStatus(401);
    }
    next();
}