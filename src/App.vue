<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view/>
    <div class="nav-bottom">
      
      <router-link to="/control">控制</router-link>
      <router-link to="/stats">数据统计</router-link>
      <router-link to="/settings">状态与设置</router-link>
    </div>
  </div>
</template>

<script>




// adb.exe connect 127.0.0.1:16384

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 70px; /* 为底部导航腾出空间 */
  position: relative;
  min-height: 100vh; /* 确保页面至少有视口高度 */
}

.nav-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}

.nav-bottom a {
  text-decoration: none;
  color: #4a90e2;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}

.nav-bottom a.router-link-active {
  color: #357ab8;
  font-weight: bold;
}
</style>
