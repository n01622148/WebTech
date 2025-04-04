import express from "express";
import User from "../models/user.js"
//npm i bcryptjs
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/register", (req, res) => {
    //1 parse incoming information
    const {email, password} = req.body;

    //hash information
    bcrypt.hash(password, 10)
        .then((hashedPassword) => {
            //do rest of operation
            let newUser = new User({
                email, //same as email: email,
                password: hashedPassword,
            });
            //place code here
            
            newUser.save()
            .then(() => {
            res.json({message:`Account created`})
            })
            .catch((err) => {
                console.log(err);
                return res.json({message: `Email in use`})
            })
        })
        .catch((err) => {
            console.log(err);
            return res.json({message: `could not create account`})
        })


});

router.post("/login", (req, res) => {
    const {email, password} = req.body;
    //add code to validate email and password

    //use false to not send back
    User.findOne({email: email}) // result: {} or  result: {userAccount}    , {password: false}
    .then((userAccount)=>{
        if(!userAccount){
            return res.json({message: "Account not found"})
        }
        // compare passwords
        bcrypt
        .compare(password, userAccount.password)
        .then((isMatched)=>{
            if(!isMatched){
                return res.status(400).json({message: "Invalid password"});
            }
            return res.json({message: "login successful"});
        })// if it runs succesfully -> true or false
        .catch((err)=>{
            console.log(err);
            return res.status(500).json({message: "could not complete request"})
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({message: "could not complete request"})
    })

});

router.get("/search", (req, res) => {
    
});

router.get("/profile/:user_id", (req, res) => {
    
});

//assignment
// router.get("/fetch-all", (req, res) => {
//     //
//     let finters = {}
    
//     //finter by search term
//     if(req.query.title){
//         filters.title = req.query.title
//     }    
    
//     recipe.find({/* use to search */}, {/* dont include in search*/})
//     recipe.find({/* filters */}, {/* dont include in search*/})
//             //_id is mongodb id 
//     recipe.findById()
//     User.findByIdAndUpdate( {id.update}, {updated key: value})
//     User.findByIdAndDelete({id.update})
// });

export default router;