const {Pool}=require("pg");
require('dotenv').config()
 
const pool = new Pool({
  // user: 'postgres',
  // host: 'localhost',
  // database: 'restaurant',
  // password: 'Ajith@2003',
  // port: 5432,
  connectionString: process.env.POSTGRES_URL
}) 
module.exports={
  query:(text,params)=>pool.query(text,params),
};


 