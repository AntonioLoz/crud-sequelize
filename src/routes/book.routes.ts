import { Router } from "express";
import { deleteBook, getBookById, postBook, updateBook } from "../controllers/book.controller";




 class BookRoutes{
    public router:Router = Router();
     
    constructor(){
        this.router.get('/:id', getBookById);
        this.router.post('/', postBook);
        this.router.put('/:id', updateBook);
        this.router.delete('/:id', deleteBook);
    }
   

}

export const bookRoutes = new BookRoutes();