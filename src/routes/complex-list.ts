import { MoreThan } from "@techmmunity/symbiosis";
import { getExampleRepository } from "entity";

export const complexList = async (_: any, reply: any) => {
	const exampleRepository = getExampleRepository();

	const examples = await exampleRepository.find({
		where: {
			subEntity: {
				foo: MoreThan(1),
			},
		},
	});

	reply.send(examples);
};
