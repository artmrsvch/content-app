import React, { useState } from 'react';

import { Select } from '../../components';
import {ProductTable, ProductType} from './ProductTable';

const Workspace: React.FC = () => {
  const changeList = {
    performed: 'performed',
    params: 'params',
    rework: 'rework',
    added: 'added',
    notAdded: 'notAdded',
  }
  const [list, setList] = useState(changeList.performed)
  const options: string[] = ['Выполняется', 'Параметры', 'Добавлен', 'Не добавлен']

  const products: ProductType[] = [
    {
      category: 'Стеллажи | Стеллажи',
      price: '10.00',
      name: 'Barsky Homework Universal BUМ-01',
      sku: 'BUM-01-0011',
      warranty: '12',
      url: 'https://barsky.ua/product/modul-barsky-universal.html#/37-cvet-korichnevyj',
      comment: 'С источника',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 3396 для моделирования 50 шт.',
      sku: '14029-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/149011977/p149011977/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
    {
      category: 'Полезные товары для дома | Полезные товары для дома',
      price: '8.00',
      name: 'Шарики надувные METR+ MK 1522 10 дюймов, 50 шт.',
      sku: '14027-0408',
      warranty: '',
      url: 'https://rozetka.com.ua/122092896/p122092896/',
      comment: '',
      date: '2020-04-17 18:10:10',
    },
  ];

  const selectListsProduct = (e: React.ChangeEvent<EventTarget>): void => {
    e.stopPropagation()
    const target = e.target as HTMLInputElement;

    if(target.tagName === 'SELECT') {
      switch(target.value) {
        case 'Выполняется': 
        setList(changeList.performed)
        break;
        case 'Добавлен': 
        setList(changeList.added)
        break;
        case 'Не добавлен': 
        setList(changeList.notAdded)
        break;
        case 'Параметры': 
        setList(changeList.params)
        break;
      }
    }
  }  

  return (
    <section className="section section_withHeader section-workspace">
      <div className="container workspace-container">
        <div onChange={selectListsProduct} className="explanatory">
          <Select options={options} />
          <ul className="work-info">
            <li className="work-info__item">
              <span className="work-info__descript">Отображено:</span>
              <span className="work-info__int">240</span>
            </li>
            <li className="work-info__item">
              <span className="work-info__descript">Доработать:</span>
              <span className="work-info__int work-info__int_red">28</span>
            </li>
            <li className="work-info__item">
              <span className="work-info__descript">Параметры:</span>
              <span className="work-info__int work-info__int_green">10</span>
            </li>
          </ul>
        </div>
        <ProductTable list={list} products={products}/>
      </div>
    </section>
  );
};

export default Workspace;
