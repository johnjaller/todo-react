class todoService{
    constructor(knex){
        this.knex=knex
    }
    loadTodo(userId)
    {
    return this.knex('todo').select('id',"content").where({user_id:userId}).orderBy('id')
    }
    addTodo(userId,newContent){
        return this.knex('todo').insert({content:newContent,user_id:userId})
    }
    deleteTodo(index){
        return this.knex('todo').delete().where({id:index})
    }
    putTodo(index,newContent){
        return this.knex('todo').update({content:newContent}).where({id:index})
    }
}

module.exports=todoService