import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData:[],
    status:'ALL'
  },
  mutations: {
    updateStatus(state,id){
      
    },
    addList (state,items) {
      state.tableData.push(...items);
    },
    show (state, status) {
      state.status = status;
    },
    filterStatus(state,items){
      state.tableData=[]
      state.tableData.push(...items);
    }
  },
  actions: {
    updateStatus:({commit},id) =>{
      axios.put('http://localhost:8090/packageOrders/'+id)
          .then(function (response) {
            console.log(response.data)
            commit('filterStatus',response.data)
          })
          .catch(function (error) {
          console.log(error)
        })
    },
    filterStatus:({commit},status) =>{
      axios.get('http://localhost:8090/packageOrders?status='+status)
          .then(function (response) {
            commit('filterStatus',response.data)
          })
          .catch(function (error) {
          console.log(error)
        })
    },
    addList: ({commit}) =>{
      axios
      .get('http://localhost:8090/packageOrders')
      .then(response => {
          commit('addList',response.data)
          })
      .catch(function (error) { // 请求失败处理
        console.log(error)
      })
    },
    add:({commit},item) =>{
      console.log(item)
      axios.post('http://localhost:8090/packageOrders',item)
          .then(function (response) {
            commit('addList',[response.data])
          })
          .catch(function (error) {
          console.log(error)
        })
    }
  }
})
