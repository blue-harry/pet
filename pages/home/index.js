// pages/home/index.js
import { useFetch } from "../../utils/fetch";
const { findMany } = useFetch();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    shops: [{ name: "bihai" }],
  },

  handleClick() {
    (async () => {
      const res = await findMany({ collection: "shop", mask: "chain" })
      this.setData({
        shops: res.data,
      });
    })();

    /**  
    wx.request({
      // url: "http://127.0.0.1:5000/fetch/findMany",
      url: 'http://spa.blue600.com/fetch/findMany',
      method: "POST",
      data: { collection: "shop", mask: "chain" },
      header: {
        "content-type": "application/json", // 默认值
        cookie: wx.getStorageSync("Set-Cookie"),
      },
      success: (res) => {
        console.log(res.data);
        that.setData({
          shops: res.data,
        });

        console.log(that.data.text);
        console.log(that.data.shops);
      },
    });
 */
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === "function" && this.getTabBar()) {
      this.getTabBar().setData({ active: 0 });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
