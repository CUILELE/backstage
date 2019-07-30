<template>
  <el-main>
    <!-- v-loading="loading" -->
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      height="88vh"
      :row-class-name="tableRowClassName"
      fit:true
    >
      <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="suppliername" label="供应商" width="200"></el-table-column>
      <el-table-column prop="supplierphone" label="供应商联系方式" ></el-table-column>
      <el-table-column prop="contract" label="合同编号" width="160"></el-table-column>
      <el-table-column prop="interface" label="接口名"  width="320"></el-table-column>
      <el-table-column prop="technical" label="技术负责人" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="140">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="medium"
          >移除</el-button>
           <el-button 
            @click.native.prevent="lookRow(scope.$index, tableData)"
            type="text"
            size="medium"
          >查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>
<style>
.el-table .warning-row {
  background: rgb(219, 194, 147);
}
.el-table .success-row {
  background: #ecacac;
}
</style>
<script>    
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    lookRow(index, rows){
        // this.$message('查看详情还未做');
        this.$router.push({ path:'supplieritem'})
    },
    tableRowClassName({ row, rowIndex }) {
      if (row.status == 3) {
        return "warning-row";
      } else if (row.status == 2) {
        return "success-row";
      }
      return "";
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司A",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:3
        },
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },,
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        },
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:2
        },
        {
          date: "2019-07-03",
          id: "12345",
          suppliername: "中国5G通信公司北京公司",
          supplierphone: "13800138000",
          contract: "10000000",
          interface: "https://LAPTOP-7CMPG16K/svn/AGK",
          technical: "张三李四",
          status:1
        }
      ],
      // loading: true,
    };
  }
};
</script>

