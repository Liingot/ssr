<template>
  <div class="confirm">
    <section class="shop">
      <div class="shopHeader">
        <div class="headerLogo">
          <img :src="item.meeting.cover" alt />
        </div>
        <div class="headerText">{{item.meeting.title}}</div>
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
        <span class="timeText">{{item.meeting.address}}</span>
      </p>
      <div class="money border">
        <div class="moneyLeft">
          <span class="moneyLogo">
            <img src="/static/images/money.png" alt />
          </span>
          <span class="timeText">票价</span>
        </div>
        <span class="moneyRight">￥{{money}}/一张</span>
      </div>
      <div class="number border">
        <div class="moneyLeft">
          <span class="moneyLogo" style="width:26rpx;height:26rpx;">
            <img src="/static/images/number.png" alt />
          </span>
          <span class="timeText">数量</span>
        </div>
        <div class="numberEdit">
          <span class="off" @click="off">-</span>
          <span class="num">{{number}}</span>
          <span class="add" @click="add">+</span>
        </div>
      </div>
    </section>
    <section class="personnel">
      <div class="personnelHeader">
        <div class="personnelLogo">
          <img src="/static/images/tel.png" alt />
        </div>
        <div class="personnelText">选择参会人员</div>
      </div>
      <div class="personnelList">
        <div class="listTr">
          <span>姓名</span>
          <span>岗位</span>
        </div>
        <ul class="uls">
          <li class="lis" v-for="(item,index) in item.userList" :key="index">
            <span>{{item.username}}</span>
            <span>{{item.phone}}</span>
          </li>
        </ul>
      </div>
    </section>
    <section class="instructions">
      <p class="inst">说明</p>
      <span class="instText">
        <p>座位预定有效期至会议开始前3天，请及时支付。</p>
        <p>若未支付，座位将被释放</p>
      </span>
    </section>
    <section class="soft">
      <div class="sortNum">
        <span>合计：</span>
        <span>￥{{soft}}元</span>
      </div>
      <span class="confir" @click="pay">订座</span>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      money: 1000,
      number: 1,
      meeting_id: "", //会议id
      userList: [],
      item: {}
    };
  },
  onLoad(v) {
    this.meeting_id = v.id;
    this.item = JSON.parse(v.item);
    console.log(this.item);
  },
  computed: {
    soft() {
      //总和
      return this.number * this.money;
    },
    start_time() {
      //开始时间
      let start_time = String(this.item.meeting.start_time).split(":");
      return `${start_time[0]}:${start_time[1]}`;
    },
    end_time() {
      //结束时间
      let end_time = String(this.item.meeting.end_time).split(":");
      return `${end_time[0]}:${end_time[1]}`;
    }
  },
  methods: {
    off() {
      if (this.number <= 1) return (this.number = 1);
      else this.number--;
    },
    add() {
      this.number++;
    },
    pay() {
      wx.setStorage({ key: "soft", data: this.soft });
      wx.navigateTo({
        url: "../pay/main" //支付订单
      });
    }
  }
};
</script>
<style  scoped>
.confirm {
  width: 100%;
  min-height: 100vh;
  background: #0070cc;
  /* background: url(https://img-blog.csdnimg.cn/20191010150102879.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zOTc3MzIxOA==,size_16,color_FFFFFF,t_70)
    no-repeat; */
  background-size: cover;
  padding: 40rpx 20rpx 0 20rpx;
  box-sizing: border-box;
  position: relative;
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
.money {
  justify-content: space-between;
}
.moneyLeft {
  display: flex;
  align-items: center;
}
.moneyLogo {
  width: 30rpx;
  height: 30rpx;
  display: flex;
  align-self: auto;
  margin-right: 15rpx;
}
.moneyLogo img {
  width: 100%;
  height: 100%;
}
.moneyRight {
  font-size: 33rpx;
  font-weight: 500;
}
.number {
  justify-content: space-between;
}
.numberEdit {
  display: flex;
}
.off,
.add {
  display: block;
  width: 40rpx;
  height: 40rpx;
  border-radius: 50%;
  text-align: center;
  line-height: 40rpx;
  font-size: 30rpx;
}
.num {
  font-size: 30rpx;
  font-weight: 500;
  margin: 0 15rpx;
}
.off {
  border: 1px solid #0070cc;
  color: #0070cc;
}
.add {
  background: #0070cc;
  color: white;
}
.personnelHeader {
  display: flex;
  align-items: center;
  padding: 30rpx 25rpx;
  box-sizing: border-box;
}
.personnelLogo {
  width: 33rpx;
  height: 33rpx;
  margin-right: 15rpx;
}
.personnelLogo img {
  width: 100%;
  height: 100%;
}
.personnelText {
  font-size: 30rpx;
}
.listTr {
  border-radius: 10rpx;
  background: white;
  text-align: center;
  display: flex;
}
.listTr > span {
  display: block;
  width: 50%;
  font-size: 30rpx;
  font-weight: 550;
  line-height: 60rpx;
}
.lis {
  display: flex;
  background: #f9f9f9;
  position: relative;
  text-align: center;
  border-top: 1px solid #f1f1f1;
}
.lis:first-child {
  border: none;
}
.lis > span {
  display: block;
  width: 50%;
  line-height: 60rpx;
  font-size: 27rpx;
  color: #666666;
}
.instructions {
  padding: 25rpx;
  box-sizing: border-box;
  background: #eaf6ff;
  border: 1px solid #48a0e8;
  margin-top: 20rpx;
}
.inst {
  font-size: 26rpx;
  padding-left: 15rpx;
  font-weight: 600;
  color: #48a0e8;
  position: relative;
  margin-bottom: 20rpx;
}
.inst::before {
  content: "*";
  color: #48a0e8;
  position: absolute;
  left: -1%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20rpx;
}
.instText > p {
  font-size: 25rpx;
  color: #666666;
}
.soft {
  width: 100%;
  height: 100rpx;
  position: fixed;
  left: 0;
  bottom: 0;
  background: white;
  z-index: 99;
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
</style>