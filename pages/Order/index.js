// pages/Home/index.js
const app = getApp();
Component({

  /**
   * 页面的初始数据
   */
  data: {
    deviceW: '', //屏幕宽度
    deviceH: '', //屏幕高度
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    swipertab: [{
        name: '全部订单',
        index: 0
      },
      {
        name: '待接单',
        index: 1
      },
      {
        name: '待取货',
        index: 2
      },
      {
        name: '待发货',
        index: 3
      },
      {
        name: '待收货',
        index: 4
      }
    ],
    allOrder: [],
    currtab: '0'
  },
  ready: function () {
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
  methods: {
    //取消订单
    cancelOrder:function(e){
      wx.showModal({
        title:'温馨提示',
        content:'确定要取消订单吗?',
        success (res) {
          if (res.confirm) {
          console.log('用户点击确定')
          } else if (res.cancel) {
          console.log('用户点击取消')
          }
          }
      })
    },
    //查看电子存单
    gotoReceipt:function(e){
      wx.navigateTo({
        url: '../Order/receipt/index',
      })
    },
    //查看订单详情
    orderDetail:function(e){
      wx.navigateTo({
        url: '../Order/orderDetail/index',
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

    // 点击立即使用
    cupon_use: function (e) {
      // console.log(e.currentTarget.dataset);
      var preferential = e.currentTarget.dataset;
      wx.setStorage({
        key: 'preferential',
        data: preferential,
        success: function (res) {
          wx.navigateBack({
            delta: 1
          })
        }
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
  }
})