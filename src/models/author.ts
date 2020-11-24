
import {DataTypes, Model} from "sequelize";
import { database } from "../database";
import { Book } from "./book";


export class Author extends Model{

    public id!:number;
    public name!: string;
    familyname!: string

}


Author.init({
    
    name:{
        type: new DataTypes.STRING(128),
        allowNull:true,
    },
    familyname:{
        type: new DataTypes.STRING(128),
        allowNull:true,
    }
}, 
{
    tableName: 'Author',
    sequelize: database
});


Author.hasMany(Book);
Book.belongsTo(Author);