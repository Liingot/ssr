<template>
  <div class="dehighlights">
    <section class="radioTemplate" v-for="(item,index) in 3" :key="index">
      <video src="http://static1.gotokeep.com/homepage/5s.mp4" class="video"></video>
      <div class="likeTemplate">
        <span class="text">这次会议学到了xxxxx</span>
        <div class="linkNum">
          <div class="linkLogo">
            <img src="/static/images/give.png" alt />
          </div>
          <span class="linkN">111</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style  scoped>
.dehighlights {
  background: #f4f4f4;
  padding: 20rpx;
  box-sizing: border-box;
}
.video {
  width: 100%;
  height: 400rpx;
}
.radioTemplate {
  padding-top: 30rpx;
  box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
}
.radioTemplate:first-child {
  border: none;
}
.likeTemplate {
  padding: 30rpx 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text {
  font-size: 28rpx;
  font-weight: 700;
  color: black;
}
.linkNum {
  display: flex;
  align-items: center;
}
.linkLogo {
  width: 32rpx;
  height: 32rpx;
  margin-right: 5rpx;
}
.linkLogo img {
  width: 100%;
  height: 100%;
}
.linkN {
  color: #999;
  font-size: 28rpx;
}
</style>