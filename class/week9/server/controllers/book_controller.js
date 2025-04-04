import Book from "../models/books";
const fetchAllBooks = (req,res) => {
    Book.find().then((results)=>{
        res.json(results);
    });
};


export default {fetchAllBooks};