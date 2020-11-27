import { Router } from "express";
import { authorBook, deleteAuthor, deleteRelation, getAuthorById, postAuthor, updateAuthor } from "../controllers/author.controller";



 class AuthorRoutes{
    public router:Router = Router();
     
    constructor(){
        this.router.get('/:id', getAuthorById);
        this.router.post('/authorbook/:id', authorBook);
        this.router.post('/', postAuthor); 
        this.router.put('/:id', updateAuthor);
        this.router.delete('/:id', deleteAuthor);
        this.router.delete('/deleterelation/:id', deleteRelation);
    }
   

}

export const authorRoutes = new AuthorRoutes();