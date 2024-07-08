import { Schema, model } from 'mongoose';
import { Inventory, Product} from './product.interface';



const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: true,
    min: [0, 'Quantity cannot be negative'],
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [100, 'Product name must be within 100 characters'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    trim: true,
    maxlength: [500, 'Product description must be within 500 characters'],
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be greater than 0'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

export const ProductModel = model<Product>('Product', productSchema);
