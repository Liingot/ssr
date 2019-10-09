<template>
  <div class="infoNumber">{{num}}</div>
</template>
<script>
export default {
  props: {
    num: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  }
};
</script>
<style  scoped>
.infoNumber {
  width: 30rpx;
  height: 30rpx;
  border-radius: 50%;
  font-size: 25rpx;
  color: white;
  background: #0070cc;
  position: absolute;
  right: 30%;
  top: -10%;
}
</style>