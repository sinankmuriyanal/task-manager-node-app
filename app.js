// console.log('Task Manager App')
const express=require("express");
const app=express();
const tasks=require("./routes/index")
const connectDB= require("./db/connect")
require("dotenv").config();
// const notFound=require("./middlewires/not-found");



const PORT=process.env.port || 3000;


//middlewares
app.use(express.static("./public"))
app.use(express.json());
// app.use(notFound);

//routes
app.get("/hi",(req,res)=>{
    res.send("Task manager app")
});

app.use("/api/v1/tasks",tasks)

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log(`server has started on ${PORT} ...`))


    } catch (error) {
        console.log(error);
    }
}

start();