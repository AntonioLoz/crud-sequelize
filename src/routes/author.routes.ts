import { Router } from "express";
<<<<<<< Updated upstream
import { deleteAuthor, getAuthorById, postAuthor, updateAuthor } from "../controllers/author.controller";
import { getUserById, postUser, updateUser, deleteUser } from "../controllers/user.controller";
=======
import { authorBook, deleteAuthor, getAuthorById, postAuthor, updateAuthor } from "../controllers/author.controller";
>>>>>>> Stashed changes



 class AuthorRoutes{
    public router:Router = Router();
     
    constructor(){
        this.router.get('/:id', getAuthorById);
        this.router.post('/', postAuthor);
        this.router.put('/:id', updateAuthor);
        this.router.delete('/:id', deleteAuthor);
    }
   

}

export const authorRoutes = new AuthorRoutes();