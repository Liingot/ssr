<template>
  <div class="brand">
    <ul class="uls">
      <li class="lis"></li>
      <li class="lis"></li>
      <li class="lis"></li>
      <li class="lis"></li>
      <li class="lis"></li>
      <li class="lis"></li>
    </ul>
  </div>
</template>
<style scopecd>
.brand {
  min-height: 100vh;
  padding: 20rpx;
  box-sizing: border-box;
  background: #f4f4f4;
}
.uls {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.lis {
  width: 229rpx;
  height: 173rpx;
  border-radius: 15rpx;
  position: relative;
  background: red;
  margin-bottom: 15rpx;
}
.lis img {
  width: 100%;
  height: 100%;
}
</style>