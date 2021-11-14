require('dotenv').config()
class AuthRouter{
    constructor(express, knex, jwt,hashFunction) {
        this.express = express;
        this.knex=knex
        this.jwt = jwt;
        this.hashFunction=hashFunction
      }
      router() {
        let router = this.express.Router();
    
        router.post("/api/login", this.postLogin.bind(this));
        router.post("/api/signup", this.postSignup.bind(this));
        return router;
      }
    
      async postLogin(req, res) {
        console.log("login attempt");
        console.log(req.body);
        if (req.body.email && req.body.password) {
          let email = req.body.email;
          let password = req.body.password;
          console.log(this.hashFunction)
          let user = await this.knex('account').where({email:email})
          console.log(user[0].password)
          let passwordvalidation=await this.hashFunction.checkPassword(password,user[0].password)


          console.log(user, "User object?");
    
          if (user&& passwordvalidation) {
            var payload = {
              id: user[0].id,
            };
            var token = this.jwt.sign(payload, process.env.jwtSecret);
            res.json({ token:token });
          } else {
            res.sendStatus(401);
          }
        } else {
          res.sendStatus(401);
        }
      }
    
      async postSignup(req, res) {
        console.log("Sign up");
        if (req.body.email && req.body.password&&req.body.username) {
          let email = req.body.email;
          let password = req.body.password;
          let name=req.body.username
          // do this in knex
          let user=await this.knex('account').where({email:email})
          console.log(user)
          if (user.length>0) {
            console.log("User exists");
            res.sendStatus(403);
          }
          else{
            
          let hashedPassword=await this.hashFunction.hashPassword(password)
          let userInfo = {
            email: email,
            password: hashedPassword,
            username: name,
          };
          
          
          console.log(userInfo);
          
          return this.knex('account').insert(userInfo).then(()=>{
            res.send("DONE");

          })
        }
    
          // uncomment to log user in as they sign up user
          // let payload = {
          //   id: users.length,
          // };
          // let token = jwt.sign(payload, config.jwtSecret);
          // res.json({ token });
        } else {
          res.sendStatus(402);
        }
      }
}

module.exports=AuthRouter