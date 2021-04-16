import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

async function connect() {
    if (global.connection && global.connection.state !== 'disconnected') {
      return global.connection
    }
 
    const connection = await mysql.createConnection({
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      password: process.env.DATABASE_PASS,
      port: 3306,
      user: process.env.DATABASE_USER
    })

    global.connection = connection
    return connection;
}

export default connect
