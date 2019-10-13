<template>
  <div class="signin">
    <div class="signinBanner">
      <img :src="signinData.cover" alt />
    </div>
    <div class="sinfninmain">
      <section class="basic">
        <h3 class="h3">{{signinData.title}}</h3>
        <p class="number">
          <span>报名 {{signinData.apply_number}}</span>
          <span>剩余 {{signinData.number - signinData.apply_number}}</span>
        </p>
        <p class="money">￥{{signinData.amount}}</p>
        <p class="time">
          <span class="timeLogo">
            <img src="/static/images/time.png" alt />
          </span>
          <span class="Text">{{start_time}}-{{end_time}}</span>
        </p>
        <p class="map">
          <span class="mapLogo">
            <img src="/static/images/map.png" alt />
          </span>
          <span class="Text">{{signinData.address}}</span>
        </p>
      </section>
      <section class="domain">
        <div class="domainLogo">
          <img src="/static/images/home.png" alt />
        </div>
        <div class="domainText">{{signinData.organizer}}</div>
      </section>
      <section class="details">
        <h3 class="detailsH3">会议详情</h3>
        <div class="detailsText">{{signinData.content}}</div>
      </section>
    </div>
    <section class="reservation">
      <button open-type="share" class="reservationIcon">
        <div class="reservationIconLogo">
          <img src="/static/images/zfreservation.png" alt />
        </div>
        <p class="reservationIconText">分享</p>
      </button>
      <!-- <div class="reservationIcon">
        <div class="reservationIconLogo">
          <img src="/static/images/zfreservation.png" alt />
        </div>
        <p class="reservationIconText">分享</p>
      </div>-->
      <span class="reser" @click="reser">订座报名</span>
    </section>
    <section class="notlogged" v-if="loggetIsHide">
      <div class="logget">
        <div class="loggetLogo"></div>
        <div class="loggetText">
          <p class="loggetTitle">您还未登录</p>
          <p class="loggetSubTitle">（请先登录/注册再进行此操作）</p>
          <span class="goLogin" @click="goLogin">去登录</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import navigationBar from "../../../components/navigationBar";

export default {
  data() {
    return {
      item: null,
      signinData: {},
      loggetIsHide: false //未登录弹框
    };
  },
  onShareAppMessage: function(res) {
    if (res.from == "button") {
      console.log(res, "res");
    }
  },
  components: { navigationBar },
  computed: {
    start_time() {
      //开始时间
      let start_time = String(this.signinData.start_time).split(":");
      return `${start_time[0]}:${start_time[1]}`;
    },
    end_time() {
      //结束时间
      let end_time = String(this.signinData.end_time).split(":");
      return `${end_time[0]}:${end_time[1]}`;
    }
  },
  onLoad(v) {
    this.item = JSON.parse(v.item);
    this.init(this.item.id);
  },
  methods: {
    goLogin() {
      wx.reLaunch({
        url: "../../login/main"
      });
      this.loggetIsHide = false;
    },
    init(id) {
      this.axios
        .post({
          url: "/api/meeting/detail",
          data: { meeting_id: id }
        })
        .then(res => {
          if (res.data.status == "200") {
            this.signinData = res.data.data;
          }
        });
    },
    reser() {
      this.axios
        .post({
          url: "/api/order/index",
          data: { meeting_id: this.item.id }
        })
        .then(res => {
          if (res.data.status == "200") {
            wx.navigateTo({
              url: `../confirm/main?meeting_id=${
                this.item.id
              }&item=${JSON.stringify(res.data.data)}` //确定订单
            });
          } else if (res.data.status == "401") {
            this.loggetIsHide = true;
          }
        });
    }
  }
};
</script>
<style scoped>
.signin {
  position: relative;
}
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
.reservationIcon {
  background: transparent;
  padding: 0;
  margin: 0;
}
.reservationIcon::after {
  border: none;
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
  margin-top: 15rpx;
  font-size: 23rpx;
  color: black;
}
.notlogged {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  padding: 190rpx 80rpx 0 80rpx;
  box-sizing: border-box;
}
.logget {
  width: 100%;
  height: 580rpx;
  background: white;
  border-radius: 15rpx;
  position: relative;
  padding: 0 45rpx;
  box-sizing: border-box;
}
.loggetLogo {
  width: 306rpx;
  height: 285rpx;
  background: red;
  position: absolute;
  top: -120rpx;
  left: 50%;
  transform: translateX(-50%);
}
.loggetLogo > img {
  width: 100%;
  height: 100%;
}
.loggetText {
  padding-top: 230rpx;
  width: 100%;
  height: 100rpx;
  text-align: center;
  box-sizing: border-box;
}
.loggetTitle,
.loggetSubTitle {
  line-height: 50rpx;
}
.loggetTitle {
  font-size: 30rpx;
  font-weight: 500;
}
.loggetSubTitle {
  font-size: 27rpx;
  color: #666666;
}
.goLogin {
  display: block;
  border-radius: 50rpx;
  text-align: center;
  width: 100%;
  line-height: 90rpx;
  color: white;
  font-size: 30rpx;
  font-weight: 500;
  margin-top: 70rpx;
  background: #0070cc;
}
</style>