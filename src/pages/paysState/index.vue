<template>
  <div class="paysstate myticket">
    <header class="header">
      <div
        v-for="(item,index) in stateList"
        :key="index"
        :class="{'border_bottom':borderIndex == index}"
        @click="borderactive(index)"
      >{{item}}</div>
    </header>
    <section class="stateContent">
      <div class="content" v-for="(item,index) in 2" :key="index">
        <div class="contentHeader">
          <div class="icon"></div>
          <span class="contentheaderText">订单号：88888888</span>
        </div>
        <section class="listChildren">
          <!--  @click="details(item)" -->
          <div class="listPhoto">
            <img src="../../../static/images/index1111.jpg" alt />
          </div>
          <div class="listText">
            <div class="listTextTop">123123213123123123123123</div>
            <div class="listTextBottom">
              <span>10月30日 周三</span>
              <div class="info">
                <div class="infoLogo">
                  <img src="../../../static/images/map.png" alt />
                </div>
                <span>北京</span>
              </div>
            </div>
          </div>
        </section>
        <section class="operation">
          <div class="oper">
            <span class="pay" v-if="borderIndex == 0">去支付</span>
            <span class="cancel" v-if="borderIndex == 1" @click="refund
">取消订单</span>
            <span class="cancel" v-if="borderIndex == 2">申请开票</span>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>
<script>
import "../../../static/wxss/conetnt.wxss";
export default {
  data() {
    return {
      stateList: ["待支付", "已支付", "已结束", "全部订单"],
      borderIndex: 0
    };
  },
  onLoad(v) {
    //state判断当前是哪一个状态
    this.borderIndex = v.state;
    // this.state(v.state);
  },
  methods: {
    refund() {
      //取消订单
      wx.navigateTo({ url: `../refund/main` });
    },
    borderactive(index) {
      this.borderIndex = index;
    }
    // state(v) {
    //   switch (v) {
    //     case "待支付":
    //       this.borderIndex = 0;
    //       break;
    //     case "已支付":
    //       this.borderIndex = 1;
    //       break;
    //     case "已结束":
    //       this.borderIndex = 2;
    //       break;
    //     case "全部订单":
    //       this.borderIndex = 3;
    //       break;
    //     default:
    //       this.borderIndex = 0;
    //       break;
    //   }
    // }
  }
};
</script>
<style  scoped>
.myticket {
  width: 100%;
  height: 100vh;
  background: #f4f4f4;
}
.border_bottom {
  border-bottom: 1px solid #0070cc;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 20rpx 20rpx 0 20rpx;
  box-sizing: border-box;
  background: white;
}
.header > div {
  font-size: 30rpx;
  font-weight: 500;
  color: #222222;
  text-align: center;
  padding-bottom: 30rpx;
  box-sizing: border-box;
}
.stateContent {
  padding: 20rpx;
  box-sizing: border-box;
}
.content {
  background: white;
  margin-bottom: 10rpx;
}
.contentHeader {
  width: 100%;
  padding: 20rpx 10rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.icon {
  width: 30rpx;
  height: 30rpx;
  background: red;
  margin-right: 15rpx;
}
.icon img {
  width: 100%;
  height: 100%;
}
.contentheaderText {
  font-size: 28rpx;
  color: #666;
}
.operation {
  padding: 15rpx 20rpx;
  box-sizing: border-box;
  border-top: 1px solid #f1f1f1;
  display: flex;
  justify-content: flex-end;
}
.oper {
  display: flex;
}
.oper > span {
  display: block;
  text-align: center;
  width: 160rpx;
  border-radius: 50rpx;
  line-height: 50rpx;
  font-size: 26rpx;
}
.pay {
  color: white;
  background: #0070cc;
  /* margin-left: 10rpx; */
}
.cancel {
  color: #666;
  border: 1px solid #f1f1f1;
}
</style>