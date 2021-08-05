// exports.up = knex => {
//     return knex.schema.createTable("clips", table => {
//       table.increments("id").primary();
//       table.string("date").notNullable();
//       table.string("agent").notNullable();
//       table.string("video").notNullable();
//       table.string("description").notNullable();
//       table.timestamp("updated_at").defaultTo(knex.fn.now());
//     });
//   };

//   exports.down = knex => {
//     return knex.schema.dropTable("clips");
//   };