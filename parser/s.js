const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs')
const path = require('path')

const login = 'http://content.allo.biz.ua/index.php'


axios.get(login).then(res => {
    const [sessionId] = res.headers['set-cookie'][0].split(';')
    console.log('KEY', sessionId)
    return sessionId
}).then(SESSKEY => {
    axios.post(login, {
        headers: {
            Cookie: `prod_id=215; ${SESSKEY};`
        },
        body: {
            login: 'Забиров',
            password: 'z0999162850',
            kapcha: '',
            loginbutton: 'Войти',
        }
    }).then(res => console.log(res))
})


// {
//     login: 'Забиров',
//     password: 'z0999162850',
//     kapcha: '',
//     loginbutton: 'Войти',
// }