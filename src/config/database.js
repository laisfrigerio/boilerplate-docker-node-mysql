import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const database = mysql.createPool({
  connectionLimit: 5,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_PASS,
  port: 3306,
  user: process.env.DATABASE_USER
})

export default database
