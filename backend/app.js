const express = require('express')
const cors=require('cors')
const jwt=require('jsonwebtoken')
const AuthRouter=require('./router/authRouter')
const authClass = require("./auth");
const TodoRouter=require('./router/todoRouter')
const TodoService=require('./service/todoService')
const knexConfig = require("./knexfile").development;
const knex = require("knex")(knexConfig);
const hashFunction=require('./bcrypt')
const auth = authClass();

const app = express()
const port = 8080

app.use(cors());
app.use(auth.initialize());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const todoService=new TodoService(knex)
const authRouter = new AuthRouter(express, knex, jwt,hashFunction);
const todoRouter=new TodoRouter(express,auth,todoService)

app.use('/',todoRouter.router())
app.use('/',authRouter.router())




app.listen(port, () => console.log(`Example app listening on port ${port}!`))