
exports.up = function(knex) {
    return knex.schema.createTable('todo',(table)=>{
        table.increments()
        table.string('user_id')
        table.string('content')
        table.timestamps(false,true)
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('todo')
  
};
