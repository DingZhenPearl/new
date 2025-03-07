<template>
  <div class="settings-page">
    <h1>设置界面</h1>
    <div class="personal-info">
      <img src="path/to/avatar.jpg" alt="头像" class="avatar">
      <p>用户名: 张三</p>
      <p>邮箱: zhangsan@example.com</p>
    </div>
    <div class="status-info">
      <h2>状态信息</h2>
      <p>传感器状态: 正常</p>
      <p>电机工作状态: 正常</p>
      <p>电池电量: 80%</p>
      <p>网络连接状态: 已连接</p>
    </div>
    <div class="upload-frequency">
      <label for="upload-frequency">远程数据上传频率设置</label>
      <select id="upload-frequency">
        <option value="hourly">每小时</option>
        <option value="daily">每天</option>
        <option value="weekly">每周</option>
      </select>
    </div>
    <div class="buttons">
      <button class="save-button">保存设置</button>
      <button class="logout-button">退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage'
}
</script>

<style scoped>
.settings-page {
  text-align: center;
  padding: 20px;
}

.personal-info {
  margin-bottom: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.status-info {
  margin-bottom: 20px;
}

.upload-frequency {
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.save-button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

.logout-button {
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}
</style>