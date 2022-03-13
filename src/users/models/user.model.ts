import { AggregateRoot } from '@nestjs/cqrs';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UserCreatedEvent } from '../events/impl/user-created.event';
import { UserRepository } from '../repository/user.repository';

export class User extends AggregateRoot {
	constructor(private name: string, private surname: string, private email: string) {
		super();
	}

	sendUserCreatedEvent() {
		const { name, surname, email } = this;

		this.apply(new UserCreatedEvent(name, surname, email));
	}
}
