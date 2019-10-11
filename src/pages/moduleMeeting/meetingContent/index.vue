<template>
  <div class="metting">
    <section class="mettingMain">
      <ul class="mettingUls">
        <li class="lis" v-for="(item,index) in list " :key="index">
          <div class="listContent" @click="go(item.leftText)" :class="item.leftClass">
            <div class="meetinglogo">
              <img :src="item.leftImg" alt />
            </div>
            <p class="text">{{item.leftText}}</p>
          </div>
          <div
            class="listContent"
            v-if="item.rightText"
            @click="go(item.rightText)"
            :class="item.rightClass"
          >
            <div class="meetinglogo">
              <img :src="item.rightImg" alt />
            </div>
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
          leftImg: "/static/images/mett0.png",
          leftClass: "one",
          rightText: "报名参会",
          rightImg: "/static/images/mett1.png",
          rightClass: "two"
        },
        {
          leftText: "议程安排",
          leftImg: "/static/images/mett2.png",
          leftClass: "three",
          rightText: "会议集锦",
          rightClass: "foure",
          rightImg: "/static/images/mett3.png"
        },
        {
          leftText: "品牌企业",
          leftImg: "/static/images/mett4.png",
          leftClass: "five"
        }
      ]
    };
  },
  onLoad(v) {},
  methods: {
    go(v) {
      switch (v) {
        case "报名参会":
          wx.navigateTo({
            url: "../../moduleMeeting/signin/main"
          });
          break;
        case "会议集锦":
          wx.navigateTo({
            url: "../../moduleMeeting/dehighlights/main"
          });
          break;
        case "品牌企业":
          wx.navigateTo({ url: "../../moduleMeeting/brand/main" });
        default:
          wx.navigateTo({
            url: "../../moduleMeeting/signin/main"
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
  padding: 50rpx 0;
  box-sizing: border-box;
}
.one {
  background: -webkit-gradient(
    linear,
    center top,
    center bottom,
    from(rgba(253, 103, 74, 0.8)),
    to(rgb(253, 103, 74))
  );
}
.two {
  background: -webkit-gradient(
    linear,
    center top,
    center bottom,
    from(rgba(255, 126, 165, 0.8)),
    to(rgb(255, 126, 165))
  );
}
.three {
  background: -webkit-gradient(
    linear,
    center top,
    center bottom,
    from(rgba(255, 192, 68, 0.8)),
    to(rgb(255, 192, 68))
  );
}
.foure {
  background: -webkit-gradient(
    linear,
    center top,
    center bottom,
    from(rgba(86, 143, 254, 0.8)),
    to(rgb(86, 143, 254))
  );
}
.five {
  background: -webkit-gradient(
    linear,
    center top,
    center bottom,
    from(rgba(191, 104, 252, 0.8)),
    to(rgb(191, 104, 252))
  );
}
.meetinglogo {
  width: 80rpx;
  height: 75rpx;
  margin: 0 auto;
}
.meetinglogo img {
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