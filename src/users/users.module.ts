import { Module } from '@nestjs/common';
import { User, UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UserRepository } from './repository/user.repository';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/handlers';
import { EventsHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';

@Module({
	imports: [CqrsModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
	providers: [UserRepository, ...CommandHandlers, ...EventsHandlers, ...QueryHandlers],
	exports: [],
	controllers: [UsersController],
})
export class UsersModule {}
