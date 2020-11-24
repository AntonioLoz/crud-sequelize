import { Request, Response } from "express";
import { Author } from "../models/author";

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

    public async postAuthor(request: Request, response: Response) {
        try {
            const authorParams = request.body;            

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
}

export const getAuthorById = new AuthorController().getAuthorById;
export const postAuthor = new AuthorController().postAuthor;
export const updateAuthor = new AuthorController().updateAuthor;
export const deleteAuthor = new AuthorController().deleteAuthor;