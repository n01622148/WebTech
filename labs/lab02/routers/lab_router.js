import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to the lab router");
});

router.get("/name", (req, res) => {
  res.send("welcome walid");
});
//extra code 
router.get("/name/:name", (req, res) => {
    res.send(`welcome ${req.params.name}`);
  });


router.get("/greeting", (req, res) => {
  res.send("Hello walid n01622148");
});

router.get("/add/:x/:y", (req,res)=>{
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    res.send(`${x+y}`);
})

router.get("/calculate/:a/:b/:operation", (req, res) => {
  let a = parseFloat(req.params.a);
  let b = parseFloat(req.params.b);
  switch (req.params.operation) {
    case "+":
      res.send(`${a + b}`);
      break;
    case "-":
      res.send(`${a - b}`);
      break;
    case "*":
      res.send(`${a * b}`);
      break;
    case "/":
      res.send(`${a / b}`);
      break;
    default:
      res.send("WRONG OPERATION");
  }
});

export default router;
