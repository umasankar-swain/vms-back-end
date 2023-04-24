import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto';
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto';
import { VehicleType, VehicleTypeDocument } from './entities/vehicle-type.entity';

@Injectable()
export class VehicleTypeService {
  constructor(
    @InjectModel(VehicleType.name) private readonly vehicleTypeModel: Model<VehicleTypeDocument>,
  ) { }

  async create(vehicleType: VehicleType): Promise<VehicleTypeDocument> {
    const createdVehicleType = new this.vehicleTypeModel(vehicleType);
    return createdVehicleType.save();
  }

  async findAll(): Promise<VehicleTypeDocument[]> {
    return this.vehicleTypeModel.find().exec();
  }

  async findCarTypes(): Promise<string[]> {
    const vehicleTypes = await this.vehicleTypeModel.findOne().exec();
    if (!vehicleTypes) {
      throw new NotFoundException('Vehicle types not found');
    }
    return vehicleTypes.carTypes;
  }

  async findBikeTypes(): Promise<string[]> {
    const vehicleTypes = await this.vehicleTypeModel.findOne({ category: 'bikes' }).exec();
    if (!vehicleTypes) { 
      throw new NotFoundException('Vehicle types not found');
    }
    return vehicleTypes.bikeTypes;
  }
  
  
  





  async createDefaultVehicleType(): Promise<void> {
    const existingCarVehicleType = await this.vehicleTypeModel.findOne({ category: 'cars' });
    if (!existingCarVehicleType) {
      const carVehicleType: VehicleType = {
        category: 'cars',
        carTypes: ['hatchback', 'suv', 'sedan'],
        isActive: true,
        isDelete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await this.vehicleTypeModel.create(carVehicleType);
    }

    const existingBikeVehicleType = await this.vehicleTypeModel.findOne({ category: 'bikes' });
    if (!existingBikeVehicleType) {
      const bikeVehicleType: VehicleType = {
        category: 'bikes',
        bikeTypes: ['cruiser', 'sports'],
        isActive: true,
        isDelete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      await this.vehicleTypeModel.create(bikeVehicleType);
    }
  }
}
