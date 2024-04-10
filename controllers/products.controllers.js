import { Product } from "../models/product.model.js";

const getAllProductList = async(req, res)=>{
    // console.log(req.query);

    const {company, name, featured, sort, select} = req.query;

    const queryData = {};
    if(company){
        queryData.company = company;
    }
    if(name){
        queryData.name = {$regex: name, $options: "i"};
    }
    if(featured){
        queryData.featured = featured;
    }

    let apiData = Product.find(queryData);
    if(sort){
        // let sortFix = sort.replace(",", " ");
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }


    //Pagination:
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page - 1)*limit;

    const resData = await apiData.skip(skip).limit(limit);
    res.status(200).json(resData);
}

const getAllProcustListTesting = async(req, res)=>{
    res.status(200).json({msg: "Get all product list for testing"});
}


export {getAllProductList, getAllProcustListTesting};