import React, { useState } from 'react';
import { CompleteProducts, Params, Performed } from './SelectedListProducts';

export const ProductTable: React.FC<ListType> = ({ list, products }) => {
  const [state, setState] = useState();

  return (
    <>
      {list === 'performed' && <Performed products={products} />}
      {list === 'params' && <Params products={products} />}
      {(list === 'added' || list === 'notAdded') && <CompleteProducts products={products} />}
    </>
  );
};

type ListType = { list: string; products: ProductType[] };

export interface ProductType {
  category: string;
  price: string;
  name: string;
  sku: string;
  warranty?: string;
  url?: string;
  comment: string;
  date: string;
}
export interface IProductForModal {
  type: string;
  name: string;
  value: string;
}
export interface SelectProductType {
  name: string | null;
  sku: string | null;
}
export interface IModalWithProduct {
  product: IProductForModal[] | null;
  isModalOpen: boolean;
}
export interface IAsideType {
  isOpen: boolean;
  isError: boolean;
  message: string;
}
