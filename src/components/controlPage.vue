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
      <div class="control-buttons">
        <div class="select-container">
          <select v-model="status" class="status-select">
            <option value="关闭">关闭</option>
            <option value="间歇">间歇模式</option>
            <option value="低速">低速模式</option>
            <option value="高速">高速模式</option>
            <option value="智能">智能模式</option>
          </select>
          <button @click="applyStatus">应用更改</button>
        </div>
      </div>
    </div>
    <!-- 已移除底部导航栏 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      rainfall: 40,
      status: '智能',
      selectedStatus: '智能'
    };
  },
  methods: {
    turnOff() {
      this.status = '关闭';
    },
    changeStatus(newStatus) {
      this.status = newStatus;
    },
    applyStatus() {
      // 如果需要在选择后执行额外操作，可以在这里添加代码
      console.log('工作状态已更改为：' + this.status);
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

.control-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.select-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.status-select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  min-width: 150px;
  font-size: 16px;
}

button {
  padding: 10px 15px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #357ab8;
}
</style>