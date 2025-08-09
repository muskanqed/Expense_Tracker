const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {});
        console.log("MongoDB connected");
    } catch (err) {
        console.log("Error in connecting to DB", err);
        process.exit(1);
    }
};

module.exports = connectDB;
