import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepository } from '../../repository/user.repository';
import { GetUserQuery } from '../impl';

@QueryHandler(GetUserQuery)
export class GetUserHandler implements IQueryHandler<GetUserQuery> {
	constructor(private readonly repository: UserRepository) {}

	async execute(query: GetUserQuery) {
		return this.repository.find(query.id);
	}
}
