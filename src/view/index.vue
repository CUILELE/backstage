<template>
    <div class="contBox">
        <el-row>
            <el-col class="leftTab" :span="3">
                <el-col><h1>短信接口平台</h1></el-col>
                <Tab></Tab> 
            </el-col>
            <el-col :span="21">
                <el-row class="rightTop">
                    <el-col :span="5">
                        <Breadcrumb></Breadcrumb>
                    </el-col>
                    <el-col :span="4">
                        <Search></Search>
                    </el-col>
                    <el-col :span="10" :offset="3">
                        <Searchdate></Searchdate>
                    </el-col>
                    <el-col :span="1" :offset="1">
                        <Peopleinfo></Peopleinfo>  
                    </el-col>
                </el-row>
                <el-container>
                    <router-view/>
                </el-container>
            </el-col>    
        </el-row>    
  </div>
</template>

<script>
import { Loading } from 'element-ui';
import Tab from '../components/tabMenu'
import Search from '../components/Search'
import Peopleinfo from '../components/Peopleinfo'
import Breadcrumb from '../components/Breadcrumb'
import Searchdate from '../components/Searchdate'
//路由引入
export default {
    name:'index',
    data(){
        return{
            
        }
    },
    components:{
        Tab,
        Search,
        Peopleinfo,
        Breadcrumb,
        Searchdate
    },
    created(){
        let aloding =Loading.service({
            fullscreen: true,text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)' 
        });
        setTimeout(()=>{
            aloding.close()
        },2000)
        // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
        //     aloding.close();
        // });
    },
    methods:{}
}
</script>

<style scoped>
.el-container{
    margin-top: 5px
}
h1{
    height: 49px;
    line-height: 49px;
    font-size: 18px;
    background-color: rgb(48, 65, 86);
    color: #fff;
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 400
}
.contBox,.el-row,.leftTab{
    height: 100%;
}
.rightTop{
    height: 50px;
    line-height: 50px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
}
.leftTab{
    background-color: rgb(48, 65, 86);
}
.breadcrumb{
    height: 49px;
    line-height: 49px;
    padding-left: 20px;
}

</style>
