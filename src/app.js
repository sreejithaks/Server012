const express=require("express")
const app=express();
const authRoute= require("./routes/auth");
app.use(express.json());

// // app.get("/",(req,res)=>{res.send("ok")})
// // app.post("/",(req,res)=>{res.send("hello")
// console.log(req.body);})



app.use("/",authRoute);


app.listen(8001,()=>{console.log("server listening at 8000")});
