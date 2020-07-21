var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: '3LABZ-H73CP-KS6DN-V5TXQ-B36R7-LBFHD'
});
var App = getApp();
Page({
  data: {
    listInfo: [ //可删除，接口获取数据
      {
        "name": "佛山泛家居电商创意园",
        "lat": "23.010879",
        "lng": "113.096632"
      },
      {
        "name": "佛山市大沥汽车客运站",
        "lat": "23.127413",
        "lng": "113.110566"
      },
      {
        "name": "佛山美的电器有限公司",
        "lat": "22.915544",
        "lng": "113.231157"
      },
      {
        "name": "深圳市爱默斯科技有限公司",
        "lat": "22.694071",
        "lng": "114.258019"
      }
    ],
    info: [] //页面渲染数据
  },
  onLoad: function (options) {
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res);
        that.GetChangeJl(res.latitude, res.longitude)
      }
    })

  },
  onReady: function () {

  },
  onShow: function () {

  },
  GetChangeJl: function (latitude,longitude) {
    var that = this;
    var listBox = that.data.listInfo;
    //将服务站点地址的坐标拿出来
    var strs = '';
    for (var i = 0; i < listBox.length; i++) {
      if (i + 1 < listBox.length) {
        strs += listBox[i].lat + "," + listBox[i].lng + ";"
      } else {
        strs += listBox[i].lat + "," + listBox[i].lng
      }
    };
    wx.request({
      url: 'http://apis.map.qq.com/ws/distance/v1/matrix',
      method: 'GET',
      data: {
        mode: 'driving',
        from: latitude+','+longitude,
        to: strs,
        key: '3LABZ-H73CP-KS6DN-V5TXQ-B36R7-LBFHD'
      },
      success: function (res) {
        let list = res.data.result.rows[0].elements;
        var box = [];
        for (let i = 0; i < list.length; i++) {
          let aa = list[i].distance / 1000;
          box[i] = {
            "serviceName": listBox[i].name,
            "latitude": listBox[i].lat,
            "longitude": listBox[i].lng,
            "distance": aa.toFixed(2)
          }
        }
        that.setData({
          info: box
        });
      }
    })
  },
})