import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { UserRepository } from '../../repository/user.repository';
import { CreateUserCommand } from '../impl/create-user.command';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
	constructor(private readonly userRepository: UserRepository, private readonly publisher: EventPublisher) {}

	async execute(command: CreateUserCommand) {
		const user = this.publisher.mergeObjectContext(await this.userRepository.create(command.userDto));

		user.sendUserCreatedEvent();
		user.commit();
	}
}
