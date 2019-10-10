<template>
  <div class="signin">
    <div class="signinBanner">
      <img src="../../../static/images/signinBnner.png" alt />
    </div>
    <div class="sinfninmain">
      <section class="basic">
        <h3 class="h3">第三节上海国际互联网家居节&第六届中国建材家居产业发展大会</h3>
        <p class="number">
          <span>报名 1200</span>
          <span>剩余 300</span>
        </p>
        <p class="money">￥1000</p>
        <p class="time">
          <span class="timeLogo">
            <img src="../../../static/images/time.png" alt />
          </span>
          <span class="Text">2019.10/20 08:30-2019.10/21 08:30</span>
        </p>
        <p class="map">
          <span class="mapLogo">
            <img src="../../../static/images/map.png" alt />
          </span>
          <span class="Text">北京市海淀区xxxx大厦</span>
        </p>
      </section>
      <section class="domain">
        <div class="domainLogo">
          <img src="../../../static/images/home.png" alt />
        </div>
        <div class="domainText">中国建筑协会</div>
      </section>
      <section class="details">
        <h3 class="detailsH3">会议详情</h3>
        <div
          class="detailsText"
        >xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
      </section>
    </div>
    <section class="reservation">
      <div class="reservationIcon">
        <div class="reservationIconLogo">
          <img src="../../../static/images/zfreservation.png" alt />
        </div>
        <p class="reservationIconText">分享</p>
      </div>
      <span class="reser" @click="reser">订座报名</span>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    reser() {
      wx.navigateTo({
        url: "../confirm/main" //确定订单
      });
    }
  }
};
</script>
<style scoped>
.signinBanner {
  width: 100%;
  height: 350rpx;
}
.signinBanner img {
  width: 100%;
  height: 100%;
}
.sinfninmain {
  background: #f1f1f1;
}
.basic {
  padding: 30rpx 20rpx;
  box-sizing: border-box;
  background: white;
}
.h3 {
  font-size: 38rpx;
  font-weight: 700;
}
.number {
  padding-left: 10rpx;
  display: flex;
  font-size: 25rpx;
  color: #999;
  margin: 20rpx 0 55rpx 0;
}
.number > span:nth-child(2) {
  margin-left: 10rpx;
}
.money {
  padding-left: 20rpx;
  font-size: 38rpx;
  font-weight: 700;
  color: #0070cc;
}
.time {
  display: flex;
  align-items: center;
  margin: 50rpx 0;
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
.Text {
  font-size: 30rpx;
  color: #666;
}
.map {
  align-items: center;
  display: flex;
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
.domain {
  margin: 10rpx 0;
  padding: 20rpx;
  box-sizing: border-box;
  background: white;
  display: flex;
  align-items: center;
}
.domainLogo {
  display: flex;
  align-self: auto;
  width: 32rpx;
  height: 30rpx;
  margin-right: 15rpx;
}
.domainLogo img {
  width: 100%;
  height: 100%;
}
.domainText {
  font-size: 32rpx;
  color: #666;
}
.details {
  padding: 40rpx 20rpx;
  box-sizing: border-box;
  background: white;
}
.detailsH3 {
  font-size: 35rpx;
  font-weight: 700;
  margin-bottom: 25rpx;
}
.detailsText {
  font-size: 25rpx;
  color: #999999;
  word-wrap: break-word;
  word-break: normal;
}
.reservation {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #ccc;
  background: white;
  z-index: 99;
  padding: 10rpx 20rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.reser {
  display: block;
  width: 630rpx;
  border-radius: 50rpx;
  font-size: 30rpx;
  font-weight: 700;
  color: white;
  text-align: center;
  line-height: 75rpx;
  background: #0070cc;
}
.reservationIconLogo {
  width: 33rpx;
  height: 33rpx;
  margin: 0 auto;
}
.reservationIconLogo img {
  width: 100%;
  height: 100%;
}
.reservationIconText {
  margin-top: 5rpx;
  font-size: 23rpx;
  color: black;
}
</style>