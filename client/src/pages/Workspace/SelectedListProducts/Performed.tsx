import React, { SyntheticEvent, useState } from 'react';

import { KebabButton, Checkbox } from '../../../components';
import Modal from '../Modal';
import { FormAddProduct } from './FormAddProduct';
import { selectAllCheckboxAndReturnProduct, copyToBuffer, searhParent } from '../helpers';

export const Performed: React.FC<ProductListType> = ({ products }) => {
  const [state, setState] = useState<SelectProductType[]>([]);
  const [showMoreInfoOfProduct, setShowMoreInfoOfProduct] = useState<IModalWithProduct>({
    product: null,
    isModalOpen: false,
  });

  const changeProduct = (e: React.ChangeEvent<EventTarget>): void => {
    e.stopPropagation();

    const target = e.target as HTMLInputElement;
    const isChecked = target.checked;
    const parentElement: Node & ParentNode = target.parentNode!.parentNode!.parentNode!.parentNode!;
    
    if (target.dataset.role === 'main') { //главный чекбокс
      const globalParent: Node & ParentNode = parentElement.parentNode!;
      const checkedProducts: SelectProductType[] = selectAllCheckboxAndReturnProduct(
        globalParent,
        isChecked
      );

      setState(checkedProducts);
    } else if (target.dataset.role === 'secondary') { //рядовой чекбокс
      const selectProduct: SelectProductType = { 
        name: parentElement.children[2].textContent,
        sku: parentElement.children[3].textContent,
      };

      if (isChecked) { 
        setState([...state, selectProduct]);
      } else {
        const checkedProducts = state.filter((product: SelectProductType) => {
          return selectProduct.sku !== product.sku && selectProduct.name !== product.name;
        });
        setState(checkedProducts);
      }
    }
  };
  
  const setProductClass =(type: string | undefined)=> {
    return type ? 'product product_rework' : 'product'
  }
  
  const clickHeandler = (e: SyntheticEvent): void => {
    let target = e.target as any;
    const dataType: string | undefined = target.dataset.type;

    if (dataType === 'name' || dataType === 'category' || dataType === 'sku') {
      copyToBuffer(target);
    } else if (dataType === 'open') {
      openModalWithProduct(target);
    }
  };

  const openModalWithProduct = (target: HTMLElement) => {
    const productCard: HTMLElement = searhParent(target);
    const product: IProductForModal[] = [
      {
        type: 'category',
        name: 'Категория | Набор атрибутов',
        value: productCard.children[1].textContent!,
      },
      {
        type: 'name',
        name: 'Название',
        value: productCard.children[2].textContent!,
      },
      {
        type: 'sku',
        name: 'Код товара(СКЮ)',
        value: productCard.children[3].textContent!,
      },
      {
        type: 'comment',
        name: 'Комментарий',
        value: productCard.children[6].textContent!,
      },
      {
        type: 'date',
        name: 'Дата выдачи',
        value: productCard.dataset.date!,
      },
      {
        type: 'price',
        name: 'Стоимость',
        value: productCard.dataset.price!,
      },
    ];

    setShowMoreInfoOfProduct({
      product,
      isModalOpen: true,
    });
  };

  return (
    <>
      <div className='board'>
        <table onClick={clickHeandler}>
          <tbody onChange={changeProduct} className='product-list'>
            <tr className='descript-bar'>
              <th>
                <Checkbox isMain={true} />
              </th>
              <th>Категория | Набор атрибутов</th>
              <th>Название</th>
              <th>Код товара(СКЮ)</th>
              <th>Гарантия</th>
              <th>Источник</th>
              <th>Комментарий</th>
              <th></th>
            </tr>
            {products.map((product, index) => (
              <tr
                key={index}
                className={setProductClass(product.type)}
                data-date={product.date}
                data-price={product.price}>
                <td>
                  <Checkbox />
                </td>
                <td data-type='category' className='product-item product-item__category'>
                  {product.category}
                </td>
                <td data-type='name' className='product-item product-item__name'>
                  {product.name}
                </td>
                <td data-type='sku' className='product-item product-item__sku'>
                  {product.sku}
                </td>
                <td data-type='warranty'>{product.warranty}</td>
                <td>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    data-type='url'
                    href={product.url}
                    className='product-link'>
                    Ссылка
                  </a>
                </td>
                <td data-type='comment'>{product.comment}</td>
                <td>
                  <KebabButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showMoreInfoOfProduct.isModalOpen && (
          <Modal product={showMoreInfoOfProduct.product} closeModal={setShowMoreInfoOfProduct} />
        )}
      </div>
      <FormAddProduct products={state} type={'perfomed'} />
    </>
  );
};

type ProductListType = {
  products: ProductType[];
};

export interface ProductType {
  type?: string
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
