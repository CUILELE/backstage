<template>
  <el-main>
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="合同详情" name="first">合同详情</el-tab-pane>
        <el-tab-pane label="接口信息管理" name="second">接口信息管理</el-tab-pane>
        <el-tab-pane label="联系人信息" name="third">联系人信息</el-tab-pane>
    </el-tabs>
    <el-button type="text" @click="backs">返回</el-button>
  </el-main>
</template>
<script>
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      backs(){
        this.$router.back(-1)
      }
    }
  };
</script>
<style scoped lang="less">
.el-main{
  position: relative;
}
.el-button{
  position: absolute;
  right: 25px;
  top: 20px;
  font-size: 14px;
}
</style>
