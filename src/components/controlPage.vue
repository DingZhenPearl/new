<template>
  <div class="main-control">
    <div class="header">
      <h2>主控制界面</h2>
      <div class="rainfall-chart">
        <div class="chart">
          <div class="pie" :style="{ '--percentage': rainfall + '%' }"></div>
        </div>
        <p>实时雨量：{{ rainfall }}%</p>
      </div>
    </div>
    <div class="status">
      <h3>当前雨刷工作状态</h3>
      <ul>
        <li :class="{ active: status === '关闭' }">关闭</li>
        <li :class="{ active: status === '间歇' }">间歇</li>
        <li :class="{ active: status === '低速' }">低速</li>
        <li :class="{ active: status === '高速' }">高速</li>
        <li :class="{ active: status === '智能' }">智能</li>
      </ul>
      <button @click="turnOff">立即关闭</button>
    </div>
    <div class="footer">
      <nav>
        <a href="#">控制</a>
        <a href="#">数据统计</a>
        <a href="#">状态与设置</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rainfall: 40,
      status: '智能'
    };
  },
  methods: {
    turnOff() {
      this.status = '关闭';
    }
  }
};
</script>

<style scoped>
.main-control {
  text-align: center;
  font-family: Arial, sans-serif;
}

.header {
  margin-bottom: 20px;
}

.rainfall-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart {
  width: 100px;
  height: 100px;
  position: relative;
}

.pie {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(#4a90e2 var(--percentage), #e0e0e0 0);
}

.status ul {
  list-style: none;
  padding: 0;
}

.status li {
  margin: 5px 0;
}

.status li.active {
  color: green;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #357ab8;
}

.footer nav {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.footer a {
  text-decoration: none;
  color: #4a90e2;
}

.footer a:hover {
  text-decoration: underline;
}
</style>