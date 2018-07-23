var express=require("express");

var routes=express.Router();

var user=require("../model/user");

routes.get("/",function(req,res){
	var pagedata={title:"login", pagename:"login/index",msg:req.flash("msg") };

	res.render("layout", pagedata);
});

routes.post("/",function(req,res){

	// console.log(req.body);

	var u = req.body.username;
	var p = req.body.password;

	user.findwhere({username:u},function(err,result){

		if(result.length==1){
           
           if(result[0].password==p)
           
           {
           	req.session.is_user_logged_in=true;
           	req.session.uid=result[0]._id;
           	req.session.fullname=result[0].fullname;
           	res.redirect("/");
           }
           else{
           	req.flash("msg","password incorrect");
			res.redirect("/login");
           }

		}
		else{
			req.flash("msg","username and password incorrect");
			res.redirect("/login");
		}

	})
});

module.exports=routes;