<template>
  <div class="login">
    <p class="title">请填写您个人使用的手机号</p>
    <section class="form">
      <div class="tel">
        <span class="text">手机号</span>
        <input type="text" class="inputTel" placeholder="请输入手机号" v-model="tel" />
      </div>
      <div class="code">
        <span class="text">验证码</span>
        <div class="codeEdit">
          <input type="text" placeholder="请输入验证码" v-model="code" />
          <span class="getCode" @click="getCode">{{codeText == '获取验证码'? '获取验证码' : codeText + 'S'}}</span>
        </div>
      </div>
    </section>
    <div class="bottom">
      <span class="btnLogin">登录</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tel: "",
      code: "",
      codeText: "获取验证码",
      timer: null
    };
  },
  methods: {
    getCode() {
      if (!this.timer) {
        this.codeText = 15;
        this.timer = setInterval(() => {
          if (this.codeText > 1) {
            this.codeText--;
            this.codeText < 10
              ? (this.codeText = "0" + this.codeText)
              : (this.codeText = this.codeText);
          } else {
            clearInterval(this.timer);
            this.timer = null;
            this.codeText = "获取验证码";
          }
        }, 1000);
      }
    }
  }
};
</script>
<style  scoped>
.login {
  width: 100%;
  height: 100vh;
  background: #f4f4f4;
}
.title {
  padding: 25rpx 20rpx;
  box-sizing: border-box;
  font-size: 28rpx;
  color: #666;
}
.form {
  padding: 25rpx 20rpx;
  box-sizing: border-box;
  background: white;
}
.tel,
.code {
  display: flex;
  padding: 35rpx 0;
  box-sizing: border-box;
}
.tel {
  border-bottom: 1px solid #e2e2e2;
}
.text {
  font-size: 33rpx;
  font-weight: 550;
  margin-right: 80rpx;
}
.codeEdit {
  display: flex;
  align-items: center;
}
.getCode {
  font-size: 33rpx;
  font-weight: 550;
  color: #0070cc;
}
.bottom {
  padding: 0 20rpx;
  box-sizing: border-box;
}
.btnLogin {
  display: block;
  border-radius: 50rpx;
  text-align: center;
  width: 100%;
  line-height: 90rpx;
  color: white;
  font-size: 30rpx;
  font-weight: 500;
  margin-top: 45rpx;
  background: #0070cc;
}
</style>