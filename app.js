// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        /**
         * 暂时放这里
        if (res.statusCode == 200) {
            if (res.header['Set-Cookie'] != '') {
               wx.setStorageSync('Set-Cookie', res.header['Set-Cookie'])
            }
            ...
         }
         // 这样清除
         	wx.removeStorageSync('Set-Cookie')
         */
      }
    })
  },
  globalData: {
    userInfo: null,

  }
})
