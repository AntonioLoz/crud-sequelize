import * as Sequelize  from 'sequelize';
import data from '../src/config/config.json';

const db = data.development.database;
const username = data.development.username;

export const database = new Sequelize.Sequelize(db, username, "", {
    dialect: "mysql",
    port: 3306,
    define: {
        timestamps: false
    }
});