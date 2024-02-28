// pages/info/mobile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

onClickLogin:()=>{
  wx.login({
    success (res) {
      if (res.code) {
        //发起网络请求
        wx.request({
          url: 'http://127.0.0.1:5000/wxLogin',
          method:'POST',
          header: {
            'content-type': 'application/json', // 默认值
          },
          data: {
            code: res.code
          },    
          success (res) {   
            console.log(res.data)//测试
            console.log(res.header['Set-Cookie'])//测试
            wx.setStorageSync('Set-Cookie', res.header['Set-Cookie'])
          }

        })
      } else {
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})