export const useFetch = () => {
  const base_url = "http://spa.blue600.com/fetch";
  // 查，多个
  // 比如：options = { collection: "shop", mask: "chain" };
  const findMany = (options) => {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${base_url}/findMany`,
        method: "POST",
        data: options,
        header: {
          "content-type": "application/json", // 默认值
          cookie: wx.getStorageSync("Set-Cookie"),
        },
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        },
      });
    });

    /** 
    wx.request({
        url: `${base_url}/findMany`,
        method: "POST",
        data: options,
        // data: { collection: "shop", mask: "chain" },
        header: {
          "content-type": "application/json", // 默认值
          cookie: wx.getStorageSync("Set-Cookie"),
        },
        success: (res) => {
          console.log('res in success',res.data);
          returnData = res.data;
          console.log('returnData inside',returnData)
          return returnData
        },
      });
    */
  };

  return {
    findMany,
  };
};
