import { getExampleRepository } from "entity";

export const list = async (_: any, reply: any) => {
	const exampleRepository = getExampleRepository();

	const examples = await exampleRepository.find({});

	reply.send(examples);
};
