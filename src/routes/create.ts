import { ExampleEntity, getExampleRepository } from "entity";

export const create = async (_: any, reply: any) => {
	const exampleRepository = getExampleRepository();

	const example = await exampleRepository.save<ExampleEntity>({
		id: "472cbfbe-d7e4-487e-acd8-b045466a826c", // Hardcoded for the example
		string: "foo",
		list: ["foo", "bar"],
		subEntity: {
			foo: 1,
		},
	});

	reply.send(example);
};
