// to send to database 
// npm sequelize and pg pg-hstore

import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();


const db = new Sequelize(process.env.DATABASE_URL, {
    host:"localhost",
    dialect:'postgres',
    logging: true,
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    })
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

export default db