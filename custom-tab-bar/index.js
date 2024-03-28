Page({
  data: {
    active: 0,
    tabs:[  "/pages/home/index.js",
    "/pages/user/mobile.js"]
  },
  
  onChange (event) {
    // event.detail 的值为当前选中项的索引
    console.log('onChange',event.detail )//测试

    // this.setData({ active: event.detail });

    // console.log('active',this.data.active )//测试
    wx.switchTab({
      url: this.data.tabs[event.detail],
    })
  },

});
