// pages/My/advice/index.js
const app = getApp()
var utils = require('../../../utils/util')
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
    modalName: '',
    flag: true,
    flag1: false,
    flag2: true,
    multiArray: [],
    warning:'',
    startDate:'',
    currentTab: 0,
    hourIndex1:0,
    time:'',
      html: '<div class="div_class" style="line-height: 30px;">&nbsp;本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约。本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。<br>&nbsp;栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约</div>',
  
  },
  //确定
  confirm:function(){
    var temp = this.data.multiArray;
    let v = this.data.currentTab;
    let v1 = this.data.hourIndex1;
    let name = temp[0][v]+' '+temp[1][v1]
    this.setData({
      time:name
    })
    this.hideModal()
  },
  timeClick12:function(e){
    let c = 0;
    let v =e.currentTarget.dataset.index;
    var date = new Date();
    var currentHours = date.getHours();
    var temp = this.data.multiArray;
    if(c == 0){
      if(temp[c][v] == '今天'){
        temp[1] = ["两小时内"];
        for(let i=currentHours+2;i<20;){
          var i1 = i+2;
          temp[1].push(i+':00'+'-'+i1+':00')
          i+=2;
        }
      }else{
        temp[1] = [];
        for(let i=8;i<20;){
          var i1 = i+2;
          temp[1].push(i+':00'+'-'+i1+':00')
          i+=2;
        }
      }
      let name = temp[0][v]+' '+temp[1][0]
      this.setData({
        multiArray:temp,
        currentTab:e.currentTarget.dataset.index,
        hourIndex1:0,
        time:name
      })
    }
  },
  hourClick12:function(e){
    var temp = this.data.multiArray;
    let v =e.currentTarget.dataset.index;
    let v1 = this.data.currentTab;
    let name = temp[0][v1]+' '+temp[1][v]
    this.setData({
      hourIndex1:v,
      time:name
    })
    this.hideModal()
  },
 
  //立即支付
  pay:function(e){
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  //选择服务站点
  serviceAddress:function(){
    wx.navigateTo({
      url: '../serviceAddress/index',
    })
  },
  //物品信息
  goodsMessage:function(){
    wx.navigateTo({
      url: '../goodsMessage/index',
    })
  },
  //选择寄件方式
  select: function () {
    this.setData({
      flag1: false,
      flag: true
    })
  },
  select1: function () {
    this.setData({
      flag: false,
      flag1: true
    })
  },
  explain:function(){
    this.setData({
      flag2:!this.data.flag2
    })
  },
  //确认下单-优惠券模态框
  showModal: function (e) {
    console.log(e);
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
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
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          deviceW: res.windowWidth, //当前屏幕宽度
          deviceH: res.windowHeight //当前屏幕高度
        })
      }
    });
    var date = new Date();
    var currentHours = date.getHours();
    var temp = [];
    //如果当前时间大于20点
    if(currentHours>(20-2)){
      this.setData({
        warning:'当前时间段不在服务范围,现在下单,最早将于明早8点上门安装',
        startDate:'明早 | 8:00-10:00'
      })
      temp[0] = ["明天","后天","大后天"];
      temp[1] = [];
      for(let i=8;i<20;){
        var i1 = i+2;
        temp[1].push(i+':00'+'-'+i1+':00')
        i+=2;
      }
    }else if(currentHours<8){
      this.setData({
        warning:'当前时间段不在服务范围,现在下单,最早将于今早8点上门安装',
        startDate:'明早 | 8:00-10:00'
      })
      temp[0] = ["今天","明天","后天"];
      temp[1] = [];
      for(let i=8;i<20;){
        var i1 = i+2;
        temp[1].push(i+':00'+'-'+i1+':00')
        i+=2;
      }
    }else{
      this.setData({
        startDate:'两小时内'
      })
      temp[0] = ["今天","明天","后天"];
      temp[1] = ["两小时内"];
      for(let i=currentHours+2;i<20;){
        var i1 = i+2;
        temp[1].push(i+':00'+'-'+i1+':00')
        i+=2;
      }
    }
    this.setData({
      multiArray:temp,
      time:temp[0][0]+' '+temp[1][0]
    })
    if(this.data.warning!=''){
      wx.showToast({
        title: this.data.warning,
        icon: 'none',
        duration: 3000
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