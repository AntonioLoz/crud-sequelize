import { Router } from "express";
import { deleteBook, getBookById, postBook, updateBook } from "../controllers/book.controller";
import { checkJwt } from "../middelwares/checkJwt";
import { checkRole } from "../middelwares/checkRole";



 class BookRoutes{
    public router:Router = Router();
     
    constructor(){
        this.router.get('/:id', [checkJwt, checkRole], getBookById);
        this.router.post('/', postBook);
        this.router.put('/:id', updateBook);
        this.router.delete('/:id', deleteBook);
    }
   

}

export const bookRoutes = new BookRoutes(); 