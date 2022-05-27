

const mongoose=require("mongoose");

const connectDB=(url)=>{
    return mongoose
    .connect(url,{
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
    .then(()=> console.log("connected to db"))
    .catch((err) => console.log(err));
}

module.exports =connectDB;

    

// const connectDB= (url) =>{
//     return mongoose.connect(url,{
//         useNewUrlParser: true,
//         useCreateIndex:true,
//         useFindAndModify:false,
//         useUnifiedTopology:true,
//     })
// }

// module.exports = connectDB;