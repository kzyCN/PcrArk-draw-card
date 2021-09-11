<template>
  <div>
    <el-form
      label-width="100px"
      size="medium"
    >
      <el-form-item label="您的用户令牌">
        <el-input v-model="userInfo.token" style="width: 300px;margin-right: 25px"></el-input>
        <el-button type="primary" @click="inquiry">查询</el-button>
      </el-form-item>
    </el-form>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
export default {
  name: 'ArkDataCharts',
  data() {
    return {
      userInfo: {
        token: '',
      },
      arkData: {
        six: 0,
        five: 0,
        four: 0,
        three: 0,
        isnew: 0,
      },
    };
  },
  methods: {
    inquiry() {
      this.$http.post('https://ark.fsyume.com:9966/arkdata', this.userInfo).then((res) => {
        const fineData = res.data.data;
        console.log(res.data);

        this.arkData.six = fineData.six;
        this.arkData.five = fineData.five;
        this.arkData.four = fineData.four;
        this.arkData.three = fineData.three;

        this.myEcharts();
      });
    },
    myEcharts() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      const option = {
        title: {
          text: '明日方舟寻坊分析',
          subtext: 'by：浮生yume',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [{
          name: '标准寻访',
          type: 'pie',
          radius: '50%',
          data: [{
            value: this.arkData.six,
            name: '6星',
          },
          {
            value: this.arkData.five,
            name: '5星',
          },
          {
            value: this.arkData.four,
            name: '4星',
          },
          {
            value: this.arkData.three,
            name: '3星',
          },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        }],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    // this.myEcharts();
  },
};
</script>

<style scoped>

</style>
