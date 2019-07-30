<template>
  <div>
      <el-row class="tac">
        <el-col>
          <el-menu
          :default-active="activeIndex"
            class="el-menu-vertical-demo"
            background-color="rgb(48, 65, 86)"
            text-color="#fff"
            active-text-color="rgb(64, 158, 255)"
          >
            <el-menu-item v-for="item in tabMap" :key="item.index" :index="item.index" :disabled="item.disabled">
              <router-link tag="div" :to={path:item.url} exact>
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name:'tabmenu',
  data() {
    return {
      activeIndex:"1",
      tabMap: [
        {
          url: "/index",
          index: "1",
          icon: "el-icon-sort",
          title: "供应商管理",
          disabled:false
        },
        {
          url: "apiAdmin",
          index: "2",
          icon: "el-icon-document",
          title: "接口类型管理",
          disabled:false
        },
        {
          url: "",//examine
          index: "3",
          icon: "el-icon-message",
          title: "子系统管理",
          disabled:true
        },
        {
          url: "count",
          index: "4",
          icon: "el-icon-tickets",
          title: "统计部分",
          disabled:false
        }
      ]
    }
  },
  created(){},
  mounted(){
    // this.setActiveIndex()
  },
  watch:{
    $route() {
      this.setActiveIndex()
    }
  },
  methods:{
    setActiveIndex(){
      this.tabMap.forEach(it=>{
        if(this.$route.path.indexOf(it.url) != -1){
          this.activeIndex = it.index
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu{
  border-right: 0;
  height: 100%;
}
.el-menu-item:hover {
  background-color: rgb(38, 52, 69) !important;
}
</style>
