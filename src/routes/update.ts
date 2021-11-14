import { ExampleEntity, getExampleRepository } from "entity";

export const update = async (_: any, reply: any) => {
	const exampleRepository = getExampleRepository();

	const example = await exampleRepository.save<ExampleEntity>({
		id: "472cbfbe-d7e4-487e-acd8-b045466a826c",
		string: "bar",
		list: ["fooBar"],
		subEntity: {
			foo: 2,
		},
	});

	reply.send(example);
};
