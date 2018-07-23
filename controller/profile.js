var express=require("express");

var routes=express.Router();

var user=require("../model/user")

var mongo=require("mongodb");

var upload=require("express-fileupload");

var path = require("path");

routes.get("/",function(req,res){

	user.findwhere({_id:mongo.ObjectId(req.session.uid)},function(err,result){
				console.log(result)        
        var pagedata={title:"profile",pagename:"profile/index", userdata:result[0]};
         
         res.render("layout",pagedata);

	});
});


routes.get("/update",function(req,res){

	user.findwhere({_id:mongo.ObjectId(req.session.uid)},function(err,result){
        
        var pagedata={title:"profile",pagename:"profile/update", userdata:result[0]};
         
         res.render("layout",pagedata);

	});
});


routes.post("/update",function(req,res){

	user.update({_id:mongo.ObjectId(req.session.uid)},req.body,function(err,result){
        
        res.redirect("/profile");
	});
});

routes.get("/upload",function(req,res){

	user.findwhere({_id:mongo.ObjectId(req.session.uid)},function(err,result){
        
        var pagedata={title:"profile",pagename:"profile/upload", userdata:result[0]};
         
         res.render("layout",pagedata);

	});
});

routes.post("/upload",function(req,res){

	var file=req.files.uploadfile;
	 
	console.log(req.files.uploadfile);

	var filepath=path.resolve("public/upload/"+file.name);

	file.mv(filepath);

	user.update({_id:mongo.ObjectId(req.session.uid)},{image : file.name},function(err,result){
        
        res.redirect("/profile")
	});


});


module.exports=routes;