import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VehicleType, VehicleTypeDocument } from '../vehicle-type/entities/vehicle-type.entity';
import { CreateVehiclModelDto } from './dto/create-vehicl-model.dto';
import { VehiclModel, VehiclModelDocument } from './entities/vehicl-model.entity';

@Injectable()
export class VehicleModelService implements OnModuleInit {
  constructor(
    @InjectModel(VehiclModel.name)
    private readonly vehicleModelModel: Model<VehiclModelDocument>,
    @InjectModel(VehicleType.name) // Change this line
    private readonly vehicleTypeModel: Model<VehicleTypeDocument>,

  ) { }

  async onModuleInit() {
    const carType = await this.getVehicleTypeByCategory('cars');
    const bikeType = await this.getVehicleTypeByCategory('bikes');

    const carModels = [
      { modelName: 'Volkswagen Golf', vehicleTypeCategory: carType.category, vehicleTypeId: carType.id },
      { modelName: 'Honda Fit', vehicleTypeCategory: carType.category, vehicleTypeId: carType.id },
      { modelName: 'Toyota RAV4', vehicleTypeCategory: carType.category, vehicleTypeId: carType.id },
      { modelName: 'Ford Explorer', vehicleTypeCategory: carType.category, vehicleTypeId: carType.id },
      { modelName: 'Honda Civic', vehicleTypeCategory: carType.category, vehicleTypeId: carType.id },
      { modelName: 'Toyota Camry', vehicleTypeCategory: carType.category, vehicleTypeId: carType.id },
    ];

    const bikeModels = [
      { modelName: 'Harley-Davidson Softail', vehicleTypeCategory: bikeType.category, vehicleTypeId: bikeType.id },
      { modelName: 'Yamaha V-Star', vehicleTypeCategory: bikeType.category, vehicleTypeId: bikeType.id },
      { modelName: 'Suzuki GSX-R1000', vehicleTypeCategory: bikeType.category, vehicleTypeId: bikeType.id },
      { modelName: 'Honda CBR1000RR-R', vehicleTypeCategory: bikeType.category, vehicleTypeId: bikeType.id },
    ];

    const vehicleModels = [...carModels, ...bikeModels];

    for (const model of vehicleModels) {
      // Check if the model already exists in the collection
      const existingModel = await this.vehicleModelModel
        .findOne({ vehicleTypeId: model.vehicleTypeId, modelName: model.modelName })
        .exec();

      if (!existingModel) {
        const newVehicleModel = new this.vehicleModelModel({
          vehicleTypeCategory: model.vehicleTypeCategory,
          vehicleTypeId: model.vehicleTypeId,
          modelName: model.modelName,
          isActive: true,
          isDelete: false,
        });

        await newVehicleModel.save();
      }
    }
  }

  async findAll(): Promise<VehiclModel[]> {
    return this.vehicleModelModel.find().exec();
  }

  async findByVehicleTypeCategory(vehicleTypeCategory: string): Promise<any> {
    const vehicleType = await this.vehicleTypeModel.findOne({ category: vehicleTypeCategory }).exec();
    if (!vehicleType) {
      throw new NotFoundException('Vehicle type not found');
    }
    const vehicleModels = await this.vehicleModelModel.find({ vehicleTypeId: vehicleType._id }).exec();
    return {
      vehicleTypeCategory: vehicleType.category,
      vehicleModels: vehicleModels,
    };
  }


  async getVehicleTypeByCategory(category: string): Promise<{ id: string, category: string }> {
    const vehicleType = await this.vehicleTypeModel.findOne({ category }).exec();
    return { id: vehicleType._id, category: vehicleType.category };
  }


}