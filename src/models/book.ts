import { DataTypes, Model } from "sequelize";
import { database } from "../database";

export class Book extends Model{
    public id!: number;
    public isbn!: string;
    public idAuthor!: number;

}


Book.init({
   title:{
       type:new DataTypes.STRING,
       allowNull:false
   },
   isbn:{
       type:new DataTypes.STRING,
       allowNull: false
   },
},
{

    tableName:"books",
    sequelize:database

})