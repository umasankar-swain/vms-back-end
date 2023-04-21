import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateBookingDto {

    @ApiProperty()
    firstName: string;
  
    @ApiProperty()
    lastName: string;
  
    @ApiProperty()
    numberOfWheels: number;
  
    @ApiProperty()
    vehicleType: string;

    @ApiProperty()
    vehicleModel: string;
  
    @ApiProperty()
    startDate: string;
  
    @ApiProperty()
    endDate: string;
  }
export class UpdateBookingDto extends PartialType(CreateBookingDto) { }
