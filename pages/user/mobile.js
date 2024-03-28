// pages/info/mobile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

onClick:()=>{
  wx.request({
    url: 'http://spa.blue600.com/auth/mobile', //仅为示例，并非真实的接口地址
    method:'POST',
    data:{"mobile":"13800000000","device":"wx"},
    header: {
      'content-type': 'application/json', // 默认值
    },
    success (res) {   
      console.log(res.header['Set-Cookie'])//测试
      console.log(res.data.info) //测试
           wx.setStorageSync('Set-Cookie', res.header['Set-Cookie'])
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
    if(typeof this.getTabBar==='function' && this.getTabBar()){
      this.getTabBar().setData({active:2}) 
    }
   
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