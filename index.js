const express = require('express');
const cors= require("cors");
const app=express();
app.use(express.json());
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const path=require("path");
const dbPath=path.join(__dirname,"usersdb.db");
let db=null;
// const port = process.env.PORT || 4040;
// module.exports=app;
app.use(cors()); 
const initServerandDb=async ()=>{
    try{
            
            db= await open({filename:dbPath,driver:sqlite3.Database})
            app.listen(4040,()=>{
                console.log("server running at 4040")
            })
    }
    catch(e){
        console.log(`DB Error ${e.message}`)
        process.exit(1);
    }
}
initServerandDb();

app.post("/login/",(req,res)=>{

    const {userEmail,userPassword}=req.body;
    console.log(userEmail,userPassword)
    // res.send(req.body)
})

app.post("/signup/",(req,res)=>{
    console.log(req.body)
})