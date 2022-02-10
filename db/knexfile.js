// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
console.log("PASSWORD", process.env.PASSWORD);
module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "knexjs_init",
      user: "postgres",
      password: process.env.PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
