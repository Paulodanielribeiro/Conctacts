import dotenv from 'dotenv'
import { connection } from 'mongoose'
import { app } from './app'

dotenv.config()

const PORT = process.env.PORT || 3000
const server = app.listen(PORT,()=>
console.log(`App running on port ${PORT}`)
)

process.on('SIGINT',async ()=>{
    server.close()
    await connection.close()
    console.log('App server and connection to MongoDB clsosed')
})