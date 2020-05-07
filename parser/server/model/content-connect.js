const axios = require('axios');

module.exports = {
    auth: () => {
        return new Promise(async (resolve, reject) => {
            const login = 'http://content.allo.biz.ua/index.php'
            try {
                const responce = await axios.post(login, {
                    headers: {
                        "Content-Type": 'application/x-www-form-urlencoded'
                    },
                    body: {
                        login: 'xuitebe',
                        password: 'xuitebe',
                        kapcha: '',
                        loginbutton: 'Войти',
                    }
                })
                console.log(responce)
                const [sessionId] = responce.headers['set-cookie'][0].split(';')
                resolve(sessionId)
            } catch (message) {
                reject(`Ошибка авторизации: ${message}`)
            }
        })
    },
    getProducts: async function (key) {
        //const SESSKEY = await this.auth()
        const SESSKEY = `PHPSESSID=${key}`
        return new Promise(async function (resolve, reject) {
            const url = 'http://content.allo.biz.ua/member.php'
            try {
                const responce = await axios.get(url, {
                    headers: {
                        Cookie: `prod_id=215; ${SESSKEY};`
                    }
                })
                resolve(responce.data)
            } catch (message) {
                reject(`Ошибка скраппинга: ${message}`)
            }
        })

    }
}