// pages/Home/index.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deviceW: '', //屏幕宽度
    deviceH: '', //屏幕高度
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    tools: [{
        id: '1',
        name: '地址簿',
        imageUrl: 'https://m.qpic.cn/psc?/V13054I60qvHvi/IuPP.iXwoDzL23w4nRtQcppQFf7Oib665fv4ZHL.eGRJT4BS*uoUlpqfyZO8JI5hdpW227V3HGVgZTUSFsm*Vg!!/mnull&bo=gACAAIAAgAADCSw!&rf=photolist&t=5'
      },
      {
        id: '2',
        name: '优惠券',
        imageUrl: 'https://m.qpic.cn/psc?/V13054I60qvHvi/IuPP.iXwoDzL23w4nRtQcn5GAnV3FMvpr*VKwSDOhdKRqmAxURdFM1ijfkBpxXV9JcEUWlscsBKuGUnl4KuKmg!!/mnull&bo=gACAAIAAgAADCSw!&rf=photolist&t=5'
      },
      {
        id: '3',
        name: '邀请分享',
        imageUrl: 'https://m.qpic.cn/psc?/V13054I60qvHvi/IuPP.iXwoDzL23w4nRtQcjExB4DDTzTw37RIxCGv4yKHk6bT5FTqBOhj8j8Fci8XTeyQ0Tmhlam4SxEoYPmGOg!!/mnull&bo=gACAAIAAgAADCSw!&rf=photolist&t=5'
      },
      {
        id: '4',
        name: '关于我们',
        imageUrl: 'https://m.qpic.cn/psc?/V13054I60qvHvi/IuPP.iXwoDzL23w4nRtQcuc17nJ*dQuuhqOHqPPB*AXAPkf93R6vvFXHXjW2CCAlPTUFYPHHabxjmAypLOMMeQ!!/mnull&bo=gACAAIAAgAADCSw!&rf=photolist&t=5'
      },
      {
        id: '5',
        name: '投诉与保障',
        imageUrl: 'https://m.qpic.cn/psc?/V13054I60qvHvi/IuPP.iXwoDzL23w4nRtQclD41BVflPIAztobyp7mfk9hBugaGqvmns8qgHZgQ2LFbGUiRcr86qmuAHdql81ISg!!/mnull&bo=gACAAIAAgAADCSw!&rf=photolist&t=5'
      },
      {
        id: '6',
        name: '加入我们',
        imageUrl: 'https://m.qpic.cn/psc?/V13054I60qvHvi/IuPP.iXwoDzL23w4nRtQcuJqVSPaPdufRSzWaIp.ZcWED2vTX5ryTnU8TaQFSPn19pQi4CbCJ1s7MceZ0ohaeA!!/mnull&bo=gACAAIAAgAADCSw!&rf=photolist&t=5'
      }
    ]
  },
//登录
login:function(){
  wx.navigateTo({
    url: '../Login/index',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          deviceW: res.windowWidth, //当前屏幕宽度
          deviceH: res.windowHeight //当前屏幕高度
        })
      }
    });
  },
  tools: function (e) {
    console.log(e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id;
    switch (id) {
      case "1":
        wx.navigateTo({
          url: '../Home/addressList/index?type='+0,
        })
        break;
      case "2":
        wx.navigateTo({
          url: '../My/coupon/index',
        })
        break;
      case "3":
        wx.navigateTo({
          url: '../My/invite/index',
        })
        break;
      case "4":
        wx.navigateTo({
          url: '../My/aboutOur/index',
        })
        break;
      case "5":
        wx.navigateTo({
          url: '../My/advice/index',
        })
        break;
      case "6":
        wx.navigateTo({
          url: '../My/joinOur/index',
        })
        break;
      default:
        break;
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})