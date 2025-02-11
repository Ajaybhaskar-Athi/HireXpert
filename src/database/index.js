const { default: mongoose } = require("mongoose")

const connectToDB=async()=>{
    
    mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Job Portal (HireXpert) Database connection is Successful ! "))
    .catch((error)=>console.log(error));
    
}

export default connectToDB;