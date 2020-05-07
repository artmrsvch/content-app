const path = require('path')

const connect = require('../model/content-connect')
const extractProducts = require('../model/parser')
const save = require('../model/saves')


connect.getProducts('785c751bbfaa80df9792b139201098e7')
    .then(html => {
        return extractProducts.parser(html)
    })
    .then(async productList => {
        console.log('Всего товаров:', productList.products.length)
        const dataBase = path.join(process.cwd(), 'db.json')
        await save.toJSON(dataBase, productList)
        console.log('Товары успешно обновлены')
    })