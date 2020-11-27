import { Request, Response } from "express";
import { Author } from "../models/author";
import { Book } from "../models/book";

class AuthorController {


    // GET
    public async getAuthorById(request: Request,  response: Response) {
        try {

            const author: Author | null = await Author.findByPk(request.params.id);

            response.send(author);

            if(author === null) {
                throw new Error("Author not found");
            }

        }catch(err) {
            console.log(err);
            response.status(404);
        }
    }

    public async postAuthorBook(request: Request, response: Response) {
        
        const bookToSave: Book = request.body;
        
        try{
            const book: Book | null = await Book.findOne({
                where: {title: bookToSave.title},
                include: Author,
                attributes: ['id_author', 'title']
            });
            
            console.log("TEST:[AuthorController]: ", book);
            
            if(book !== null) {
               const pepe = Book.update({
                    idAuthor: request.body.idAuthor,
                }, {
                    where: {id: book.id}
                });
                console.log("TEST:[AuthorController]: ", pepe);
            }
            else{
                bookToSave.idAuthor = Number(request.params.id);
                Book.create(bookToSave);
                console.log("TEST:[AuthorController]: ", bookToSave);
            }

            response.sendStatus(200);

        }catch(err){
            response.send(err);
        }



    }

    public async postAuthor(request: Request, response: Response) {
        try {
            const authorParams = request.body;
            console.log("TEST[AuthorController]:", authorParams);
            

            const result = await Author.create(authorParams);

            response.send(result);
        }catch(err){
            console.log(err);
        }
    }

    public async updateAuthor(request: Request, response: Response) {
        
        try{
            const result = await Author.update({
                name: request.body.name,
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

    public async deleteAuthor(request: Request, response: Response) {
        
        try{
            const user = await Author.destroy({
                where: {id: request.params.id}
            });

            response.sendStatus(200);

        }catch(err) {
            console.log(err);
            response.sendStatus(404);
            
        }
    }

    // public async deleteRelation(request: Request,  response: Response) {

    //     const idBook = Number(request.body);
    //     const idAuthor = request.params.id;
        
    //     const book: Book | null = await Book.findByPk(idBook);

    //     if(){
    //         await Book.update(
    //             {
    //                 id_author: null
    //             },
    //             {
    //                 where: {id: idBook}
    //             })
    //     }

    // }
}

export const getAuthorById = new AuthorController().getAuthorById;
export const postAuthor = new AuthorController().postAuthor;
export const updateAuthor = new AuthorController().updateAuthor;
export const deleteAuthor = new AuthorController().deleteAuthor;
export const authorBook = new AuthorController().postAuthorBook;
// export const deleteRelation = new AuthorController().deleteRelation;