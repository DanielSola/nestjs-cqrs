import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  console.log(process.env.PORT);
  const { PORT } = process.env;
  await app.listen(PORT).then(() => console.log(`App listening on port ${PORT} 🚀`));
}

bootstrap();
