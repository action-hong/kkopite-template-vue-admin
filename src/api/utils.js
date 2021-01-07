import request from '@/utils/request'

// 图片上传
export const uploadImage = (file) => {
  const data = new FormData()
  data.append('file', file)
  return request.request({
    method: 'post',
    // 路径自己编写
    url: '/file/upload.jbs',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}
