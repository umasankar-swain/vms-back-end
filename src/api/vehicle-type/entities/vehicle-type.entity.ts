import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VehicleTypeDocument = VehicleType & Document;

@Schema()
export class VehicleType {
  
  @Prop()
  category: string;

  @Prop({ required: false })
  carTypes?: string[];

  @Prop({ required: false })
  bikeTypes?: string[];

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isDelete: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const VehicleTypeSchema = SchemaFactory.createForClass(VehicleType);
