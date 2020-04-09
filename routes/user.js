
//---------------------------------------------signup page call------------------------------------------------------
exports.signup = function(req, res){
   message = '';
   if(req.method == "POST"){
      var post  = req.body;
	  var fname= post.first_name;
      var lname= post.last_name;
	  var mob= post.mob_no;
      var name= post.user_name;
      var pass= post.password;
		
	  if(name!==pass)
	  {
		  message = "Password doesn't match";
		  res.render('signup.ejs',{message: message});
	  }
	  else
	  {
		  var sql = "INSERT INTO `register_user`(`username`,`name`,`linkedin`,`password`) VALUES ('" + fname + "','" + lname +  "','" + mob + "','" + pass +"')";
		  var query = db.query(sql, function(err, result) {
		  message = "Succesfully! Your account has been created. Go back to localhost:8080 to sign in";
          res.render('signup.ejs',{message: message});
			});
	  }
   } else {
      res.render('signup');
   }
};
//-----------------------------------------------admin page call------------------------------------------------------
exports.admin = function(req, res){
   var message = '';
   var sess = req.session; 

   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
     if(name=="admin" && pass=="admin")
	 {
		res.redirect('/home/allprofile');
	 }
	} 
	else {
	  message = "Wrong Credentials;"
      res.render('admin.ejs',{message: message});
   }
           
}; 
//-----------------------------------------------login page call------------------------------------------------------
exports.login = function(req, res){
   var message = '';
   var sess = req.session; 

   if(req.method == "POST"){
      var post  = req.body;
      var name= post.user_name;
      var pass= post.password;
     
      var sql="SELECT id, username, name, linkedin FROM `register_user` WHERE `username`='"+name+"' and password = '"+pass+"'";                           
      db.query(sql, function(err, results){      
         if(results.length){
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.redirect('/home/profile');
         }
         else{
            message = 'Wrong Credentials.';
            res.render('index.ejs',{message: message});
         }
                 
      });
   } else {
      res.render('index.ejs',{message: message});
   }
           
};
//--------------------------------render user details after login--------------------------------
exports.profile = function(req, res){

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `register_user` WHERE `id`='"+userId+"'";          
   db.query(sql, function(err, result){  
      res.render('profile.ejs',{data:result});
   });
};
//--------------------------------render all user details after admin login--------------------------------
exports.allprofile = function(req, res){
   var sql="SELECT * FROM `register_user`";          
   db.query(sql, function(err, result){  
      res.render('allprofile.ejs',{data:result});
   });
};