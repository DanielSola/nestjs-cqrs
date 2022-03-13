export class UserCreatedEvent {
  constructor(
    public readonly name: string,
    public readonly surname: string,
    public readonly email: string,
  ) {}
}