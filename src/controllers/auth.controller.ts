import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config.json';
import { ERole, Role } from '../models/role';
import { User } from '../models/user';

class AuthController {

    public async login (request: Request, response: Response) {
        
        try {
            const password: string = request.body.password;
            const emailIn: string = request.body.email;

            const user: User | null = await User.findOne({
                where: { email: emailIn },
                include: Role,
                attributes: ['username', 'familyname', 'password', 'email','id_role']
            });

            
        

            if(user === null || user === undefined || password !== user.password) {
                throw new Error("Incorrect email or password");
            }

            const role: ERole = user.getDataValue('Role').dataValues.name;

            const token = jwt.sign(
                { 
                    email: request.body.email,
                    password: request.body.password,
                    role: role
                },
                config.jwtSecret,
                { expiresIn: '1h'}
            );

            response.send(token);

        }catch(err) {
            console.log(err);
            response.sendStatus(401);
        }
    }

}

export const login = new AuthController().login;