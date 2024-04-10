import express from "express";

const router = express.Router();

import {getAllProductList, getAllProcustListTesting} from "../controllers/products.controllers.js"

router.route("/").get(getAllProductList);
router.route("/testing").get(getAllProcustListTesting);

export default router;