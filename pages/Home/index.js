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
    imgList: [{
        url: 'http://img5.imgtn.bdimg.com/it/u=1581224632,3970953275&fm=26&gp=0.jpg'
      },
      {
        url: 'http://img5.imgtn.bdimg.com/it/u=1706412859,1235793814&fm=26&gp=0.jpg'
      },
      {
        url: 'http://img1.imgtn.bdimg.com/it/u=4222416775,91990084&fm=15&gp=0.jpg'
      },
      {
        url: 'http://img0.imgtn.bdimg.com/it/u=728360357,3786529661&fm=26&gp=0.jpg'
      },
      {
        url: 'http://img3.imgtn.bdimg.com/it/u=2754312086,2251373705&fm=26&gp=0.jpg'
      },
      {
        url: 'http://img2.imgtn.bdimg.com/it/u=3835153038,3414811458&fm=15&gp=0.jpg'
      }
    ],
    sendInfo: {}, //寄件人信息
    receiveInfo: {}, //收件人信息
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
  // 组件所在页面的生命周期函数
  pageLifetimes: {
    //页面展示被执行
    show: function () {
      var pages = getCurrentPages();
      var currPage = pages[pages.length - 1]; //当前页面
      //在index定义了数据，数据为了避免报错
      let json = currPage.data.selectAddressData;
      if (json.type == 2) {
        return;
      } else if (json.type == 0) {
        this.setData({
          sendInfo: json.item
        })
      } else if (json.type == 1) {
        this.setData({
          receiveInfo: json.item
        })
      }
    }
  },
  methods: {
    //点击寄件人信息、收件人信息
    addAddress: function (e) {
      let type = e.currentTarget.dataset.type;
      wx.navigateTo({
        url: '../Home/addAddress/index?type=' + type,
      })
    },
    //点击寄件人地址簿
    sendPost: function () {
      wx.navigateTo({
        url: '../Home/addressList/index?type=' + 0,
      })
    },
    //点击收件人地址簿
    receive: function () {
      wx.navigateTo({
        url: '../Home/addressList/index?type=' + 1,
      })
    },
    //立即下单
    order: function () {
      wx.navigateTo({
        url: '../Home/checkOrder/index',
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