import {Sequelize} from "sequelize";

const db = new Sequelize('crud_dbnode','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;