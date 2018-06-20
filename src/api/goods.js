import request from '../utils/request'

// 获取轮播图数据

export async function getGoodsDetail(id) {
	const res = await request({
		url: `goods/detail?goods_id=${id}`
	})
	return res.data.data
}