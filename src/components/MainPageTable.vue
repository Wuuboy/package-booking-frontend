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
        </el-table>
    </div>
</template>
<script>
export default {
   
}
</script>




