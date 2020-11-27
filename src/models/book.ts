import { DataTypes, Model } from "sequelize";
import { database } from "../database";

export class Book extends Model{


    public id!: number;
    public title!: string;
    public isbn!: string;
    public idAuthor!: number;
}

Book.init(
    {
        title:{
            type: new DataTypes.STRING,
            allowNull: false
        },

        isbn: {
            type: new DataTypes.STRING,
            allowNull: false
        },
        idAuthor: {
            field: 'id_author',
            type: new DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'authors',
                key: 'id'
            }
            
        }
    }, 
    {
        tableName: "books",
        sequelize: database
    })