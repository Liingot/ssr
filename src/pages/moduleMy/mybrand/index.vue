<template>
  <div class="brand">
    <h3 class="brandh3">企业获奖信息</h3>
    <ul class="branduls">
      <li class="brandlis" v-for="(item,index) in company" :key="index">
        <img :src="item" alt />
      </li>
    </ul>
  </div>
</template>
<script>
import "../../../../static/wxss/brand.wxss";
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .post({
          url: "/api/personal/company"
        })
        .then(res => {
          if (res.data.status == "200") {
            this.company = res.data.data.company;
          } else if (res.data.status == "400") {
            wx.showToast({
              title: res.data.message,
              icon: "none",
              duration: 2000
            });
          }
        });
    }
  }
};
</script>
<style scopecd>
.brandh3 {
  font-size: 30rpx;
  color: #666;
  margin-bottom: 20rpx;
}
</style>