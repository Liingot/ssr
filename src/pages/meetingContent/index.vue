<template>
  <div class="metting">
    <section class="mettingMain">
      <ul class="mettingUls">
        <li class="lis" v-for="(item,index) in list " :key="index">
          <div class="listContent" @click="go(item.leftText)">
            <div class="logo"></div>
            <p class="text">{{item.leftText}}</p>
          </div>
          <div class="listContent" v-if="item.rightText" @click="go(item.rightText)">
            <div class="logo"></div>
            <p class="text">{{item.rightText}}</p>
          </div>
        </li>
      </ul>
      <div class="share">分享给好友</div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          leftText: "会议指南",
          leftImg: "",
          rightText: "报名参会",
          rightImg: ""
        },
        {
          leftText: "议程安排",
          leftImg: "",
          rightText: "会议集锦",
          rightImg: ""
        },
        { leftText: "品牌企业", leftImg: "" }
      ]
    };
  },
  onLoad(v) {},
  methods: {
    go(v) {
      if (v === "报名参会") {
        wx.navigateTo({
          url: "../signin/main"
        });
      }
    }
  }
};
</script>
<style  scoped>
.metting {
  width: 100%;
  height: 100vh;
  padding: 240rpx 40rpx 0 40rpx;
  box-sizing: border-box;
  background: url(https://lawfirm-production.oss-cn-beijing.aliyuncs.com/banner.png)
      no-repeat,
    #0273cf;
  background-size: contain;
}
.mettingUls {
  width: 100%;
  margin-bottom: 90rpx;
}
.lis {
  margin-bottom: 20rpx;
  display: flex;
  justify-content: space-between;
}
.listContent {
  width: 48%;
  background: yellowgreen;
  padding: 50rpx 0;
  box-sizing: border-box;
}
.logo {
  width: 80rpx;
  height: 75rpx;
  background: wheat;
  margin: 0 auto;
}
.logo img {
  width: 100%;
  height: 100%;
}
.text {
  margin-top: 40rpx;
  text-align: center;
  color: white;
  font-size: 30rpx;
  font-weight: 500;
}
.share {
  border: 1px solid #014f8f;
  border-radius: 50rpx;
  background: #014f8f;
  line-height: 85rpx;
  text-align: center;
  color: white;
  font-size: 25rpx;
  position: relative;
}
.share::before {
  content: "";
  width: 30rpx;
  height: 30rpx;
  background: red;
  position: absolute;
  top: 50%;
  right: 35%;
  transform: translateY(-50%);
}
</style>