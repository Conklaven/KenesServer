import {Sequelize} from 'sequelize';
import db from '../config/Database.js';

const {DataTypes} = Sequelize;

const Upload = db.define('ourrestaurants', { 
    restaurant_name:{
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    city:{
        type: DataTypes.STRING
    },
    recommended_by:{
        type: DataTypes.STRING
    },
    cuisine:{
        type: DataTypes.STRING
    },
    website:{
        type: DataTypes.STRING
    },
    social:{
        type: DataTypes.STRING
    },
    photo:{
        type: DataTypes.STRING
    },
    kosher:{
        type: DataTypes.STRING
    },
    // createdAt : false,
    // updatedAt: false
    // if you dont want createat and updatedat
    // createdAt : False
    createdAt :{
        field: 'createdat',
        type: DataTypes.DATE
    },
    updatedAt :{
        field: 'updatedat',
        type: DataTypes.DATE
    },
})

export default Upload;