import { Book } from "../models/book";
import { Request, Response } from 'express'
import { Author } from "../models/author";

class BookController {


    // GET
    public async getBookById(request: Request,  response: Response) {
        try {

            const book: Book | null = await Book.findOne({
                where: {id: request.params.id},
                attributes: [
                    'title',
                    'isbn',
                    'id',
                    'id_author'
                ] ,
                include: Author
            });

            

            if(book === null) {
                throw new Error("Book not found");
            }
            response.send(book);
        }catch(err) {            
            response.sendStatus(404);
            console.log(err);
            
        }
    }

    public async postBook(request: Request, response: Response) {
        try {
            const bookParams = request.body;            

            const result = await Book.create(bookParams);

            response.send(result);
        }catch(err){
            console.log(err);
        }
    }

    public async updateBook(request: Request, response: Response) {
        
        try{
            const result = await Book.update({
                title: request.body.title,
                isbn: request.body.isbn,
            }, {
                where: {id: request.params.id}
            })
            response.sendStatus(200);
        }catch(err) {
            console.log(err);
            response.sendStatus(404)
        }
    }

    public async deleteBook(request: Request, response: Response) {
        
        try{
            const book = await Book.destroy({
                where: {id: request.params.id}
            });

            response.sendStatus(200);

        }catch(err) {
            console.log(err);
            response.sendStatus(404);
            
        }
    }
}

export const getBookById = new BookController().getBookById;
export const postBook = new BookController().postBook;
export const updateBook = new BookController().updateBook;
export const deleteBook = new BookController().deleteBook;