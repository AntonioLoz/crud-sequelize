
import { DataTypes, Model } from "sequelize";
import { database } from "../database";
import { Book } from "./book";

export class Author extends Model {

    public id!: number;
    public name!: string;
    public familyname!: string;
}


Author.init({
    
    username:{
        type: new DataTypes.STRING(128),
        allowNull:true,
    },
    familyname:{
        type: new DataTypes.STRING(128),
        allowNull:true,
    }
}, {
    tableName: 'users',
    sequelize: database
});

Author.hasMany(Book);
Book.belongsTo(Author);