import { setGlobalConnection } from "@thothom/core";
import { Connection } from "@thothom/mongodb";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const connect = async () => {
	const connection = new Connection();

	await connection.load();
	await connection.connect();

	await connection.connect();

	setGlobalConnection<Connection>(connection);

	return connection;
};
