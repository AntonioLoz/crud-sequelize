import { Router } from "express";

import { authorBook, deleteAuthor, getAuthorById, postAuthor, updateAuthor,deleteBookAssociationToAuthor  } from "../controllers/author.controller";




 class AuthorRoutes{
    public router:Router = Router();
     
    constructor(){
        this.router.get('/:id', getAuthorById);
        this.router.post('/authorbook/:id', authorBook);
        this.router.post('/', postAuthor); 
        this.router.put('/:id', updateAuthor);
        this.router.delete('/:id', deleteAuthor);
        this.router.delete('/:id/books', deleteBookAssociationToAuthor);
    }
   

}

export const authorRoutes = new AuthorRoutes();