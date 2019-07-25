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
       <MainPageTable/>
    </div>
</template>
<script>
import MainPageTable from './MainPageTable.vue'
export default {
  components: { MainPageTable },
  data() {
  },
  methods:{
    // add:function(){
    //     this.$store.dispatch('add', this.order)
    //     },
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
