import { DataTypes, Model } from "sequelize";
import { database } from "../database";



export class Role extends Model {

    public id!: number;
    public name!: ERole;
}

Role.init(
    {
        name: {
           type: new DataTypes.ENUM({
               values:['ROLE_ADMIN', 'ROLE_WEB_CLIENT']
           }),
           allowNull: false,
        }
        
    }, 
    {
        sequelize: database,
        tableName: 'roles'
    }
)


export enum ERole {
    ROLE_ADMIN,
    ROLE_WEB_CLIENT
}