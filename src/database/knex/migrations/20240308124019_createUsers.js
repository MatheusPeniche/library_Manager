
exports.up = (knex) => {
    return knex.schema.createTable("users", (table) => {
        table.increments('id').primary();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("password").notNullable();
        table.string("fone").notNullable();
        table.timestamp("dateCreate").defaultTo(knex.fn.now());

    })
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("users");
};
