import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleModelService } from './vehicl-model.service';
import { CreateVehiclModelDto } from './dto/create-vehicl-model.dto';
import { UpdateVehiclModelDto } from './dto/update-vehicl-model.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('vehicl-model')
@ApiTags('[ T ] - Vehicles models APIs')
export class VehiclModelController {
  constructor(private readonly vehiclModelService: VehicleModelService) { }

  @Get()
  @ApiOperation({ summary: 'Get all vehicle models.' })
  findAll() {
    return this.vehiclModelService.findAll();
  }

  @Get('/:vehicleTypeCategory')
  @ApiOperation({ summary: 'Get vehicle models by category.' })
  async findByVehicleTypeCategory(@Param('vehicleTypeCategory') vehicleTypeCategory: string) {
    return this.vehiclModelService.findByVehicleTypeCategory(vehicleTypeCategory);
  }


}
