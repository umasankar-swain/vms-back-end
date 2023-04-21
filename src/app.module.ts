import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleTypeModule } from './api/vehicle-type/vehicle-type.module';
import { VehiclModelModule } from './api/vehicl-model/vehicl-model.module';
import { BookingsModule } from './api/bookings/bookings.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/vehicle-booking-system'),
    VehicleTypeModule,
    VehiclModelModule,
    BookingsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
