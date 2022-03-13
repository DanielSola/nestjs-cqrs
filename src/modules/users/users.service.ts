import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserDTO } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
	constructor(@InjectModel(User.name) private user: Model<User>) {}

	async create(data: CreateUserDTO) {
		const user = new this.user(data);
		await user.save();

		return user;
	}

	async confirmEmail({ id }: User) {
		return await this.user.findByIdAndUpdate(id, { $set: { emailVerified: true } });
	}

	async findBy(field: keyof User, value: string): Promise<UserDTO> {
		return await this.user.findOne({ [field]: value });
	}
}
