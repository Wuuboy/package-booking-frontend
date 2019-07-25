<template>
    <div id="app">
      <div>
        <el-form v-loading="loading" label-position="left" label-width="80px" :model="packageOrder">
          <el-form-item label="订单号">
            <el-input v-model="packageOrder.orderNumber"></el-input>
          </el-form-item>
          <el-form-item label="收件人">
            <el-input v-model="packageOrder.userName"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="packageOrder.phoneNnumber"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">提交</el-button>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>
<script>
 export default {
  data() {
    return {
      loading: false,
      packageOrder: {
        orderNumber: "",
        status: "未取件",
        orderTime: "",
        userName: "",
        phoneNnumber: ""
      }
    };
  },
  methods: {
    submit: async function() {
      this.loading = true;
      this.$store.dispatch('add', this.packageOrder)
      this.loading = false;
      this.$message.success("提交成功");
    }
  }
};
</script>
<style>
@import url("//unpkg.com/element-ui@2.10.1/lib/theme-chalk/index.css");
</style>


