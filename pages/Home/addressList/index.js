// pages/Home/addressList/index.js
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
    addressList: [],
    sendInfo: {},
    receiveInfo: {},
    swipertab: [{
        name: '寄件人地址',
        index: 0
      },
      {
        name: '收货人地址',
        index: 1
      }
    ],
    allOrder: [],
    currtab: '0',
  },
  //新增地址
  addAddress: function () {
    wx.navigateTo({
      url: '../addAddress/index',
    })
  },
  //点击寄件人
  select: function () {
    var that = this;
    this.setData({
      flag: true,
      flag1: false,
    })
    wx.request({
      url: 'http://mock-api.com/PKeZpPz0.mock/sendPost',
      success(res) {
        console.log(res.data);
        that.setData({
          addressList: res.data
        })
      }
    })
  },
  
  /**
   * @Explain：选项卡点击切换
   */
  tabSwitch: function (e) {
    var that = this
    if (this.data.currtab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currtab: e.target.dataset.current
      })
    }
  },

  tabChange: function (e) {
    this.setData({
      currtab: e.detail.current
    })
    this.orderShow()
  },
  orderShow: function () {
    let that = this
    switch (this.data.currtab) {
      case 0:
        that.allShow()
        break
      case 1:
        that.waitPayShow()
        break
      case 2:
        that.waitSendShow()
        break
    }
  },
  // 未使用
  allShow: function () {
    var that = this;
    this.setData({
      allOrder: that.allOrder
    })
  },
  // 已使用
  waitPayShow: function () {
    var that = this;
    this.setData({
      waitPayOrder: that.waitPayOrder
    })
  },
  // 已过期
  waitSendShow: function () {
    var that = this;
    this.setData({
      waitSendOrder: that.waitSendOrder
    })
  },
  //点击收件人
  select1: function () {
    var that = this;
    wx.request({
      url: 'http://mock-api.com/PKeZpPz0.mock/receive',
      success(res) {
        console.log(res.data);
        that.setData({
          addressList: res.data
        })
      }
    })
    this.setData({
      flag: false,
      flag1: true
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
    this.select()
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