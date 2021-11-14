import { getExampleRepository } from "entity";

export const del = async (_: any, reply: any) => {
	const exampleRepository = getExampleRepository();

	const example = await exampleRepository.delete({
		id: "472cbfbe-d7e4-487e-acd8-b045466a826c",
	});

	reply.send(example);
};
