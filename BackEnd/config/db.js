const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB Connected`);
    } catch (error) {
        console.error(` MongoDB Connection Error: ${error.message}`);
        process.exit(1); // Stop the server if database connection fails
    }
};

module.exports = connectDB;
