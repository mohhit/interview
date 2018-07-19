var express=require("express");

var routes=express.Router();

var user=require("../model/user")

var mongo=require("mongodb");

routes.get("/",function(req,res){

	user.findwhere({_id:mongo.ObjectId(req.session.uid)},function(err,result){
        
        var pagedata={title:"profile",pagename:"profile/index", userdata:result[0]};
         
         res.render("layout",pagedata);

	});
});

module.exports=routes;