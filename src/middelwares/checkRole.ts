import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const checkRole = (RoleToCheck: string) => {
   return (request: Request, response: Response, next: NextFunction) => {
        const principal = response.locals.principal;
        console.log("TEST[CheckRole]", principal);  
        
        

        next();
    }
}