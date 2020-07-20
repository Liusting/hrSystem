// pages/sp_order_list/expressInformation/expressInformation.js
var QQMapWX = require('../../../utils/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: '3LABZ-H73CP-KS6DN-V5TXQ-B36R7-LBFHD'
});
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: '',
    show: false,
    currentLo: null,
    currentLa: null,
    newCurrentLo: null,
    newCurrentLa: null,
    distance: 0,
    duration: 0,
    markers: null,
    scale: 16,
    polyline: null,
    statusType: 'car',
    includePoints: [],
    deviceW: '', //屏幕宽度
    deviceH: '', //屏幕高度
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    list:[
      {
        name:'待接单：您的订单下单成功，正在为您分配司机。'
      },
      {
        name:'待接单：您的订单下单成功，正在为您分配司机。'
      },
      {
        name:'待接单：您的订单下单成功，正在为您分配司机。'
      },
      {
        name:'待接单：您的订单下单成功，正在为您分配司机。'
      },
      {
        name:'待接单：您的订单下单成功，正在为您分配司机。'
      }
    ]
  },
//查看电子存单
checkReceipt:function(){
  wx.navigateTo({
    url: '../receipt/index',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          deviceW: res.windowWidth, //当前屏幕宽度
          deviceH: res.windowHeight //当前屏幕高度
        })
      }
    });
    wx.request({
      url: 'http://mock-api.com/PKeZpPz0.mock/express',
      success(res){
        console.log(res.data);
       that.setData({
         addressList:res.data
       })
      }
    })
    console.log(this.data.list)
    // wx.request({
    //   url: 'https://route.showapi.com/64-19/',
    //   data:{
    //     showapi_appid:'256366',
    //     showapi_sign:'fdd6a3f8d8544e9eaac8fed2241ccd6b',
    //     com:'auto',
    //     nu:'4305628344009'
    //   },
    //   success(res){
    //     console.log(res)
    //       that.setData({
    //         expressList:res.data.showapi_res_body.data
    //       })
    //   }
    // })
    
    let from = "广东省深圳市龙岗区爱南路东进1号创意园";
    let to = "广东省佛山市南海区桂城街道招商置地中心3座";
      var _this = this;
    //调用地址解析接口
    qqmapsdk.geocoder({
      //获取表单传入地址
      address: from, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
      success: function (res) { //成功后的回调
        console.log(1111,res);
        var res = res.result;
        var latitude = res.location.lat;
        var longitude = res.location.lng;
        //根据地址解析在地图上标记解析地址位置
        _this.setData({ // 获取返回结果，放到markers及poi中，并在地图展示
          markers: [{
            id: 0,
            // title: res.title,
            latitude: latitude,
            longitude: longitude,
            iconPath: 'https://m.qpic.cn/psc?/V13054I60qvHvi/IuPP.iXwoDzL23w4nRtQcjayWBoCy212G0m8Vw*dUXxbyX5GzZp85Tk7rmqPNxK1eKyC7UV8J4asU7fowpAU6Q!!/mnull&bo=IAAgACAAIAADCSw!&rf=photolist&t=5', //图标路径
            width: 20,
            height: 20,
            callout: { //可根据需求是否展示经纬度
              content: "寄",
              color: '#fff',
              padding:5,
              fontSize:15,
              borderRadius:7,
              bgColor:"#e54d42",
              display: 'ALWAYS'
            }
          },{
            id: 1,
            latitude: 23.026909,
            longitude: 113.128935,
            iconPath: 'https://m.qpic.cn/psc?/V13054I60qvHvi/IuPP.iXwoDzL23w4nRtQcjayWBoCy212G0m8Vw*dUXxbyX5GzZp85Tk7rmqPNxK1eKyC7UV8J4asU7fowpAU6Q!!/mnull&bo=IAAgACAAIAADCSw!&rf=photolist&t=5', //图标路径
            width: 20,
            height: 20,
            callout: { //可根据需求是否展示经纬度
              content: "收",
              color: '#fff',
              padding:5,
              fontSize:15,
              borderRadius:7,
              bgColor:"#0081ff",
              display: 'ALWAYS'
            }
          }],
          poi: { //根据自己data数据设置相应的地图中心坐标变量名称
            latitude: latitude,
            longitude: longitude
          }
        });
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
      }
    })
    qqmapsdk.direction({
      mode: 'driving', //可选值：'driving'（驾车）、'walking'（步行）、'bicycling'（骑行），不填默认：'driving',可不填
      //from参数不填默认当前地址
      from: '22.707581,114.262177',//寄件
      to:'23.026909,113.128935',//收件
      success: function (res) {
        console.log(res);
        var ret = res;
        var coors = ret.result.routes[0].polyline,
          pl = [];
        //坐标解压（返回的点串坐标，通过前向差分进行压缩）
        var kr = 1000000;
        for (var i = 2; i < coors.length; i++) {
          coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
        }
        //将解压后的坐标放入点串数组pl中
        for (var i = 0; i < coors.length; i += 2) {
          pl.push({
            latitude: coors[i],
            longitude: coors[i + 1]
          })
        }
        console.log(pl)
        //设置polyline属性，将路线显示出来,将解压坐标第一个数据作为起点
        _this.setData({
          latitude: pl[0].latitude,
          longitude: pl[0].longitude,
          polyline: [{
            points: pl,
            color: '#FF0000DD',
            width: 2
          }]
        })
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function (res) {
        console.log(res);
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