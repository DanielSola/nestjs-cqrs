import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/impl/create-user.command';
import { GetUserQuery } from './queries/impl';

@Controller('users')
export class UsersController {
	constructor(
		private readonly commandBus: CommandBus,
		private readonly queryBus: QueryBus
	) {}

	@Post()
	async createUser(@Body() userDto: CreateUserDTO) {
		return this.commandBus.execute(new CreateUserCommand(userDto));
	}

	@Get(':id')
	async getUser(@Param('id') id: string) {
		return this.queryBus.execute(new GetUserQuery(id));
	}
}
