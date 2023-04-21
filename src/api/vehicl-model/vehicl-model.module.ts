import { Module, OnModuleInit } from '@nestjs/common';
import { VehicleModelService } from './vehicl-model.service';
import { VehiclModelController } from './vehicl-model.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VehiclModel, VehiclModelSchema } from './entities/vehicl-model.entity';
import { VehicleType, VehicleTypeSchema } from '../vehicle-type/entities/vehicle-type.entity';
import { VehicleTypeModule } from '../vehicle-type/vehicle-type.module';
import { VehicleTypeService } from '../vehicle-type/vehicle-type.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VehiclModel.name, schema: VehiclModelSchema },
      { name: VehicleType.name, schema: VehicleTypeSchema },
    ]),
    VehicleTypeModule,
  ],
  controllers: [VehiclModelController],
  providers: [VehicleModelService,VehicleTypeService],
})
export class VehiclModelModule implements OnModuleInit {
  constructor(private readonly vehicleModelService: VehicleModelService) { }

  async onModuleInit() {
    await this.vehicleModelService.onModuleInit();
  }
}
