// pages/Home/addAddress/index.js
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
    sexindex: null,
    carindex: null,
    sex: ['男', '女'],
    carType: ['A1', 'A2','A3','B1', 'B2','C1', 'C2'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  formSumbit:function(e){
    console.log(e);
   wx.showModal({
     title:'提交成功',
     content:'感谢您的信任，稍后我们会有专人联系您！请注意接听电话。',
     success:function(res){
       if(res.confirm){
         wx.navigateBack({
           delta: 1,
         })
       }
     }
   })
  },
  sexChange(e) {
    console.log(e);
    this.setData({
      sexindex: e.detail.value
    })
  },
  carChange(e) {
    console.log(e);
    this.setData({
      carindex: e.detail.value
    })
  },
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