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
    currtab: '',
  },
  //选择地址
  selectAddress: function (e) {
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2]; //上一个页面
    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      selectAddressData: {
        type: this.data.currtab,
        item: e.currentTarget.dataset.item
      }
    })
    wx.navigateBack({ //返回
      delta: 1
    })
    // let that = this;
    // if (this.data.flag) {
    //   that.setData({
    //     sendInfo: e.currentTarget.dataset.item
    //   })
    // } else if (this.data.flag1) {
    //   that.setData({
    //     receiveInfo: e.currentTarget.dataset.item
    //   })
    // }
    // this.hideModal()
  },
  //默认寄件地址
  // 单选按钮事件
  radioChange(e) {
    console.log('单选:', e.detail.value)
  },
  //删除地址
  deleteAddress: function (e) {
    wx.showModal({
      title: '温馨提示',
      content: '删除当前选中地址？',
      success(res) {
        if (res.confirm) {
          wx.showToast({
            icon: 'loading',
            title: '正在删除',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //新增、编辑地址
  addAddress: function (e) {
    let type = e.currentTarget.dataset.type;
    if (type == 3) {
      let item = JSON.stringify(e.currentTarget.dataset.item);
      wx.navigateTo({
        url: '../addAddress/index?type=' + type + '&item=' + item,
      })
    } else if (type == 0) {
      wx.navigateTo({
        url: '../addAddress/index?type=' + type,
      })
    }
  },
  //点击寄件人
  select: function () {
        wx.hideLoading({
      success: (res) => {},
    })
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
        that.allShow();
        break;
      case 1:
        that.waitPayShow();
        break;
      case 2:
        that.waitSendShow();
        break;
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
        wx.hideLoading({
      success: (res) => {},
    })
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
    console.log(options.type)
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          deviceW: res.windowWidth, //当前屏幕宽度
          deviceH: res.windowHeight //当前屏幕高度
        })
      }
    });
    this.setData({
      currtab: options.type
    })

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