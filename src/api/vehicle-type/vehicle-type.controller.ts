import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleTypeService } from './vehicle-type.service';
import { CreateVehicleTypeDto } from './dto/create-vehicle-type.dto';
import { UpdateVehicleTypeDto } from './dto/update-vehicle-type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('vehicle-type')
@ApiTags('[ T ] - Vehicles type APIs')
export class VehicleTypeController {
  constructor(private readonly vehicleTypeService: VehicleTypeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all vehicles.' })
  findAll() {
    return this.vehicleTypeService.findAll();
  }
  
  @Get('carTypes')
  @ApiOperation({ summary: 'Get all cars.' })
  async findCarTypes() {
    return this.vehicleTypeService.findCarTypes();
  }

  @Get('bikeTypes')
  @ApiOperation({ summary: 'Get all Bikes.' })
  async findBikeTypes() {
    return this.vehicleTypeService.findBikeTypes();
  }
}
