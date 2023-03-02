import dotenv from 'dotenv'
import { connect } from 'mongoose'

dotenv.config()

export const connectToMongoDB = async () => {
    await connect(`${process.env.DB_URL }`)
    console.log('App connected do MongoDB')
}