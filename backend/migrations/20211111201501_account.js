
exports.up = function(knex) {
    return knex.schema.createTable('account',(table)=>{
        table.increments()
        table.string('email')
        table.string('username')
        table.string('password')
        table.timestamps(false,true)
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('account')
  
};
