import { Router } from "express";
import { getUserById, postUser, updateUser, deleteUser } from "../controllers/user.controller";



 class UsersRoutes{
    public router:Router = Router();
     
    constructor(){
        this.router.get('/:id', getUserById);
        this.router.post('/', postUser);
        this.router.put('/:id', updateUser);
        this.router.delete('/:id', deleteUser);
    }
   

}

export const usersRoutes = new UsersRoutes();