import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateVehicleTypeDto {
  @ApiProperty()
  readonly category: string;

  @ApiProperty({ type: [String] })
  readonly carTypes: string[];

  @ApiProperty({ type: [String] })
  readonly bikeTypes: string[];
}
export class UpdateVehicleTypeDto extends PartialType(CreateVehicleTypeDto) {}