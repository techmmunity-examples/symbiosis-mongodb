import { Append } from "@techmmunity/symbiosis";
import { ExampleEntity, getExampleRepository } from "entity";

export const complexUpdate = async (_: any, reply: any) => {
	const exampleRepository = getExampleRepository();

	const example = await exampleRepository.save<ExampleEntity>({
		id: "472cbfbe-d7e4-487e-acd8-b045466a826c",
		list: Append("fooBar"),
	});

	reply.send(example);
};
