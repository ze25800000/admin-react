export default class MUtil {
    static request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success(res) {
                    if (0 === res.status) {
                        resolve(res.data, res.msg)
                    } else if (10 === res.status) {
                        this.doLogin()
                    } else {
                        reject(res.msg || res.data)
                    }
                },
                error(err) {
                    reject(err.statusText)
                }
            })
        })
    }

    doLogin() {
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname)
    }
}