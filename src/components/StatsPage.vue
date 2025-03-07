<template>
  <div class="stats-page">
    <h2>数据统计</h2>
    <div class="stats-content">
      <div id="chart" style="width: 100%; height: 400px;"></div>
    </div>
    <div class="recent-records">
      <h3>最近雨刷工作记录</h3>
      <ul>
        <li>2023-10-01 14:00 - 中雨</li>
        <li>2023-09-30 10:00 - 小雨</li>
        <li>2023-09-28 08:00 - 大雨</li>
        <li>2023-09-25 19:00 - 小雨</li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'StatsPage',
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var chartDom = document.getElementById('chart');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: '降雨量 (mm)'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['2023-10-01', '2023-09-30', '2023-09-29', '2023-09-28', '2023-09-27']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [10, 15, 12, 25, 5],
            type: 'line'
          }
        ]
      };

      option && myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
.stats-page {
  text-align: center;
  padding: 20px;
}

.recent-records {
  margin-top: 20px;
}

.recent-records h3 {
  margin-bottom: 10px;
}

.recent-records ul {
  list-style-type: none;
  padding: 0;
}

.recent-records li {
  background-color: #f0f0f0;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}
</style>