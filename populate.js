require('dotenv').config();
// const mockdata = require('./mock-data.json');
const mockdata2 = require('./mock-data2.json');
const Job = require('./models/Job');
const connectDB = require('./db/connect');


///  dummy data is present in both user ArifKhan & Demo user
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Job.create(mockdata2);
        console.log('Success !!!');
        process.exit(0);
    }
    catch (error) {
        console.log(error)
        process.exit(1);
    }
}

start();