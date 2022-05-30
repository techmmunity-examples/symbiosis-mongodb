import { MoreThan } from "@thothom/core";
import { getExampleRepository } from "entity";

export const complexDel = async (_: any, reply: any) => {
	const exampleRepository = getExampleRepository();

	const example = await exampleRepository.delete({
		subEntity: {
			foo: MoreThan(1),
		},
	});

	reply.send(example);
};
