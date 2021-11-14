import { setGlobalConnection } from "@techmmunity/symbiosis";
import { Connection } from "@techmmunity/symbiosis-mongodb";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const connect = async () => {
	const connection = new Connection();

	await connection.load();
	await connection.connect();

	await connection.connect();

	setGlobalConnection<Connection>(connection);

	return connection;
};
