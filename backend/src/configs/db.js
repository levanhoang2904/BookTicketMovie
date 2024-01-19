import mongoose from 'mongoose';

const connect = async () => {
        try {
            await mongoose.connect('mongodb://127.0.0.1/Movie');
            console.log("connect successfully")
        } catch (error) {
            console.log("connect fail")
        }
}

module.exports = {connect}