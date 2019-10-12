<template>
  <div class="enter">
    <ul class="main">
      <li class="mainavatar">
        <span class="text">头像</span>
        <div class="avatar logo">
          <img :src="avatar" alt />
        </div>
      </li>
      <li class="mainLis">
        <span class="text">公司</span>
        <div class="company">
          <span
            class="subText"
            v-if="certification == '1' || certification =='lodding'"
          >{{companyName}}</span>
          <span class="info" v-if="certification == '0'" @click="infoHide"></span>
          <!-- <input
            type="text"
            style="text-align:right;"
            class="subText"
            placeholder="请输入公司名称"
            v-model="companyName"
            v-if="certification != 0"
            @input="change(companyName)"
          />-->
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
        <span
          class="subText"
          style="color:#0070cc;"
          @click="if_pop = !if_pop"
        >{{if_pop ? tel : phonetxt}}</span>
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
      <span class="submit" @click="submit">保存</span>
    </footer>
    <vague
      v-if="vagusIsHide"
      :companyList="companyList"
      @detailsUpdate="detailsUpdate"
      @retu="retu"
    ></vague>
  </div>
</template>
<script>
import "../../../../static/wxss/enter.wxss";
import vague from "../../../components/vagueSearch";
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
      year: "1990-09-10",
      vagusIsHide: false, //模糊搜索显示隐藏
      companyList: [],
      certification: "0", //判断认证状态
      companyIshide: false,
      if_pop: true,
      phonetxt: "",
      company_id: 0 //公司id
    };
  },
  onLoad(v) {
    this.certification = v.certification;
  },
  mounted() {
    // this.init();
  },
  components: { vague },
  methods: {
    retu() {
      this.vagusIsHide = false;
    },
    submit() {
      let query = {
        company_id: this.company_id, //公司id
        username: this.name, //姓名
        position: this.position, //职位
        province: this.province, //省份
        birth: this.year //出生日期
      };
      this.axios
        .post({
          url: `/api/personal/update`,
          data: query
        })
        .then(res => {
          if (res.data.status == "200") {
            wx.showToast({
              title: "更新成功",
              icon: "none",
              duration: 1000
            });
            wx.reLaunch({ url: "../../my/main" });
          }
        });
    },
    infoHide() {
      this.vagusIsHide = true;
      // this.certification = "3";
    },
    init() {
      this.axios
        .post({
          url: `/api/personal/info`
        })
        .then(res => {
          if (res.data.status == "200") {
            let data = res.data.data;
            this.gender = data.gender == 1 ? "男" : "女";
            this.year = data.birth;
            this.avatar = data.cover;
            this.province = data.province;
            this.phonetxt = data.phone;
            this.tel = String(data.phone).replace(
              /(\d{3})\d{4}(\d{4})/,
              "$1****$2"
            );
            this.companyName = data.company_name;
            this.position = data.position;
            this.name = data.username;
            if (data.company_name) this.certification = 1;
          }
        });
    },
    detailsUpdate(item) {
      //模糊搜索回调
      this.vagusIsHide = false;
      this.companyName = item.name;
      this.company_id = item.id;
      this.certification = "lodding";
    }
  }
};
</script>
<style scoped>
.enter {
  position: relative;
}
.info {
  width: 38rpx;
  height: 38rpx;
  background: red;
}
.info > img {
  width: 100%;
  height: 100%;
}
</style>