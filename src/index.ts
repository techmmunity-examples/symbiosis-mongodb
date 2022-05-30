import type { Connection } from "@thothom/mongodb";
import Fastify from "fastify";
import { config } from "dotenv";

import { create } from "routes/create";
import { update } from "routes/update";
import { list } from "routes/list";
import { del } from "routes/delete";

import "reflect-metadata";
import { complexUpdate } from "routes/complex-update";
import { complexList } from "routes/complex-list";
import { complexDel } from "routes/complex-delete";
import { connect } from "./database";

config();

let connection: Connection = null as any;

process.on("exit", async () => {
	await connection?.close();
});

const server = async () => {
	try {
		const fastify = Fastify({
			logger: true,
		});

		connection = await connect();

		fastify.post("/", create);
		fastify.put("/", update);
		fastify.get("/", list);
		fastify.delete("/", del);

		fastify.put("/complex", complexUpdate);
		fastify.get("/complex", complexList);
		fastify.delete("/complex", complexDel);

		fastify.listen(3000, err => {
			if (err) throw err;
		});
	} catch (err: any) {
		console.error(err);

		await connection?.close();
	}
};

server();
