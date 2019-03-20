export default  {
  updateUser (state, user) {
    console.log(user)
    state.user = user
  },
  updateImg (state, img) {
    console.log(img)
    state.img = img
  },
  updateuserId (state, userId) {
    console.log(userId)
    state.userId = userId
  },
}
