import mongoose from "mongoose"

const connectDB = async (url) => {
    mongoose.set('strictQuery', true) //useful for working with search functionality

    mongoose.connect(url)
        .then(() => console.log('MongoDB Connected'))
        .catch((err) => console.log(err))
}

export default connectDB