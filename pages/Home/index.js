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
    modalName: '',
    flag: '',
    flag1: '',
    addressList: [],
    sendInfo: {},
    receiveInfo: {},
 
    
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
    //添加地址
    addAddress: function (e) {
      let type = e.currentTarget.dataset.type;
      wx.navigateTo({
        url: '../Home/addAddress/index?type=' + type,
      })
    },
    //删除地址
    deleteAddress: function (e) {
      console.log(e)
    },
    //选择地址
    selectAddress: function (e) {
      let that = this;
      if (this.data.flag) {
        that.setData({
          sendInfo: e.currentTarget.dataset.item
        })
      } else if (this.data.flag1) {
        that.setData({
          receiveInfo: e.currentTarget.dataset.item
        })
      }
      this.hideModal()
    },
    //点击寄件人信息
    sendPost: function () {
      this.setData({
        modalName: 'GroupViewModal',
        flag: true,
        flag1: false
      })
      this.select();
    },
    //点击收件人信息
    receive: function () {
      this.setData({
        modalName: 'GroupViewModal',
        flag: false,
        flag1: true
      })
      this.select1();
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
    //立即下单
    order: function () {
      wx.navigateTo({
        url: '../Home/checkOrder/index',
      })
      // if(JSON.stringify(this.data.sendInfo)==='{}'){
      //   this.sendPost()
      // }else if(JSON.stringify(this.data.receiveInfo)==='{}'){
      //   this.receive()
      // }else{
      //   wx.navigateTo({
      //     url: '../Home/checkOrder/index',
      //   })
      // }
    },
    hideModal: function () {
      this.setData({
        modalName: ''
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