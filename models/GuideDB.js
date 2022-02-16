import {Sequelize} from 'sequelize';
import db from '../config/Database.js';

const {DataTypes} = Sequelize;

const GuideDB = db.define("guides", { 
    first_name:{
        type: DataTypes.STRING
    },
    last_name:{
        type: DataTypes.STRING
    },
    telephone:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    languages:{
        type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    group_type:{
        type: DataTypes.STRING
    },
    bio:{
        type: DataTypes.STRING
    },
    createdAt :{
        field: 'createdat',
        type: DataTypes.DATE
    },
    updatedAt :{
        field: 'updatedat',
        type: DataTypes.DATE
    },
})

export default GuideDB;