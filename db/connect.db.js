import mongoose from "mongoose";

const connectDB = (URI)=>{
    // console.log("Connect db");
    return mongoose.connect(URI);
};

export {connectDB};
