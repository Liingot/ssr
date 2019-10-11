<template>
  <div class="enter">
    <ul class="main">
      <li class="mainavatar">
        <span class="text">头像</span>
        <div class="avatar logo"></div>
      </li>
      <li class="mainLis">
        <span class="text">公司</span>
        <div class="company">
          <span class="subText">北京细水科技有限公司</span>
        </div>
      </li>
      <li class="mainLis">
        <span class="text">姓名</span>
        <!-- <span class="subText" contenteditable="true">张先生</span> -->
        <input type="text" style="text-align:right;" class="subText" v-model="name" />
      </li>
      <li class="mainLis">
        <span class="text">职位</span>
        <!-- <span class="subText" contenteditable="true">xxx</span> -->
        <input type="text" style="text-align:right;" class="subText" v-model="position" />
      </li>
      <li class="mainLis">
        <span class="text">省份</span>
        <!-- <span class="subText" contenteditable="true">北京</span> -->
        <input type="text" style="text-align:right;" class="subText" v-model="province" />
      </li>
      <li class="mainLis">
        <span class="text">手机号</span>
        <span class="subText" style="color:#0070cc;">{{tel}}</span>
      </li>
      <li class="mainLis">
        <span class="text">性别</span>
        <!-- <span class="subText" contenteditable="true"></span>  -->
        <input type="text" style="text-align:right;" class="subText" v-model="gender" />
      </li>
      <li class="mainLis">
        <span class="text">出生年月</span>
        <!-- <span class="subText" contenteditable="true">1990-09-10</span> -->
        <input type="text" style="text-align:right;" class="subText" v-model="year" />
      </li>
    </ul>
    <footer class="footer">
      <span class="submit">保存</span>
    </footer>
  </div>
</template>
<script>
import "../../../../static/wxss/enter.wxss";
export default {
  data() {
    return {
      avatar: "", //头像
      name: "张先生",
      companyName: "", //公司名称
      position: "xxx", //职位
      province: "北京", //省份
      tel: "152****1111", //手机号
      gender: "男",
      year: "1990-09-10"
    };
  }
};
</script>
<style scoped>
</style>