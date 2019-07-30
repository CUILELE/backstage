<template>
    <div>
        <el-input class="ainput"
            placeholder="请输入内容"
            v-model="input1"
            clearable>
        </el-input>
    </div>
</template>

<script>
export default {
    name:'search',
    data() {
      return {
        input1: ''
      }
    }
  }
</script>

<style scoped lang="less">
.el-input{
    height: 100%;
    top: -1px;
}


</style>
