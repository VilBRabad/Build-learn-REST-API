import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./db/connect.db.js";
import { Product } from "./models/product.model.js";
import fs from "fs";

const getJsonData = () => {
    try {
        const data = fs.readFileSync("./Products.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        throw error;
    }
};

const URI = process.env.MONGODB_URI;

const start = async () => {
    try {
        await connectDB(URI);
        const jsonData = getJsonData();
        await Product.deleteMany();
        const res = await Product.create(jsonData);
        console.log(res);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
};

start();
