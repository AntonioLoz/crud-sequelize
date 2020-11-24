import { DataTypes, Model } from "sequelize";
import { database } from "../database";

export class User extends Model {

    public id!: number;
    public username!: string;
    public familyname!: string;    
}

User.init({
    
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