<template>
  <div class="myticket">
    <header class="header">
      <div class="use" :class="{'border_bottom':addborder}" @click="border('未使用')">未使用（{{use}}）</div>
      <span class="li"></span>
      <div class="has" :class="{'border_bottom':!addborder}" @click="border('已使用')">已使用（{{has}}）</div>
    </header>
    <section class="myticketMain">
      <section class="listChildren" v-for="(item,index) in 2" :key="index" @click="details(item)">
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
        <div class="filter" :class="{'useClass':addborder , 'hasClass' : !addborder}"></div>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      use: 1,
      has: 2,
      addborder: true
    };
  },
  methods: {
    border(v) {
      if (v == "未使用") this.addborder = true;
      else this.addborder = false;
    },
    details() {
      //票卷详情
      wx.navigateTo({ url: "../myTicketDetails/main" });
    }
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
  /* align-items: center; */
  padding: 20rpx 100rpx 0 100rpx;
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
.li {
  display: block;
  width: 5rpx;
  height: 30rpx;
  background: #f4f4f4;
  margin-top: 10rpx;
}
.myticketMain {
  padding: 20rpx;
  box-sizing: border-box;
  background: #f4f4f4;
}
.listChildren {
  background: white;
  /* margin-bottom: 10rpx; */
  border-radius: 15rpx;
  padding: 30rpx 15rpx;
  display: flex;
  position: relative;
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
.filter {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 15rpx;
}
.useClass {
  background: url(https://img-blog.csdnimg.cn/20191010150537433.png) no-repeat
      right 60%,
    rgba(255, 255, 255, 0.5);
  background-size: 20%;
}
.hasClass {
  background: url(https://img-blog.csdnimg.cn/20191010150450817.png) no-repeat
      right 60%,
    rgba(255, 255, 255, 0.8);
  background-size: 20%;
}
</style>