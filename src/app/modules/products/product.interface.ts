

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type Product = {
  _id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  inventory: Inventory;
};



