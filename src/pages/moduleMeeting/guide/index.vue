<template>
  <div class="brand">会议指南</div>
</template>
<script>
export default {
  data() {
    return {
      guide: []
    };
  },
  onLoad(v) {
    this.init(v.id);
  },
  methods: {
    init(meeting_id) {
      this.axios
        .post({
          url: "/api/meeting/guide",
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