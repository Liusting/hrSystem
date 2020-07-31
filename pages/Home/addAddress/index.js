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
    region: ['请选择', '请选择', '请选择'],
    type: '',
    addressSelectColor: false,
    tagList: [{
        id: 0,
        name: '家',
        checked:false
      },
      {
        id: 1,
        name: '公司',
        checked:false
      }, {
        id: 2,
        name: '学校',
        checked:false
      }, {
        id: 3,
        name: '公寓',
        checked:false
      }
    ],
    isSelect:false
  },
  //输入标签
  tagInput:function(e){
    console.log(e.detail.value);
    let items = this.data.tagList;
    let length = items.length-1;
    items.push(
      {
        id:length+1,
        name:e.detail.value,
        checked:true,
        closed:true
      }
    )
    this.setData({
      tagList: items
    })
  },
  chooseTag(e) {
    let items = this.data.tagList;
    let id = e.currentTarget.dataset.id;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].id == id) {
        items[i].checked = !items[i].checked;
        break;
      }
    }
    this.setData({
      tagList: items
    })
  },
  //点击添加标签
  closeTag:function(e){
    let id = e.currentTarget.dataset.id;
    let items = this.data.tagList;
    items.splice(id,1);
  },
  isSelect: function () {
    this.setData({
      isSelect : !this.data.isSelect
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  formSumbit: function (e) {
    console.log(e)
  },
  formReset: function (e) {
    this.setData({
      region: ['请选择', '请选择', '请选择'],
      addressSelectColor: false
    })
  },
  bindRegionChange: function (e) {
    //控制字体颜色
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value,
      addressSelectColor: true
    })
  },
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    console.log(options)
    var that = this;
    this.setData({
      type: options.type
    })
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