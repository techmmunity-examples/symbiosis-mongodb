import {
	Column,
	Entity,
	getGlobalRepository,
	PrimaryGeneratedColumn,
	SubEntity,
} from "@thothom/core";
import { Repository } from "@thothom/mongodb";

@SubEntity()
export class SubExampleEntity {
	@Column()
	public foo: number;
}

@Entity()
export class ExampleEntity {
	@PrimaryGeneratedColumn({
		name: "_id",
	})
	public id: string; // Will be an UUIDv4

	@Column()
	public string: string;

	@Column(String)
	public list: Array<string>;

	@Column(SubExampleEntity)
	public subEntity: SubExampleEntity;
}

export const getExampleRepository = () =>
	getGlobalRepository<Repository<ExampleEntity>>(ExampleEntity);
