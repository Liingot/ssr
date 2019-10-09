<template>
  <div class="enter">
    <ul class="main">
      <li class="mainavatar">
        <span class="text">头像</span>
        <div class="avatar logo"></div>
      </li>
      <li class="mainLis">
        <span class="text">公司</span>
        <div class="company">
          <span class="subText">北京细水科技有限公司</span>
          <div class="el-down"></div>
        </div>
      </li>
      <li class="mainLis">
        <span class="text">姓名</span>
        <span class="subText">张先生</span>
      </li>
      <li class="mainLis">
        <span class="text">职位</span>
        <span class="subText">xxx</span>
      </li>
      <li class="mainLis">
        <span class="text">省份</span>
        <span class="subText">北京</span>
      </li>
      <li class="mainLis">
        <span class="text">手机号</span>
        <span class="subText" style="color:#0070cc;">152****1111</span>
      </li>
      <li class="mainLis">
        <span class="text">性别</span>
        <span class="subText">男</span>
      </li>
      <li class="mainLis">
        <span class="text">出生年月</span>
        <span class="subText">1990-09-10</span>
      </li>
    </ul>
    <footer class="footer">
      <span class="submit">提交</span>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatar: "" //头像
    };
  }
};
</script>
<style scoped>
.enter {
  width: 100%;
  height: 100vh;
  background: #f4f4f4;
  padding: 20rpx 0 30rpx 0;
  box-sizing: border-box;
  position: relative;
}
.main {
  padding: 0 20rpx;
  background: white;
  box-sizing: border-box;
}
.main > li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f1f1f1;
}
.mian > li:first-child {
  border: none;
}
.text {
  font-size: 30rpx;
  font-weight: 500;
}
.logo {
  width: 118rpx;
  height: 118rpx;
  background: #ccc;
  border-radius: 50%;
  margin-right: 25rpx;
}
.logo img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.mainavatar {
  padding-top: 15rpx;
  padding-bottom: 20rpx;
  box-sizing: border-box;
}
.mainLis {
  padding: 35rpx 0;
  box-sizing: border-box;
}
.company {
  display: flex;
  align-items: center;
}
.subText {
  font-size: 30rpx;
  font-weight: 500;
  color: #555555;
}
.el-down {
  width: 25rpx;
  height: 15rpx;
  margin-left: 15rpx;
  background: rebeccapurple;
}
.el-down img {
  width: 100%;
  height: 100%;
}
.footer {
  padding: 0 20rpx;
  box-sizing: border-box;
}
.submit {
  width: calc(100% - 40rpx);
  display: block;
  border-radius: 50rpx;
  background: #0070cc;
  color: white;
  font-size: 28rpx;
  text-align: center;
  line-height: 100rpx;
  position: absolute;
  bottom: 20rpx;
}
</style>