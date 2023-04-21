import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
  @Prop()
  firstName: string;

  @Prop({ required: false })
  lastName: string;

  @Prop({ required: true })
  numberOfWheels: number;

  @Prop({ required: true })
  vehicleType: string;

  @Prop({ required: true })
  vehicleModel: string;

  @Prop({ required: true })
  startDate: string;

  @Prop({ required: true })
  endDate: string;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isDelete: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
