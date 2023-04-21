import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { ObjectId } from 'mongoose';

export class CreateVehiclModelDto {
    @ApiProperty()
    vehicleTypeId: ObjectId;
  
    @ApiProperty()
    category: string;

    @ApiProperty()
    modelName: string;
  
    @ApiProperty()
    isActive: boolean;
  
    @ApiProperty()
    isDelete: boolean;
}

export class UpdateVehiclModelDto extends PartialType(CreateVehiclModelDto) {}

