// pages/info/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

 handleClick:()=>{

   wx.request({
    url: 'http://127.0.0.1:5000/fetch/getMany', //仅为示例，并非真实的接口地址
    method:'POST',
    data:{"collection":"staff"},
    header: {
      'content-type': 'application/json', // 默认值
      'cookie': wx.getStorageSync('Set-Cookie')
    },
    success (res) {
      console.log(res.data)
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