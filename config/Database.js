import {Sequelize} from "sequelize";

const db = new Sequelize('projek_aws','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;