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
        imageUrl: 'https://img.alicdn.com/imgextra/i2/1073981443/O1CN01RMKxeS1MWw891hc6d_!!1073981443.png'
      },
      {
        id: '2',
        name: '优惠券',
        imageUrl: 'https://img.alicdn.com/imgextra/i4/1073981443/O1CN01J2Facj1MWw8BpFKUl_!!1073981443.png'
      },
      {
        id: '3',
        name: '邀请分享',
        imageUrl: 'https://img.alicdn.com/imgextra/i2/1073981443/O1CN013WX3xT1MWw87QzR3A_!!1073981443.png'
      },
      {
        id: '4',
        name: '关于我们',
        imageUrl: 'https://img.alicdn.com/imgextra/i3/1073981443/O1CN012tu8Vq1MWw86rEqJj_!!1073981443.png'
      },
      {
        id: '5',
        name: '投诉与保障',
        imageUrl: 'https://img.alicdn.com/imgextra/i4/1073981443/O1CN01ir7N8j1MWw8A6dGXq_!!1073981443.png'
      }
    ]
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
    switch(id) {
      case "1":
        console.log(44444)
        wx.navigateTo({
          url: '../Home/addressList/index',
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