import { PartialType } from '@nestjs/swagger';
import { CreateVehiclModelDto } from './create-vehicl-model.dto';

export class UpdateVehiclModelDto extends PartialType(CreateVehiclModelDto) {}
