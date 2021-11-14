module.exports = {
	entitiesDir: ["src/entity.ts"],
	namingStrategy: {
		entity: "snake_case",
	},
	suffix: {
		entity: {
			remove: "Entity",
		},
	},
	databaseConfig: {
		url: process.env.MONGODB_URL,
		databaseName: process.env.MONGODB_DATABASE,
	},
}
