<template>
   <div id="app">
      <div>
        <el-form v-loading="loading" label-position="left" label-width="80px" :model="packageOrder">
          <el-form-item label="订单号">
            <el-input v-model="packageOrder.orderNumber"></el-input>
          </el-form-item>
          <el-form-item label="取件时间">
            <el-date-picker v-model="packageOrder.orderTime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss">
            </el-date-picker> 
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="AppointOrderTime">预约</el-button>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
import { format } from 'path';
export default {
  data() {
    return {
      loading: false,
      packageOrder: {
        orderNumber: "",
        orderTime: null,
      }
    };
  },
  methods: {
    AppointOrderTime: function() {
      var date = new Date();
      // var now = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

      const orderTimeFormated = '' + this.packageOrder.orderTime

      const year = parseInt(orderTimeFormated.split('-')[0],10)
      const month =parseInt( orderTimeFormated.split('-')[1],10)
      const day = parseInt(orderTimeFormated.split('-')[2].split(' ')[0],10)
      const hour = parseInt(orderTimeFormated.split(' ')[1].split(':')[0],10)
      const minutes = parseInt(orderTimeFormated.split(' ')[1].split(':')[1],10)
      const seconds = parseInt(orderTimeFormated.split(' ')[1].split(':')[2],10)

      const yearNow = parseInt(date.getFullYear(),10)
      const monthNow =parseInt( date.getMonth()+1,10)
      const dayNow = parseInt(date.getDate(),10)
      const hourNow = parseInt(date.getHours(),10)
      const minutesNow = parseInt(date.getMinutes(),10)
      const secondsNow = parseInt(date.getSeconds(),10)

      if(year>=yearNow&&month>=month&&day>=dayNow&&hour>=hourNow&&minutes>=minutesNow&&seconds>=secondsNow){
          if(hour>=09&&hour<=20&&minutes>=00&&seconds>=00){
              this.$store.dispatch('appointOrderTime',this.orderNumber)
              // this.loading = false;
              this.$message.success("提交成功");
          }else{
            this.$message.error("请在9-20点预约取件");
          }
      }else{
        this.$message.error("预约时间不能早于当前");
      }


      // console.log(year)
      // console.log(yearNow)

      // console.log(month)
      // console.log(monthNow)

      // console.log(day)
      // console.log(dayNow)

      // console.log(hour)
      // console.log(hourNow)

      // console.log(minutes)
      // console.log(minutesNow)

      // console.log(seconds)
      // console.log(secondsNow)

      
    }
  }
}
</script>
<style>
@import url("//unpkg.com/element-ui@2.10.1/lib/theme-chalk/index.css");
</style>
