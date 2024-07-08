
import { Inventory, Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: Product): Promise<Product> => {
  try {
    const result = await ProductModel.create(product);

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error creating product: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while creating product');
    }
  }
};

const getProductsFromDB = async (searchTerm?: string): Promise<Product[]> => {
  try {
    if (searchTerm) {
      const regex = new RegExp(searchTerm, 'i');
      return await ProductModel.find({
        $or: [{ name: regex }, { description: regex }],
      });
    } else {
      return await ProductModel.find();
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error retrieving Orders: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while retrieving orders');
    }
  }
};

const findSpecificProduct = async (id: string): Promise<Product | null> => {
  try {
    const result = await ProductModel.findOne({ _id: id });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error finding product: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while finding product');
    }
  }
};
const updateSpecificProduct = async (
  id: string | null,
  updateData: { inventory: Inventory },
) => {
  try {
    const result = await ProductModel.findByIdAndUpdate(id, {
      $set: { inventory: updateData.inventory },
    });
    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error updating product: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while updating product');
    }
  }
};
const deleteSpecificProduct = async (id: string) => {
  try {
    const result = await ProductModel.deleteOne({ _id: id });

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error deleting product: ${error.message}`);
    } else {
      throw new Error('Unknown error occurred while deleting product');
    }
  }
};


export const ProductRelatedServices = {
  createProductIntoDB,
  getProductsFromDB,
  findSpecificProduct,
  updateSpecificProduct,
  deleteSpecificProduct
};
