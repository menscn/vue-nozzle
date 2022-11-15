import request from '@/utils/request'


export default {
    // 获取装配批次数据
    getAllAssemblyBatchData() {
        return request({
            url: `/all`,
            method: 'get'
        })
    }
}