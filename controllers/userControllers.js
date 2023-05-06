const User = require("../models/userModel");

module.exports.login = async(req,res,next)=>{
	try{
		const{email} = req.body;
		const user = await User.findOne({email})
		if(!user){
			return res.json({msg:"Account need to be Regitered",status:false});			
		}
		return res.json({status:true, user})
	}catch(ex){
		next(ex)
	}
}

module.exports.register = async(req,res,next)=>{
	try{
		const {email} = req.body;
		const photo = "https://ik.imagekit.io/d3kzbpbila/human-bag-shop-business-logo-free-vector_NBwXXw2BF.jpg?updatedAt=1683365343756"
		const user = await User.create({
			email,photo
		})
		// console.log(user)
		return res.json({status:true,user})
	}catch(ex){
		next(ex);
	}
}

module.exports.updateDetails = async(req,res,next) => {
	try{	
		const userId = req.params.id;
		const {newhist} = req.body;
		const history = newhist
		const data = User.findByIdAndUpdate(userId,{
			history
		},{new:true},(err,obj)=>{
			return res.json({status:true,obj})
		})
	}catch(ex){
		next(ex)
	}
}
