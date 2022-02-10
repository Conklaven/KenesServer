// to send to database 
// npm sequelize and pg pg-hstore

import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS, {
    host:'localhost',
    dialect:'postgres',
    logging: true,


})

export default db