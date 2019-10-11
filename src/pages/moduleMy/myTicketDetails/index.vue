<template>
  <div class="myticketdetails">
    <div class="mainHeader">
      <div class="shopHeader">
        <div class="headerLogo"></div>
        <div class="headerText">第三节上海国际互联网家居节&第六届中国第六届</div>
      </div>
      <p class="time border">
        <span class="timeLogo">
          <img src="/static/images/time.png" alt />
        </span>
        <span class="timeText">2019.10/20 08:30-2019.10/21 08:30</span>
      </p>
      <p class="map border" style="padding-bottom:0;">
        <span class="mapLogo">
          <img src="/static/images/map.png" alt />
        </span>
        <span class="timeText">北京市海淀区xxxx大厦</span>
      </p>
    </div>
    <section class="code">
      <h3 class="codeH3">入场码</h3>
      <div class="codeIcon">
        <div class="icon"></div>
      </div>
      <div class="userInfo">
        <ul class="uls">
          <li class="userInfoLis right">姓名：张先生</li>
          <li class="userInfoLis">座位：空</li>
          <li class="userInfoLis right">手机号：11111111111</li>
          <li class="userInfoLis">费用：￥1000</li>
          <li class="userInfoLis">支付状态：已支付</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<style  scoped>
.myticketdetails {
  width: 100%;
  min-height: 100vh;
  background: #f4f4f4;
  padding: 20rpx;
  box-sizing: border-box;
}
.mainHeader {
  width: 100%;
  padding: 35rpx 30rpx;
  box-sizing: border-box;
  border-radius: 15rpx;
  background: white;
  margin-bottom: 10rpx;
}
.shopHeader {
  display: flex;
  padding-bottom: 40rpx;
  box-sizing: border-box;
}
.headerLogo {
  width: 226rpx;
  height: 154rpx;
  margin-right: 30rpx;
  background: rebeccapurple;
}
.headerLogo img {
  width: 100%;
  height: 100%;
}
.headerText {
  font-size: 30rpx;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.border {
  padding: 30rpx;
  box-sizing: border-box;
  border-top: 1px solid #f1f1f1;
  align-items: center;
  display: flex;
}
.timeLogo {
  display: flex;
  align-self: auto;
  width: 30rpx;
  height: 30rpx;
  margin-right: 15rpx;
}
.timeLogo img {
  width: 100%;
  height: 100%;
}
.timeText {
  font-size: 30rpx;
  color: #666;
}
.mapLogo {
  display: block;
  width: 28rpx;
  height: 34rpx;
  margin-right: 15rpx;
}
.mapLogo img {
  width: 100%;
  height: 100%;
}
.code {
  width: 100%;
  border-radius: 15rpx;
  background: white;
  margin-bottom: 40rpx;
  padding-bottom: 60rpx;
  box-sizing: border-box;
}
.codeH3 {
  padding: 0 30rpx;
  box-sizing: border-box;
  font-size: 30rpx;
  font-weight: 600;
  line-height: 90rpx;
  border-bottom: 1px solid #f1f1f1;
}
.codeIcon {
  padding: 85rpx 0;
  box-sizing: border-box;
}
.icon {
  width: 220rpx;
  height: 220rpx;
  margin: 0 auto;

  background: black;
}
.icon img {
  width: 100%;
  height: 100%;
}
.uls {
  display: flex;
  flex-wrap: wrap;
}
.userInfo {
  padding: 0 30rpx;
  box-sizing: border-box;
}
.userInfoLis {
  width: 49%;
  line-height: 65rpx;
  border: 1px solid #f1f1f1;
  font-size: 25rpx;
  color: #646464;
  padding-left: 15rpx;
  box-sizing: border-box;
  margin-bottom: 20rpx;
}
.right {
  margin-right: 2%;
}
</style>