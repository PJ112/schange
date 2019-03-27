export default {
  updateUserAsyc(store,data) {
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
  },
  updateschoolAsyc (store,data) {
    store.commit('updateSchool',{
      school:data
    })
  },
  //shop  LT

}
