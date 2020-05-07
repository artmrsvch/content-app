import React, { useState } from 'react';

import { FormAddProduct } from './FormAddProduct';
import { Checkbox } from '../../../components';
import { selectAllCheckboxAndReturnParams, copyToBuffer } from '../helpers';

export const Params: React.FC<any> = () => {
  const [state, setState] = useState<ISelectParams[]>([]);

  const changeParams = (e: React.ChangeEvent<EventTarget>): void => {
    e.stopPropagation();

    const target = e.target as HTMLInputElement;
    const isChecked = target.checked;
    const parentElement: Node & ParentNode = target.parentNode!.parentNode!.parentNode!.parentNode!;

    if (target.dataset.role === 'main') {
      //главный чекбокс
      const globalParent: Node & ParentNode = parentElement.parentNode!;
      const checkedProducts: ISelectParams[] = selectAllCheckboxAndReturnParams(
        globalParent,
        isChecked
      );

      setState(checkedProducts);
    } else if (target.dataset.role === 'secondary') {
      //рядовой чекбокс
      const selectProduct: ISelectParams = {
        sku: parentElement.children[3].textContent!,
      };

      if (isChecked) {
        setState([...state, selectProduct]);
      } else {
        const checkedProducts = state.filter((product: ISelectParams) => {
          return selectProduct.sku !== product.sku;
        });
        setState(checkedProducts);
      }
    }
  };

  const clickHeandler = (e: React.MouseEvent): void => {
    let target = e.target as HTMLElement;
    const dataType: string | undefined = target.dataset.type;

    if (dataType === 'sku') {
      copyToBuffer(target);
    }
  };

  const attrs: IAttr[] = [
    {
      type: 'Материал',
      property: 'Узкозахватный',
      category: 'Полезные товары для дома | Полезные товары для дома',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
      comment: 'Выбрать из существующих',
    },
    {
      type: 'Производитель',
      property: 'Узкозахватный',
      category: 'Полезные товары для дома | Полезные товары для дома',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
    },
    {
      type: 'Цвет',
      property: 'Узкозахватный',
      category: 'Полезные товары для дома | Полезные товары для дома',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
      comment: 'Выбрать из существующих',
    },
    {
      type: 'Серия',
      property: 'Узкозахватный',
      category: 'Полезные товары для дома | Полезные товары для дома',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
    },
  ];

  return (
    <div className='board'>
      <table onClick={clickHeandler} onChange={changeParams}>
        <tbody className='product-list'>
          <tr className='descript-bar'>
            <th>
              <Checkbox isMain={true} />
            </th>
            <th>Тип</th>
            <th>Значение</th>
            <th>Код товара(СКЮ)</th>
            <th>Комментарий</th>
          </tr>
          {attrs.map((attr, index) => (
            <tr key={index} className='product'>
              <td>
                <Checkbox />
              </td>
              <td data-type='type'>{attr.type}</td>
              <td data-type='property'>{attr.property}</td>
              <td data-type='sku' className='product-item product-item__sku'>
                {attr.sku}
              </td>

              <td data-type='comment'>{attr.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FormAddProduct products={state} type={'params'} />
    </div>
  );
};

interface IAttr {
  type: string;
  property: string;
  category: string;
  name: string;
  sku: string;
  comment?: string;
}

export interface ISelectParams {
  sku: string;
}
