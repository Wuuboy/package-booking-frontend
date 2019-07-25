<template>
    <div>
            <!-- :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" -->
        <el-table :data="$store.state.tableData"  style="width: 100%">
            <el-table-column
            label="orderNumber"
            prop="orderNumber">
            </el-table-column>
            <el-table-column
            label="userName"
            prop="userName">
            </el-table-column>
              <el-table-column
            label="phoneNumber"
            prop="phoneNumber">
            </el-table-column>
              <el-table-column
            label="status"
            prop="status">
            </el-table-column>
              <el-table-column
            label="orderTime"
            prop="orderTime">
            </el-table-column>
            <el-table-column
            align="right">
            </el-table-column>
             <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button v-if="!isFetched(scope.row)"
                  size="mini"
                  @click="updateStatus(scope.$index)">标记</el-button>
              </template>
            </el-table-column>


        </el-table>
    </div>
</template>
<script>
export default {
   methods:{
     updateStatus(index,row){
      this.$store.dispatch('updateStatus',index+1) 
     },
     isFetched: function(row) {
      return row.status === "已取件";
    }
   }
}
</script>




