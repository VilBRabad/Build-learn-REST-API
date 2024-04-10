import dotenv from "dotenv";
import express from "express";
import product_routes from "./routes/products.routes.js"
import { connectDB } from "./db/connect.db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const app = express();

app.get("/", (req, res)=>{
    res.send("<h1>Home Page</h1>")
})

//middleware or set router
app.use("/api/v1/products", product_routes);


const start = async ()=>{
    try {
        await connectDB(MONGODB_URI);
        app.listen(PORT, ()=>{
            console.log("Server running on POST: ", PORT);
        })
    } catch (error) {
        console.log("Not connected, ERROR", error);
    }
}

start();