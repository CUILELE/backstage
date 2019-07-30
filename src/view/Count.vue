<template>
<el-container style="height:88vh;">
  <el-main id="countBox">
    <el-row>
      <el-col :span="12">
        <div id="myChart" class="countItem"></div>
      </el-col>
      <el-col :span="12">
        <div id="myChartMonth" class="countItem"></div>
      </el-col>
      <el-col :span="12">
        <div id="myChartPieType" class="countItem"></div>
      </el-col>
      <el-col :span="12">
        <div id="myChartPieMoney" class="countItem"></div>
      </el-col>
    </el-row>
  </el-main>
  </el-container>
</template>

<script>
export default {
  name: "count",
  data() {
    return {};
  },
  mounted() {
    // alert(document.body.offsetWidth)
    // if(document.body.offsetWidth<=1366){
    //   document.getElementsByClassName('leftTab')[0].style.height = document.getElementById('countBox').offsetHeight+55 + 'px'
    // }
    // if(document.body.offsetWidth>=1680){
    //   let countItems = document.getElementsByClassName('countItem');
    //   for(var i=0;i<countItems.length;i++){
    //       countItems[i].style.height ='430px'
    //   }
    // }
    if(document.body.offsetWidth>=1920){
      let countItems = document.getElementsByClassName('countItem');
      for(var i=0;i<countItems.length;i++){
          countItems[i].style.height ='450px'
      }
    }
    this.typeChart();
  },
  methods: {
    typeChart(){
      let chartLineDay = this.$echarts.init(document.getElementById("myChart"));
      let chartLineMonth = this.$echarts.init(document.getElementById("myChartMonth"));
      let chartPie = this.$echarts.init(document.getElementById("myChartPieType"));
      let chartPieMoney = this.$echarts.init(document.getElementById("myChartPieMoney"));

      let chartLineData = {
        title: { text: "短信发送次数统计（日）", x: "center" },
        tooltip: {},
        toolbox: {
          feature: {
            saveAsImage: {}
          },
          right: 50
        },
        xAxis: {
          data: [
            "星期日",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            name: "发送条数",
            type: "line"
          }
        ]
      }
      let chartLineMonthData = {
        title: { text: "短信发送次数统计（月）", x: "center" },
        tooltip: {},
        toolbox: {
          feature: {
            saveAsImage: {}
          },
          right: 50
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              320,
              820,
              930,
              1690,
              990,
              886,
              932,
              901,
              934,
              1290,
              1930,
              1320
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            },
            name: "发送条数",
            type: "line"
          }
        ]
      }
      let chartPieData = {
        title: {
        text: "短信发送类型统计",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          },
          right: 50
        },
        legend: {
          orient: "vertical",
          left: 25,
          data: ["验证码", "广告短信", "提醒短信", "长短信"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "70%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "验证码" },
              { value: 310, name: "广告短信" },
              { value: 234, name: "提醒短信" },
              { value: 135, name: "长短信" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
      let chartPieMoneyData = {
        title: {
          text: "短信费用计算",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
         toolbox: {
          feature: {
            saveAsImage: {}
          },
          right: 50
        },
        legend: {
          orient: "vertical",
          left: 25,
          data: ["验证码", "广告短信", "提醒短信", "长短信"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "70%",
            center: ["50%", "50%"],
            data: [
              { value: 335, name: "验证码" },
              { value: 310, name: "广告短信" },
              { value: 234, name: "提醒短信" },
              { value: 135, name: "长短信" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }

      chartLineDay.setOption(chartLineData)
      chartLineMonth.setOption(chartLineMonthData)
      chartPie.setOption(chartPieData)
      chartPieMoney.setOption(chartPieMoneyData)
      chartPieMoney.showLoading();
      // chartPieMoney.hideLoading();
      window.onresize = function (){
        chartLineDay.resize()
        chartLineMonth.resize()
        chartPie.resize()
        chartPieMoney.resize()
      }
    }
  }
};
</script>

<style scoped less>
#myChart,
#myChartMonth,
#myChartPieType,
#myChartPieMoney {
  width: 100%;
  height: 400px;
   box-sizing: border-box;
}
#myChartMonth,#myChartPieMoney{
  border-left: 1px solid #f0f0f0;
 
}
.el-main {
  padding: 0px; 
}
</style>
