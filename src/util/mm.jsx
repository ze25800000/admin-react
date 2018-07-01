export default class MUtil {
    static request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: (res) => {
                    if (0 === res.status) {
                        resolve(res.data, res.msg)
                    } else if (10 === res.status) {
                        this.doLogin()
                    } else {
                        reject(res.msg || res.data)
                    }
                },
                error: (err) => {
                    reject(err.statusText)
                }
            })
        })
    }

    static doLogin() {
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname)
    }

    static getUrlParam(name) {
        let queryString = window.location.search.split('?')[1] || '',
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result = queryString.match(reg)
        return result ? decodeURIComponent(result[2]) : null
    }

    static errorTips(errMsg) {
        alert(errMsg || 'wrong')
    }

    static setStorage(name, data) {
        let dataType = typeof data
        if (dataType === 'object') {
            window.localStorage.setItem(name, JSON.stringify(data))
        } else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0) {
            window.localStorage.setItem(name, data)
        } else {
            alert('类型不能存储')
        }
    }

    static getStorage(name) {
        let data = window.localStorage.getItem(name)
        if (data) {
            return JSON.parse(data)
        } else {
            return ''
        }
    }

    static removeStorage(name) {
        window.localStorage.removeItem(name)
    }
}