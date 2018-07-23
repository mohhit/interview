var express=require("express");

var routes=express.Router();

routes.use("/",require("../controller/home"));
routes.use("/signup",require("../controller/signup"));
routes.use("/login",require("../controller/login"));
routes.use("/logout",require("../controller/logout"));
routes.use("/profile",backdoor,require("../controller/profile"));



function backdoor (req,res,next){

	if(! req.session.is_user_logged_in){

		res.redirect("/login");

		return;

	}

	next();
}




module.exports=routes;