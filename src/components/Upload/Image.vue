<template>
  <el-upload
    class="avatar-uploader"
    :style="{ width: width, height: height }"
    :multiple="false"
    :show-file-list="false"
    :action="uploadApi"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon" />
    <i v-if="imageUrl" class="el-icon-delete avatar-uploader-icon" @click.stop="rmImage" />
  </el-upload>
</template>

<script>
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
    },
    width: {
      type: String,
      default: '178px'
    },
    height: {
      type: String,
      default: '178px'
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
    },
    uploadApi() {
      return process.env.VUE_APP_BASE_API + '/file/upload.jbs'
    }
  },
  methods: {
    rmImage() {
      this.emitInput('')
    },
    emitInput(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

  .avatar-uploader {
    ::v-deep {
      .el-upload {
        width: 100%;
        height: 100%;
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
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    top: 0;

    &::before {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &:hover {
      color: #409EFF;
    }
  }
  .avatar {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
