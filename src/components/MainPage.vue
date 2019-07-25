<template>
    <div>
        <el-row>
            <h2>菜鸟驿站</h2>
            <el-button type="primary" @click="getAllData()">All</el-button>
            <el-button type="success" @click="filterStatus('已预约')">已预约</el-button>
            <el-button type="info" @click="filterStatus('已取件')">已取件</el-button>
            <el-button type="warning" @click="filterStatus('未预约')">未预约</el-button>
            <!-- <el-button type="danger" @click="opendialog">添加</el-button> -->
            <el-button type="danger"><router-link to="/AddPackage">添加</router-link></el-button>
        </el-row>
        <el-dialog 
            title="申诉" 
            v-model="dialogVisible"
            :close-on-click-modal="false">    
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="dialogVisible = false">取消</el-button>
                <el-button type="primary" :loading="addLoading">提交</el-button>
            </div>
        </el-dialog>
       <MainPageTable/>
    </div>
</template>
<script>
import MainPageTable from './MainPageTable.vue'
export default {
  components: { MainPageTable },
  data() {
      return {
        // order: {
        //     orderNumber:'20190724005',
        //     userName:'Mary',
        //     phoneNumber:'18075525725',
        //     status:'未预约',
        //     orderTime:'2019-07-25T03:07:16.740+0000',
        //     weight:3.0
        // }
      }
  },
  methods:{
    add:function(){
        this.$store.dispatch('add', this.order)
        },
    filterStatus:function(status){
        this.$store.dispatch('filterStatus', status);
    },
    getAllData:function(){
        this.$store.dispatch('addList')
    }
  },    
    mounted () {
    if (this.$store.state.tableData.length === 0) {
        this.$store.dispatch('addList')
        }
    }
}
</script>
