export default {
  updateUserAsyc(store,data) {
    console.log(data)
    store.commit('updateUser',{
      user:data
    })
  },
  updateImgAsyc(store,data) {
    store.commit('updateImg',{
      img:data
    })
  },
  updateuserIdAsyc(store,data) {
    store.commit('updateuserId',{
      userId:data
    })
  }
}
