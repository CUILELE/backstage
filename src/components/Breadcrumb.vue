<template>
  <el-breadcrumb class="breadcrumb" separator="/">
  <template v-if="statusdata">
    <el-breadcrumb-item  v-for="(item,index) in breadcrumb.where" :key="index">
        {{item}}
    </el-breadcrumb-item>
  </template> 
  <template v-else>
    <el-breadcrumb-item>{{breadcrumb.where}}</el-breadcrumb-item>
  </template>
  </el-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      breadcrumb:{
          where: "供应商管理", 
          croute: "supplier" 
      },
      statusdata:'',
    };
  },
  watch: {
    $route(){
      this.findData()
    }
  },
  created(){
    this.findData()
  },
  methods:{
    findData(){
      let databread = JSON.parse(sessionStorage.getItem('breadTitle')).title;
      let datapath = JSON.parse(sessionStorage.getItem('breadTitle')).path
      this.statusdata = Object.prototype.toString.call(databread) === '[object Array]';
      this.breadcrumb = {
        where:databread,
        croute:datapath
      }
    }
  }
}

</script>

<style>
</style>
