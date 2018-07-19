var express=require("express");
var routes=express.Router();
var user=require("../model/user");

routes.get("/",function(req,res){

	var pagedata = {title:"signup page", pagename:"signup/index"};
    
    res.render("layout",pagedata);	
});

routes.post("/",function(req,res){

	user.insert(req.body,function(err,result){

		console.log(result);
		res.redirect("/");
	});

});

module.exports=routes;

