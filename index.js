const mongoose = require('mongoose');
const userRoutes = require("./routes/userRoutes")
const listRoutes = require('./routes/listRoutes')
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());
require('dotenv').config();

app.use('/api/auth',userRoutes);
app.use('/api/list',listRoutes);

mongoose.connect(process.env.MONGO_ID,{
	useNewUrlParser:true,
	useUnifiedTopology:true,
}).then(()=>{
	console.log("db connected successfully")
}).catch((err)=>{
	console.log(err);
});

app.get('/',(req,res)=>{
	res.send("Hello World");
})


app.listen(3333,()=>{
	console.log("Server started on port 3333");
})