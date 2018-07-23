var express = require ("express");
var app = express();

var bodyparser = require ("body-parser");
var cookie = require ("cookie-parser");
var session = require ("express-session");
var flash = require ("express-flash");
var fileupload = require ("express-fileupload");
var cache = require ("nocache");

app.set("view engine","ejs");

app.use(bodyparser());
app.use(cookie());
app.use(session({secret:"secret"}));
app.use(flash());
app.use(fileupload());
app.use(cache());

app.use(express.static(__dirname+'/public'));

app.use(function(req,res,next){
	res.locals.session=req.session;
	next();
	
});

app.use(require('./config/routes'));

app.listen(process.env.PORT|| 1994, function(){
	console.log("server start");
});