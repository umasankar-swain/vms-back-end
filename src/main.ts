import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('vehicle-booking-system-backend API')
    .setDescription('This is a Task based project')
    .setVersion('1.0')
    .addTag('#Vehicles,#Users,#Booking')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('vms', app, document);

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

}
bootstrap();
