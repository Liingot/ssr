<template>
  <div class="myticket">
    <header class="header">
      <div class="use" :class="{'border_bottom':addborder}" @click="border('未使用')">未使用（{{use}}）</div>
      <span class="li"></span>
      <div class="has" :class="{'border_bottom':!addborder}" @click="border('已使用')">已使用（{{has}}）</div>
    </header>
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
</style>