const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middleware");

const app = express();

const notes = [];
const users=[];

app.use(express.json());


//signup
app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const userExist=users.find(user=> user.username===username);

    if(userExist){
        res.status(403).json({
             message:"user with this user name already exists"
        })
        return;
    }

    users.push({
        username:username,
        password:password
    })

    res.json({
        message: "You have signed up"
    })
        
})

//signin
app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    
    const userExist=users.find(user=>user.username===username && user.password===password);

    if(!userExist){
        res.status(403).json({
            message:"Invalid credentials"
        })
        return;
    }

    const token=jwt.sign({
        username:username,
    },"Pranav123");

    res.json({
        token:token
    })


})

// GET - get all my notes -- AUTHENTICATED ENDPOINT
app.get("/notes",authMiddleware, (req, res) => {
    const username=req.username;

    const userNotes=notes.filter(note=> note.username===username);
    res.json({
        notes:userNotes
    });
});

// POST - Create a note -- AUTHENTICATED ENDPOINT
app.post("/notes",authMiddleware, (req, res) => {

    const username=req.username;
    const note = req.body.note;

    if (!note) {
        return res.status(400).json({
            message: "Note is required"
        });
    }

    notes.push({note,username});

    res.json({
        message: "Done"
    });
});

// Serve frontend
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname,"signup.html"));
})

app.get("/signin",(req,res)=>{
    res.sendFile(path.join(__dirname,"signin.html"));
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});