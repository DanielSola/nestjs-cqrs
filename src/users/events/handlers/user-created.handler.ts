import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { UserCreatedEvent } from '../impl/user-created.event';

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
	handle(event: UserCreatedEvent) {
		console.log('Reacting to user created event! ', event);
		// What do we want to do when a user is created? Maybe sent a confirmation email, or something like that. This is the place to do that.
	}
}
