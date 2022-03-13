import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDTO {
	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsString()
	surname: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;
}
