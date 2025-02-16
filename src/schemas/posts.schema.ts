import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  medicines = 'Medicines',
  medicalEquipment = 'Medical Equipment',
  medicalSupplies = 'Medical Supplies',
  nutritionalSupplements = 'Nutritional Supplements',
}

@Schema({ timestamps: true })
export class Posts {
  @Prop({ minlength: 3 })
  title: string;

  @Prop()
  description: string;

  @Prop()
  category: Category;
}

export const PostSchema = SchemaFactory.createForClass(Posts);
