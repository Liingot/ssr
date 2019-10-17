<template>
  <div class="brand">议程安排</div>
</template>
<script>
export default {
  data() {
    return {
      guide: [],
      url:"",
    };
  },
  onLoad(v) {
    this.url = this.domains;
    this.init(v.id);
  },
  methods: {
    init(meeting_id) {
      this.axios
        .post({
          url: "/api/meeting/plan",
          data: { meeting_id: meeting_id }
        })
        .then(res => {
          if (res.data.status == "200") {
            this.guide = res.data.data;
            console.log(this.guide);
          }
        });
    }
  }
};
</script>
<style scopecd>
</style>