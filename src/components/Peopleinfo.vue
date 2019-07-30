<template>
  <div class="peoplebox">
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        张三
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">切换用户</el-dropdown-item>
        <el-dropdown-item command="b">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
    name: "peopleinfo",
    methods: {
        handleCommand(command) {
            console.log(command)
            this.$message('click on item ' + command);
        }
    }
    
};
</script>

<style scoped lang="less">
.el-dropdown-link {
    cursor: pointer;
  }
.el-icon-arrow-down {
    font-size: 12px;
}
</style>
