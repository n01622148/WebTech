import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
    res.send("Welcome to the server");
  });

app.get("/getEdu", (req, res) => {
  const edu = 
  [
    {
      id: 1,
      inst: "Humber Polytechnic",
      program: "Computer Programing",
      startDate: "January 2024",
      endDate: "August 2025",
    
    },
    {
      id: 2,
      inst: "Senica Polytechnic",
      program: " Graphic Design",
      startDate: "September 2025",
      endDate: "August 2026",
    }
  ]
  res.send(JSON.stringify(edu));
});

app.get("/getExp", (req, res) => {
  const exp = 
    [
      {
        id: 1,
        name: "Tim Hortons",
        position: "Cashier",
        startDate: "July 2023",
        endDate: "August 2023",
        desc: "Handled orders and payment",
      },{
        id: 2,
        name: "Star Bucks",
        position: "Barista",
        startDate: "September 2023",
        endDate: "January 2024",
        desc: "Made customized drinks ",
      },{
        id: 3,
        name: "Chipotle",
        position: "Crew Member",
        startDate: "July 2026",
        endDate: "August 2027",
        desc: "Prepared Food before opening",
      },{
        id: 4,
        name: "Google",
        position: "Help Desk",
        startDate: "July 2026",
        endDate: "August 2028",
        desc: "Google cloud account support",
      }
    ]

  res.send(JSON.stringify(exp));
});

app.get("/getOverview", (req, res) => {
  const overview = {
    name:"Walid Karzai",
    phone: "647-555-0304 ",
    email: "walidkarzai@email.com",
    skills: [
      "C",
      "Java",
      "Python",
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "SQL",

    ]
  };
  res.send(JSON.stringify(overview));
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
