import { Request, Response } from 'express';
import { User } from '../models/user';
import bcrypt from 'bcrypt';
import { BCryptUtil } from '../utils/bcryptUtil'

class UserController {


    public async getUserById(request: Request,  response: Response) {
        try {

            const user: User | null = await User.findByPk(request.params.id);

            if(user === null) {
                throw new Error("User not found");
            }

            response.send(user);

        }catch(err) {
            console.log(err);
            response.status(404);
        }
    }


    public async postUser(request: Request, response: Response) {
        try {
            let userParams = request.body;            
            
            const password: string = await BCryptUtil.encrypt(userParams.password);

            userParams.password = password;

            const user: User = await User.create(userParams);

            response.sendStatus(200);

        }catch(err){
            console.log(err);
            response.sendStatus(500);
        }
    }

    public async updateUser(request: Request, response: Response) {
        
        try{
            const result = await User.update({
                username: request.body.username,
                familyname: request.body.familyname,
            }, {
                where: {id: request.params.id}
            })
            response.sendStatus(200);
        }catch(err) {
            console.log(err);
            response.sendStatus(404)
        }
    }

    public async deleteUser(request: Request, response: Response) {
        
        try{
            const user = await User.destroy({
                where: {id: request.params.id}
            });

            response.sendStatus(200);

        }catch(err) {
            console.log(err);
            response.sendStatus(404);
            
        }
    }

}

export const getUserById = new UserController().getUserById;
export const postUser = new UserController().postUser;
export const updateUser = new UserController().updateUser;
export const deleteUser = new UserController().deleteUser;