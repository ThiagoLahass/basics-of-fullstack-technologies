// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config = {
	client: "mysql2",
	connection: {
		database: "mydatabase",
		user: "root",
		password: "senha",
	},
};

export default config;
