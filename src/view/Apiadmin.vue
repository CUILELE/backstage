<template>
  <el-main>
    <el-table :data="tableData3" style="width: 100%">
      <el-table-column fixed prop="date" label="日期"  width="160"></el-table-column>
      <el-table-column prop="apiinfo" label="接口信息"></el-table-column>
      <el-table-column prop="aipstatus" label="接口实时状态"  width="160">
      <template v-slot:default="slotProps">
          <el-switch
            style="display: block"
            v-model=slotProps.row.aipstatus
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="开"
            inactive-text="关">
        </el-switch>
      </template>
      </el-table-column>
      <el-table-column prop="calculate" label="计费逻辑" width="130">
        <template v-slot:default="slotProps">
             <el-select v-model="slotProps.row.values" placeholder="请选择">
                <el-option
                v-for="item in slotProps.row.calculate"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="sendtype" label="接口发送方式" width="160">
          <template v-slot:default="slotProps">
             <el-select v-model="slotProps.row.valuestype" placeholder="请选择">
                <el-option
                v-for="item in slotProps.row.sendtype"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template v-slot:default="slotProps">
          <el-button
            @click.native.prevent="deleteRow(slotProps.$index, tableData3)"
            size="medium"
          >提交</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
        tableData3: [
            {
                date: "2019-04-23",
                apiinfo: "https://LAPTOP-7CMPG16K/svn/AGK/LAPTOP-7CMPG16K/svn/AGK/svn/AGK/LAPTOP",
                calculate: [
                    {value: '选项1',label: '按次计费'}, 
                    {value: '选项2',label: '阶梯计费'},
                    {value: '选项3',label: '免费次数'}
                ],
                sendtype:  [
                    {value: '选项3',label: 'AB均衡发送'}, 
                    {value: '选项4',label: 'AB主备发送'},
                ],
                aipstatus: true,
                values:'',
                valuestype:''//选择后的值
            },
            {
                date: "2019-05-03",
                apiinfo: "https://LAPTOP-7CMPG16K/svn/AGK/svn/AGK/LAPTOP-7CMPG16K",
                calculate: [
                    {value: '选项1',label: '按次计费'}, 
                    {value: '选项2',label: '阶梯计费'},
                    {value: '选项3',label: '免费次数'}
                ],
                sendtype:  [
                    {value: '选项3',label: 'AB均衡发送'}, 
                    {value: '选项4',label: 'AB主备发送'},
                ],
                aipstatus: true,
                values:'',
                valuestype:''//选择后的值
            },
            {
                date: "2019-09-03",
                apiinfo: "https://LAPTOP-7CMPG16K/svn/AGK/svn/AGK/LAPTOP-7CMPG16K",
                calculate: [
                    {value: '选项1',label: '按次计费'}, 
                    {value: '选项2',label: '阶梯计费'},
                    {value: '选项3',label: '免费次数'}
                ],
                sendtype:  [
                    {value: '选项3',label: 'AB均衡发送'}, 
                    {value: '选项4',label: 'AB主备发送'},
                ],
                aipstatus: true,
                values:'',
                valuestype:''//选择后的值
            }
        ],
    };
  },
  methods:{
      deleteRow(a){
        //测试使用真实是要修改
        let aas = this.tableData3[a].values
        let bbs = this.tableData3[a].valuestype
      }
  }
};
</script>