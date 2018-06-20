import request from '../utils/request'

// 获取轮播图数据
export async function getSwiper() {
  const res = await request({
  	url: 'home/swiperdata'
  })
  return res.data.data
}

// 获取导航分类数据
export async function getNavCats() {
  const res = await request({
  	url: 'home/catItems'
  })
  return res.data.data
}

// 获取首页楼层数据
export function getFollr() {
	// body...
}