import _mm from 'util/mm'

export default class User {
    static login(loginInfo) {
        return _mm.request({
            url: "/manage/user/login.do",
            type: 'post',
            data: loginInfo
        })
    }
}