import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User as UserDocument } from '../entities/user.entity';
import { Model } from 'mongoose';
import { CreateUserDTO } from '../dto/create-user.dto';
import { User } from '../models/user.model';

@Injectable()
export class UserRepository {
	constructor(@InjectModel(UserDocument.name) private userModel: Model<UserDocument>) {}

	async findAll(): Promise<UserDocument[]> {
		return this.userModel.find().exec();
	}

	async create(userDTO: CreateUserDTO): Promise<User> {
		const doc = await this.userModel.create(userDTO);
		const { name, surname, email } = doc;

		return new User(name, surname, email);
	}

	async find(id: string): Promise<UserDocument> {
		return this.userModel.findById(id);
	}
}
