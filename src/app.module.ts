import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
	imports: [
    CqrsModule,
		ConfigModule.forRoot({
			envFilePath: `${process.env.PWD}/${process.env.NODE_ENV}.env`,
		}),
		UsersModule,
		MongooseModule.forRoot(process.env.MONGO_URI),
	],
	controllers: [UsersController],
	providers: [],
})
export class AppModule {}
