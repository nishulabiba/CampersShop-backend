import { z } from 'zod';

const inventoryValidationSchema = z.object({
  quantity: z.number().int().min(0, 'Quantity must be 0 or greater.'),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .max(100, 'Product name must be within 100 characters.')
    .min(1, 'Product name is required.'),
  description: z
    .string()
    .trim()
    .max(500, 'Product description must be within 500 characters.')
    .min(1, 'Product description is required.'),
  price: z.number().positive('Price must be greater than 0.'),
  category: z.string().min(1, 'Category is required.'),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
