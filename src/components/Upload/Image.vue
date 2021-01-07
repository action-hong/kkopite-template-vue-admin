<template>
  <el-upload
    class="avatar-uploader"
    :multiple="false"
    :show-file-list="false"
    :http-request="uploadImg"
    action="https://httpbin.org/post"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon" />
    <i v-if="imageUrl" class="el-icon-delete avatar-uploader-icon" @click.stop="rmImage" />
  </el-upload>
</template>

<script>
import { uploadImage } from '@/api/jinbird'
export default {
  name: 'JinBirdImageUpload',
  props: {
    value: {
      type: String,
      default: ''
    },
    imageSizeStyle: {
      type: Object,
      default: () => {}
    },
    size: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tempUrl: ''
    }
  },
  computed: {
    imageUrl() {
      return this.value
    }
  },
  methods: {
    rmImage() {
      this.emitInput('')
    },
    emitInput(val) {
      this.$emit('input', val)
    },
    uploadImg(file) {
      console.log('上传图片', file)
      uploadImage(file.file)
        .then(res => {
          this.emitInput(res.data)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

  .avatar-uploader {
    ::v-deep {
      .el-upload {
        width: 178px;
        height: 178px;
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        &:hover {
          border-color: #409EFF;

        }
      }
    }
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;

    &:hover {
      color: #409EFF;
    }
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
