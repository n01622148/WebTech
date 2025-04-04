import express, { response } from "express";
import Book from "../models/books.js" //db.books
import {fetchAllBooks} from "../controllers/book_controller.js"

const router = express.Router();

router.get("/fetch-all", (req,res)=>{
    Book.find().then((results)=>{
        res.json(results);
    });
});

router.get("/item/:id", (req,res)=>{
    let filter = {}
    if (req.query.title){
        filter.title = "The Great Adventure"
    }
    Book.find(id.params.id).then((results)=>{
        res.json(results);
    });
});

router.get("/fetch-query", (req,res)=>{
    let filter = {}
    if (req.query.title){
        filter.title = "The Great Adventure"
    }
    Book.find(filter).then((results)=>{
        res.json(results);
    });
});



router.post("/add-book",(req,res)=>{
    //1 - fetch information from client
    const {title, author, pages} = req.body;
    //2 - write it down
    const newBook = new Book({
        title,
        author,
        pages,
    });
    //3 - save it
    newBook.save().then((results)=>{res.json(results)});
});

router.put("/update/:id", (req,res)=>{
    Book.findByIdAndUpdate(
        req.params.id, 
        { $push: {review: 
            {name:"bob", review:""}
        }
    })
    .then((results)=>{
        res.json(results);
    });
});


router.delete("/del/:id", (req,res)=>{
    Book.findByIdAndDelete(req.params.id);
})




export default router;

//URL: http//localhost:800/book/fetch-all