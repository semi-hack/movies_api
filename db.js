const mongoose = require('mongoose');
// const URI = "mongodb+srv://admin:admin@cluster0.zz5iq.mongodb.net/test?retryWrites=true&w=majority"

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}

const connectDB = async () => {
    await mongoose.connect(process.env.mongoURI, options);
    console.log('DB connected...!')
}

module.exports = connectDB;