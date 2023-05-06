const mongoose = require('mongoose')

const userSchema =  new mongoose.Schema({
	name:{
		type: String,
		required: true,
		unique:true,
		max:50,
	},
	data:{
		type:Array,
		default:[]
	}
	},
	{
		timestamps:true,
	}
);



module.exports = mongoose.model("Lists",userSchema)