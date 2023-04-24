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

  await app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port ===>>> %s', 4007);
  });
  
}
bootstrap();
