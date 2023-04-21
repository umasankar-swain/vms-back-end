import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VehiclModelDocument = VehiclModel & Document;

@Schema()
export class VehiclModel {
  @Prop({ type: String })
  vehicleType: string;

  @Prop({ required: true })
  modelName: string;

  // @Prop({ type: String })
  // vehicleTypeCategory: string;

  @Prop({ ref: 'VehicleType' })
  vehicleTypeCategory: string;

  @Prop({ type: String, ref: 'VehicleType' })
  vehicleTypeId: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isDelete: boolean;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;

  @Prop({ type: Date, default: Date.now })
  updatedAt: Date;
}

export const VehiclModelSchema = SchemaFactory.createForClass(VehiclModel);
