const auth = (req, res, next) => {
    if(req.query.username === "name"){
        next();
    } else {
        res.send("ACCESS DENIED")
        // res.redirect("http://localhost:8000/")
        // res.json({message : "Incorrect Account"})
    }
};

export default auth;