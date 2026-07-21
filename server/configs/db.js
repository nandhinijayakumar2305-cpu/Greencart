import mongoose from "mongoose";

// Cache the connection across serverless invocations so warm instances
// reuse it, and concurrent requests on a cold instance wait for the
// same in-progress connection instead of each starting a new one.
let cached = global.mongooseConnection;

if (!cached) {
    cached = global.mongooseConnection = { conn: null, promise: null };
}

mongoose.connection.on('connected', () => console.log("Database Connected"));
mongoose.connection.on('error', (err) => console.error("Database connection error:", err.message));

const connectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const uri = `${process.env.MONGODB_URI}/greencart`;
        cached.promise = mongoose.connect(uri, {
            serverSelectionTimeoutMS: 15000,
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }

    return cached.conn;
};

export default connectDB;