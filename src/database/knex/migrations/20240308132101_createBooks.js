
exports.up = (knex) => {
    return knex.schema.createTable("books", (table) => {
        table.increments('id').primary();
        table.string("title").notNullable();
        table.string("author").notNullable();
        table.string("numPag").notNullable();
        table.string("category").notNullable();
        table.boolean("available").defaultTo("false");
    })
};

exports.down = (knex) => {
    return knex.schema.dropTableIfExists("books")
};
