<template>
  <div>
    <index-banner :bannerList="bannerList" @bannerLook="bannerLook"></index-banner>
    <section class="main">
      <div class="information">
        <div class="informationLeft">
          <div class="meetingLogo">
            <img src="../../../static/images/information.jpg" alt />
          </div>
          <h3 class="meetingH3">会议信息</h3>
        </div>
        <div class="informationRight">
          <span>分享给好友</span>
          <div class="share">
            <img src="../../../static/images/share.jpg" alt />
          </div>
        </div>
      </div>
      <div class="list">
        <section
          class="listChildren"
          v-for="(item,index) in 10"
          :key="index"
          @click="details(item)"
        >
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
      </div>
    </section>
  </div>
</template>
<script>
import indexBanner from "../../components/banner"; //banner
export default {
  components: { indexBanner },
  data() {
    return {
      bannerList: [1, 2, 3]
    };
  },
  mounted() {
    console.log(this.md5({ type: "123" }));
  },
  methods: {
    bannerLook(v) {
      //点击banner的回调
    },
    details(v) {
      wx.navigateTo({
        url: "../moduleMeeting/meetingContent/main"
      });
    }
  }
};
</script>
<style scoped>
.main {
  padding: 30rpx 20rpx;
  box-sizing: border-box;
  background: #f1f1f1;
}
.information {
  background: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30rpx 15rpx;
  box-sizing: border-box;
}
.informationLeft,
.informationRight {
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.meetingLogo {
  width: 38rpx;
  height: 38rpx;
  background: royalblue;
}
.meetingLogo img {
  width: 100%;
  height: 100%;
}
.meetingH3 {
  font-size: 35rpx;
  font-weight: 600;
  margin-left: 10rpx;
}
.informationRight {
  height: 56rpx;
  border-radius: 15px;
  border: 1px solid #ccc;
  font-size: 25rpx;
  color: #0070cc;
  text-align: center;
  padding: 0 25rpx;
  box-sizing: border-box;
  justify-content: space-between;
}
.share {
  width: 26rpx;
  height: 26rpx;
  background: red;
  margin-left: 15rpx;
}
.share img {
  width: 100%;
  height: 100%;
}
.list {
  margin-top: 5rpx;
}
.listChildren {
  background: white;
  margin-bottom: 10rpx;
  padding: 30rpx 15rpx;
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
</style>