<template>
  <div class="pay confirm">
    <section>
      <section class="shop">
        <div class="shopHeader">
          <div class="headerLogo"></div>
          <div class="headerText">{{data.meeting.title}}</div>
        </div>
        <p class="time border">
          <span class="timeLogo">
            <img src="/static/images/time.png" alt />
          </span>
          <span class="timeText">{{start_time}}-{{end_time}}</span>
        </p>
        <p class="map border">
          <span class="mapLogo">
            <img src="/static/images/map.png" alt />
          </span>
          <span class="timeText">{{data.meeting.address}}</span>
        </p>
      </section>
      <div>
        <section class="success" v-for="(item,index) in data.order_ids" :key="index">
          <div class="successTop">
            <div class="successLogo">
              <img src="/static/images/wx.png" alt />
            </div>
            <div class="text">订座成功！</div>
          </div>
          <p class="successText">订单号：{{item.order_sn}}，请及时付款，避免座位释放。</p>
        </section>
      </div>
      <section class="vesway">
        <ul class="veswayUls">
          <li class="veswayTitle">选择支付方式</li>
          <li
            class="veswayIcon"
            v-for="(item,index) in items"
            :key="index"
            :class="{'icon':index == 0}"
          >
            <div class="vaswayLogo">
              <div class="payLogo">
                <img :src="item.img" alt />
              </div>
              <span class="vaswayText">{{item.title}}</span>
            </div>
            <radio-group @change="radioChange(item)">
              <radio :checked="item.checked"></radio>
            </radio-group>
          </li>
        </ul>
      </section>
      <section class="vesway" v-if="items[1].checked" style="margin-top:20rpx;">
        <div class="xxHeader">线下转账信息</div>
        <div class="xxContent">
          <p class="xxcontentText">
            <span class="xxleft">户名</span>
            <span class="xxright">北京中装商学院有限公司</span>
          </p>
          <p class="xxcontentText">
            <span class="xxleft">账户</span>
            <span class="xxright">xxxxxxxx</span>
          </p>
          <p class="xxcontentText">
            <span class="xxleft">开户行</span>
            <span class="xxright">招商</span>
          </p>
        </div>
      </section>
    </section>
    <section class="soft">
      <div class="sortNum">
        <span>合计：</span>
        <span>￥{{soft}}</span>
      </div>
      <span class="confir" @click="pay">立即支付</span>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      offline: false, //线下支付
      items: [
        {
          title: "微信支付",
          checked: true,
          img: "/static/images/wx.png"
        },
        {
          title: "线下支付",
          img: "/static/images/xx.png",
          checked: false
        }
      ],
      meeting_id: 0, //会议id
      data: null
    };
  },
  computed: {
    soft() {
      return wx.getStorageSync("soft");
    },
    start_time() {
      //开始时间
      let start_time = String(this.data.meeting.start_time).split(":");
      return `${start_time[0].replace(/-/g, "/")}:${start_time[1]}`;
    },
    end_time() {
      //结束时间
      let end_time = String(this.data.meeting.end_time).split(":");
      return `${end_time[0].replace(/-/g, "/")}:${end_time[1]}`;
    }
  },
  onLoad(v) {
    this.data = JSON.parse(v.data);
    this.meeting_id = v.meeting_id;
    console.log(this.data, "data");
  },
  methods: {
    pay() {
      //立即支付
      if (!this.items[1].checked) {
        //微信支付
        let query = {
          order_ids: JSON.stringify(this.data.order_ids), //订单号群
          meeting_id: this.meeting_id, //会议id
          total_amount: String(wx.getStorageSync("soft")), //总价
          unique_sn: this.data.unique_sn //订单唯一标识
        };
        this.axios
          .post({
            url: "/api/payment",
            data: query
          })
          .then(res => {
            if (res.data.status == "200") {
              let data = res.data.data;
              wx.requestPayment({
                timeStamp: String(data.timeStamp),
                nonceStr: String(data.nonceStr),
                package: String(data.package),
                paySign: String(data.paySign),
                signType: "MD5",
                success(res) {
                  wx.navigateTo({
                    url: "../../moduleMy/paysState/main?state=" + 1 //已支付
                  });
                },
                fail(res) {
                  wx.navigateTo({
                    url: "../../moduleMy/paysState/main?state=" + 0 //待支付
                  });
                }
              });
            }
          });
      } else {
        //线下支付
        this.axios
          .post({
            url: "/api/order/offLine",
            data: { unique_sn: this.data.unique_sn }
          })
          .then(res => {
            if (res.data.status == "200") {
              wx.navigateTo({
                url: "../../moduleMy/paysState/main?state=" + 0
              }); //待支付
            }
          });
      }
    },
    radioChange(e) {
      this.items.find(res => {
        if (res.title == e.title) res.checked = true;
        else res.checked = false;
      });
    }
  }
};
</script>
<style  scoped>
.confirm {
  width: 100%;
  height: 100vh;
  /* overflow-y: auto; */
  /* -webkit-overflow-scrolling: touch; */
  background: #0070cc;
  background: url(https://img-blog.csdnimg.cn/20191010150102879.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zOTc3MzIxOA==,size_16,color_FFFFFF,t_70)
    no-repeat;
  background-size: cover;
  padding: 40rpx 20rpx 120rpx 20rpx;
  box-sizing: border-box;
  position: relative;
  overflow: auto;
}
.shop {
  width: 100%;
  border-radius: 15rpx;
  background: white;
  padding-top: 40rpx;
  box-sizing: border-box;
}
.shopHeader {
  display: flex;
  padding: 0 30rpx 40rpx 30rpx;
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
.soft {
  width: 100%;
  height: 100rpx;
  position: fixed;
  left: 0;
  bottom: 0;
  background: white;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20rpx;
  box-sizing: border-box;
}
.softNum {
  display: flex;
}
.sortNum > span:nth-child(1) {
  font-size: 25rpx;
  color: #ccc;
}
.sortNum > span:nth-child(2) {
  font-size: 35rpx;
  font-weight: 600;
  color: #0070cc;
}
.confir {
  display: block;
  width: 435rpx;
  line-height: 80rpx;
  text-align: center;
  font-size: 30rpx;
  font-weight: 600;
  color: white;
  border-radius: 50rpx;
  background: #0070cc;
}
.success {
  padding: 35rpx 25rpx;
  box-sizing: border-box;
  background: #eaf6ff;
  border: 1px solid #48a0e8;
  margin: 20rpx 0;
}
.successTop {
  display: flex;
  align-items: center;
}
.successLogo {
  width: 39rpx;
  height: 36rpx;
  margin-right: 15rpx;
}
.successLogo img {
  width: 100%;
  height: 100%;
}
.text {
  font-size: 30rpx;
  color: #333;
}
.successText {
  margin-top: 20rpx;
  font-size: 27rpx;
  color: #666666;
}
.vesway {
  background: white;
  border-radius: 10rpx;
}
.veswayUls > li {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 30rpx 20rpx;
  box-sizing: border-box;
}
.veswayTitle,
.xxHeader {
  font-size: 32rpx;
  font-weight: 600;
}
.xxHeader {
  padding: 30rpx 20rpx;
  /* line-height: 60rpx; */
  box-sizing: border-box;
  border-bottom: 1px solid #f1f1f1;
}
.xxContent {
  padding: 30rpx 20rpx;
  box-sizing: border-box;
}
.xxcontentText {
  display: flex;
  line-height: 70rpx;
}
.xxleft,
.xxright {
  font-size: 26rpx;
}
.xxleft {
  color: #888888;
  margin-right: 35rpx;
}
.icon {
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
}
.vaswayLogo {
  display: flex;
  align-items: center;
}
.payLogo {
  width: 39rpx;
  height: 36rpx;
  margin-right: 15rpx;
}
.payLogo img {
  width: 100%;
  height: 100%;
}
.vaswayText {
  font-size: 30rpx;
  font-weight: 500;
}
</style>