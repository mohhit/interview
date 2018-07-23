var connection=require("../config/connect");
var mongo=require("mongodb");

module.exports.insert=function(obj,cb){

	connection.init(function(err,client){

		var db=client.db("data");

		db.collection("user").insert(obj,cb);
	});
	
 		
}

module.exports.findwhere=function(obj,cb){

	connection.init(function(err,client){

		var db=client.db("data");

		db.collection("user").find(obj).toArray(cb);
	});
}

module.exports.update=function(where,obj,cb){

	connection.init(function(err,client){

		var db=client.db("data");
		
		db.collection("user").update(where,{$set:obj},cb);

		
	});
}


