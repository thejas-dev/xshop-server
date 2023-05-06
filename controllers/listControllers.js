const List = require("../models/listModel");


module.exports.create = async(req,res,next)=>{
	try{
		const {name,data} = req.body;
		console.log(name);
		const result = await List.create({
			name,data
		})
		return res.json({status:true,result})
	}catch(ex){
		next(ex);
	}
}

module.exports.fetch = async(req,res,next) => {
	try{
		const {name} = req.body
		const data = await List.findOne({name});
		if(data){
			return res.json({status:true, data})
		}
	}catch(ex){
		next(ex)
	}
}

module.exports.update = async(req,res,next) => {
	try{
		const {data} = req.body;
		const listId = req.params.id
		const result = List.findByIdAndUpdate(listId,{
			data
		},{new:true},(err,obj)=>{
			return res.json({status:true,obj})
		})
	}catch(ex){
		next(ex)
	}
}