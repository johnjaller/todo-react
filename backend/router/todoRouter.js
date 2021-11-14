class todoRouter{
    constructor(express,auth,todoService) {
        this.express=express
        this.auth=auth
        this.todoService=todoService
    }
    router()
    {
        let router = this.express.Router();
    
        router.get("/api/todo",this.auth.authenticate(), this.getTodo.bind(this));
        router.post("/api/todo",this.auth.authenticate(), this.postTodo.bind(this));
        router.put("/api/todo",this.auth.authenticate(), this.putTodo.bind(this));
        router.delete("/api/todo",this.auth.authenticate(), this.deleteTodo.bind(this));
        return router;
    }
getTodo(req,res){
    console.log(req.user.id)
    return this.todoService.loadTodo(req.user.id).then((data)=>{
        console.log(data)
        res.json(data)
    }).catch((e)=>console.log(e))

}
postTodo(req,res){

    return this.todoService.addTodo(req.user.id,req.body.content).then(()=>{
        return this.todoService.loadTodo(req.user.id).then((data)=>{
            console.log(data)
            res.json(data)
        })
    }).catch((e)=>console.log(e))

}
putTodo(req,res){

    return this.todoService.putTodo(req.body.id,req.body.content).then(()=>{
        return this.todoService.loadTodo(req.user.id).then((data)=>{
            console.log(data)
            res.json(data)
        })
    }).catch((e)=>console.log(e))

}
deleteTodo(req,res){
    console.log('delete')
    console.log(req.body)
    return this.todoService.deleteTodo(req.body.id).then(()=>{
        return this.todoService.loadTodo(req.user.id).then((data)=>{
            console.log(data)
            res.json(data)
        })
    }).catch((e)=>console.log(e))

}

}
module.exports=todoRouter