<template>
  <div class="my">
    <header class="header">
      <div class="headerInfo">
        <div class="logo" @click="personal"></div>
        <span class="infotText">
          <p class="company" @click="login">{{company}}</p>
          <p class="name">{{userName}}</p>
        </span>
      </div>
      <div class="certification" v-if="trck">
        <div class="infoType" v-if="certification"></div>
        <span v-else class="goCertifi" @click="enter">去认证</span>
      </div>
    </header>
    <section class="getTicket">
      <div class="tickTop">
        <span class="myTick">我的票券</span>
        <div class="fall">
          <span class="fallText" @click="myTicket">全部票券</span>
          <div class="fallIcon"></div>
        </div>
      </div>
      <div class="tickContent listChildren" @click="details">
        <div class="listPhoto">
          <img src="/static/images/index1111.jpg" alt />
        </div>
        <div class="listText">
          <div class="listTextTop">123123213123123123123123</div>
          <div class="listTextBottom">
            <span>10月30日 周三</span>
            <div class="info">
              <div class="infoLogo">
                <img src="/static/images/map.png" alt />
              </div>
              <span>北京</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="order">
      <div class="orderContent" @click="paysState(0)">
        <my-info></my-info>
        <div class="orderIcon"></div>
        <p class="orderText">待支付</p>
      </div>
      <div class="orderContent" @click="paysState(1)">
        <my-info :num="2"></my-info>
        <div class="orderIcon"></div>
        <p class="orderText">已支付</p>
      </div>
      <div class="orderContent" @click="paysState(2)">
        <my-info :num="3"></my-info>
        <div class="orderIcon"></div>
        <p class="orderText">已结束</p>
      </div>
      <div class="orderContent" style="border:none;" @click="paysState(3)">
        <div class="orderIcon"></div>
        <p class="orderText">全部订单</p>
      </div>
    </section>
    <section class="other">
      <ul class="otherUls">
        <li class="otherLis" v-for="(item,index) in otherList" :key="index" @click="build(item)">
          <span class="otherText">{{item}}</span>
          <div class="fallIcon"></div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import myInfo from "../../components/myInfo"; //订单个状态的数量(待支付，已支付，已结束)
export default {
  data() {
    return {
      otherList: [
        "我的企业",
        "会议展板",
        "我的发票",
        "添加到我的小程序",
        "报错反馈"
      ],
      userName: "xxx", //用户姓名
      company: "北京细水有限公司", //公司名字
      avatar: "", //用户头像
      trck: true, //判断当前用户是否登录
      certification: false, //判断当前用户是否认证
      stored: false //待审核状态
    };
  },
  components: { myInfo },
  mounted() {
    let s = 0; //未登录状态
    let b = 0; //未认证状态
    // if (!s) {
    //   this.userName = "登录后体验更多功能";
    //   this.company = "点击登录";
    //   this.trck = false;
    //   this.avatar = ""; //默认头像
    //   return;
    // }
    if (!b) {
      this.company = "暂未认证公司";
      this.avatar = "";
      this.certification = false; //未认证的时候为false
    }
  },
  methods: {
    build(v) {
      switch (v) {
        case "我的企业":
          wx.navigateTo({ url: "../moduleMy/mybrand/main" });
          break;

        default:
          break;
      }
    },
    personal() {
      //个人资料
      wx.navigateTo({ url: "../moduleMy/personalData/main" });
    },
    paysState(v) {
      //订单状态
      wx.navigateTo({ url: "../moduleMy/paysState/main?state=" + v });
    },
    login() {
      if (!this.trck)
        wx.navigateTo({
          url: "../login/main"
        });
    },
    enter() {
      //公司认证
      wx.navigateTo({
        url: "../moduleMy/enterprisesEnter/main"
      });
    },
    myTicket() {
      //我的票券
      wx.navigateTo({
        url: "../moduleMy/myTicket/main"
      });
    },
    details() {
      //票券详情
      wx.navigateTo({ url: "../moduleMy/myTicketDetails/main" });
    }
  }
};
</script>
<style  scoped>
.my {
  width: 100%;
  min-height: 100vh;
  background: url(https://img-blog.csdnimg.cn/20191010150102879.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zOTc3MzIxOA==,size_16,color_FFFFFF,t_70)
    no-repeat;
  background-size: cover;
  padding: 50rpx 20rpx 20rpx 20rpx;
  box-sizing: border-box;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.headerInfo {
  display: flex;
  align-items: center;
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
.company {
  font-size: 30rpx;
  font-weight: 600;
  color: white;
  margin-bottom: 25rpx;
}
.name {
  font-size: 30rpx;
  color: white;
}
.infoType {
  width: 108rpx;
  height: 43rpx;
  background: red;
}
.infoType img {
  width: 100%;
  height: 100%;
}
.getTicket {
  border-radius: 15rpx;
  background: white;
  margin: 30rpx 0 25rpx 0;
}
.tickTop {
  padding: 25rpx 20rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
}
.myTick {
  font-size: 33rpx;
  font-weight: 600;
}
.fall {
  display: flex;
  align-items: center;
}
.listChildren {
  background: white;
  margin-bottom: 10rpx;
  padding: 25rpx 20rpx;
  box-sizing: border-box;
  display: flex;
}
.listPhoto {
  width: 230rpx;
  height: 155rpx;
  border-radius: 5rpx;
  background: yellowgreen;
  margin-right: 30rpx;
}
.listPhoto img {
  width: 100%;
  height: 100%;
}
.listTextTop {
  font-size: 28rpx;
  font-weight: 600;
  padding-bottom: 45rpx;
  box-sizing: border-box;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-all;
}
.listTextBottom {
  font-size: 20rpx;
  display: flex;
  justify-content: space-between;
  color: #999999;
}
.info {
  display: flex;
}
.infoLogo {
  width: 28rpx;
  height: 34rpx;
  margin-right: 15rpx;
}
.infoLogo img {
  width: 100%;
  height: 100%;
}
.fallText {
  font-size: 28rpx;
  color: #ccc;
}
.fallIcon {
  width: 15rpx;
  height: 25rpx;
  margin-left: 15rpx;
  background: #999999;
}
.fallIcon img {
  width: 100%;
  height: 100%;
}
.order {
  display: flex;
  background: white;
  border-radius: 15rpx;
  padding: 30rpx 0;
  box-sizing: border-box;
  margin-bottom: 20rpx;
}
.order > div {
  width: 25%;
}
.orderContent {
  position: relative;
  text-align: center;
  border-right: 1px solid #f1f1f1;
}
.orderIcon {
  width: 50rpx;
  height: 50rpx;
  margin: 0 auto;
  background: rebeccapurple;
}
.orderText {
  font-size: 28rpx;
  margin-top: 10rpx;
}
.other {
  background: white;
  border-radius: 15rpx;
  padding: 0 20rpx;
  box-sizing: border-box;
}
.otherLis {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx 0;
  box-sizing: border-box;
  border-top: 1px solid #f1f1f1;
}
.otherLis:first-child {
  border: none;
}
.otherText {
  font-size: 30rpx;
  font-weight: 500;
}
.goCertifi {
  padding: 0 20rpx;
  box-sizing: border-box;
  font-size: 23rpx;
  text-align: center;
  border-radius: 15rpx;
  background: white;
  color: #0070cc;
  line-height: 35rpx;
}
</style>