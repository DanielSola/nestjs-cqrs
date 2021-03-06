import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class User extends Document {
	@Prop({ required: true })
	name: string;

	@Prop({ required: true })
	surname: string;

	@Prop({ required: true })
	email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
