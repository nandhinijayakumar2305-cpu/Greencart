import mongoose from "mongoose";

// In serverless environments (like Vercel), the module can be reused
// across invocations ("warm" instances) or reloaded fresh ("cold" starts).
// We cache the connection promise so we don't try to reconnect on every
// request, and so requests wait for an in-progress connection instead of
// firing queries before the connection is ready (which causes Mongoose's
// "buffering timed out" error).

let cached = global.mongooseConnection;

if (!cached) {
    cached = global.mongooseConnection = { conn: null, promise: null };
}

mongoose.connection.on('connected', () => console.log("Database Connected"));
mongoose.connection.on('error', (err) => console.error("Database connection error:", err.message));
mongoose.connection.on('disconnected', () => console.log("Database disconnected"));

const connectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const uri = `${process.env.MONGODB_URI}/greencart`;
        cached.promise = mongoose.connect(uri, {
            bufferCommands: false, // fail fast instead of buffering silently
            serverSelectionTimeoutMS: 10000,
        }).then((mongooseInstance) => {
            return mongooseInstance;
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