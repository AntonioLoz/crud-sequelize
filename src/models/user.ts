import { DataTypes, Model } from "sequelize";
import { database } from "../database";
import { Role } from "./role";

export class User extends Model {

    public id!: number;
    public username!: string;
    public familyname!: string; 
    public password !: string;
    public email!: string;
    public IdRole!: number;
}

User.init({
    
    username:{
        type: new DataTypes.STRING(128),
        allowNull:true,
    },
    familyname:{
        type: new DataTypes.STRING(128),
        allowNull:true,
    },
    password: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    email: {
        type: new DataTypes.STRING(128),
        allowNull: false
    },
    idRole: {
        field: 'id_role',
        type: new DataTypes.INTEGER,
        defaultValue: 2,
        references: {
            model: 'roles',
            key: 'id'
        }
    }
}, {
    tableName: 'users',
    sequelize: database
});

Role.hasMany(User);
User.belongsTo(Role, {foreignKey: 'id_role'});