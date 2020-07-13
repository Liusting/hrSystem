// pages/Home/identity/index.js
const app = getApp()
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
  //完成认证
  formSumbit: function (e) {
    let idcard = e.detail.value.idNumber;
    let name = e.detail.value.name;
    if (name == null || name == '') {
      wx.showModal({
        title: '温馨提示',
        content: '身份证姓名不能为空!'
      })
    } else if (idcard == null || idcard == '') {
      wx.showModal({
        title: '温馨提示',
        content: '身份证号码不能为空!'
      })
    } else {
      wx.request({
        url: 'https://route.showapi.com/2305-1',
        data: {
          showapi_appid: '256366',
          showapi_sign: 'fdd6a3f8d8544e9eaac8fed2241ccd6b',
          idcard: idcard,
          name: name
        },
        success(res) {
          if (res.data.showapi_res_body.code == 1) {
            wx.showToast({
              icon: 'success',
              title: '认证成功',
            })
          } else {
            wx.showModal({
              title: '温馨提示',
              content: '认证失败'
            })
          }
        }
      })
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