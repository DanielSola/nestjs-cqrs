import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UserDTO {
	@IsNotEmpty()
	@IsString()
	id: string;

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
