import _mm from 'util/mm'

export default class Statistic {
    static getHomeCount() {
        return _mm.request({
            url: "/manage/statistic/base_count.do"
        })
    }
}