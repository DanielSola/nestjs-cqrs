<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## CQRS NestJS API
This is an RESTful API created to implement CRQS in nodejs under [Nest](https://github.com/nestjs/nest) Framework 

This API demonstrates a simple CQRS setup using **MongoDB**. It provides the following endpoints for creating and retrieving users:

* POST /users
* GET /users/:id

CQRS stands for Command and Query Responsibility Segregation, a pattern that separates read and update operations for a data store. Implementing CQRS in your application can maximize its performance, scalability, and security. The flexibility created by migrating to CQRS allows a system to better evolve over time and prevents update commands from causing merge conflicts at the domain level.



![CQRS](https://martinfowler.com/bliki/images/cqrs/cqrs.png)

Thanks to CQRS, we can decouple reads and writes logic by emmiting and responding to Commands.

For example, we can dispatch a CreateUserCommand in our controller, and then handle its logic in its own command handler as shown below.

```typescript
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
	constructor(private readonly userRepository: UserRepository, private readonly publisher: EventPublisher) {}

	async execute(command: CreateUserCommand) {
		const user = this.publisher.mergeObjectContext(await this.userRepository.create(command.userDto));

		user.sendUserCreatedEvent();
		user.commit();
	}
}
```
Learn more about NestJS and CQRS [here](https://docs.nestjs.com/recipes/cqrs)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```


## Stay in touch

- Author - [Daniel Solá](https://www.linkedin.com/in/daniel-sola-fraire/)

