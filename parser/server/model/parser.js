const cheerio = require('cheerio');

module.exports = {
    parser: (data) => {
        const productList = new Array
        const $ = cheerio.load(data)
        $('tr.warning').each((_i, elem) => {
            let product = new Object
            $(elem).children('td').each((index, child) => {
                switch (index) {
                    case 7:
                        product.category = $(child).text();
                        break;
                    case 8:
                        product.price = $(child).text();
                        break;
                    case 9:
                        product.name = $(child).text();
                        break;
                    case 10:
                        product.sku = $(child).text();
                        break;
                    case 11:
                        product.warranty = $(child).text();
                        break;
                    case 12:
                        product.url = $(child).find('a').attr('href');
                        break;
                    case 13:
                        product.comment = $(child).text();
                        break;
                    case 14:
                        product.date = $(child).text();
                        break;
                }
            })
            productList.push(product)
        })
        return { products: productList }
    }
}