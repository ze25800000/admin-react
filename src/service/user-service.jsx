import _mm from 'util/mm'

export default class User {
    static login(loginInfo) {
        return _mm.request({
            url: "/manage/user/login.do",
            type: 'post',
            data: loginInfo
        })
    }

    static checkLoginInfo(loginInfo) {
        let username = $.trim(loginInfo.username),
            password = $.trim(loginInfo.password)
        if (typeof username !== 'string' || username.length === 0) {
            return {
                status: false,
                msg: '用户名不能为空'
            }
        }
        if (typeof password !== 'string' || password.length === 0) {
            return {
                status: false,
                msg: '密码不能为空'
            }
        }
        return {
            status: true,
            msg: '验证通过'
        }
    }

    static getUserList(pageNum) {
        return _mm.request({
            type: 'post',
            url: '/manage/user/list.do',
            data: {
                pageNum
            }
        })
    }

    static logout() {
        return _mm.request({
            url: "/user/logout.do",
            type: 'post'
        })
    }
}