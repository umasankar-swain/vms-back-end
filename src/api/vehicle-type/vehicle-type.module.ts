import { Module, OnModuleInit } from '@nestjs/common';
import { VehicleTypeService } from './vehicle-type.service';
import { VehicleTypeController } from './vehicle-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleType, VehicleTypeSchema } from './entities/vehicle-type.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: VehicleType.name, schema: VehicleTypeSchema }])],
  controllers: [VehicleTypeController],
  providers: [VehicleTypeService]
})

export class VehicleTypeModule implements OnModuleInit {
  constructor(private readonly vehicleTypeService:VehicleTypeService ) {}

  async onModuleInit() {
    await this.vehicleTypeService.createDefaultVehicleType();
  }
}


