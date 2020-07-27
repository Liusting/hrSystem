var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: '3LABZ-H73CP-KS6DN-V5TXQ-B36R7-LBFHD'
});
var App = getApp();
Page({
  data: {
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
 
    multiArray: [],
    multiIndex: [0, 0, 0, 0],
    chinaData: [],
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
    
    this.getSiteData();

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
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindMultiPickerChange: function(e) {
    console.log(e);
  },
  bindMultiPickerColumnChange: function(e) {
    var move = e.detail;
    var index = move.column;
    var value = move.value;
    if (index == 0) {
      this.setData({
        multiIndex: [value,0,0,0]
      })
      this.getCity();
    }
    if (index == 1) {
      this.setData({
        "multiIndex[1]": value,
        "multiIndex[2]": 0,
        "multiIndex[3]": 0
      })
      this.getXian();
    }
    if (index == 2) {
      this.setData({
        "multiIndex[2]": value,
        "multiIndex[3]": 0,
 
      })
      this.getZhen();
    }
    if (index == 3) {
      this.setData({
        "multiIndex[3]": value
      })
      this.getZhen();
    }
  },
  getSiteData: function() {

    var that = this;
    wx.request({
      url: 'http://192.168.30.19:8082/spEmployee/getCityData',
      success: res=> {
        console.log(res);
        var chinaData = res.data;
        this.data.chinaData = chinaData;
        var sheng = []; //  设置省数组
        for(var i = 0; i < chinaData.length; i++) {
          sheng.push(chinaData[i].name);
        }
        this.setData({
          "multiArray[0]": sheng
        })
        that.getCity(); // 得到市
      }
    })
  },
  getCity: function() { //  得到市
    var shengNum = this.data.multiIndex[0];
    var chinaData = this.data.chinaData;
    var cityData = chinaData[shengNum].children;
    var city = [];
    for (var i = 0; i < cityData.length; i++) {
      city.push(cityData[i].name)
    }
    this.setData({
      "multiArray[1]": city
    })
    this.getXian();
  },
  getXian: function(e) { //  得到县
    var shengNum = this.data.multiIndex[0];
    var cityNum = this.data.multiIndex[1];
    var chinaData = this.data.chinaData;
    var xianData = chinaData[shengNum].children[cityNum].children;
    var xian = [];
    for (var i = 0; i < xianData.length; i++) {
      xian.push(xianData[i].name)
    }
    this.setData({
      "multiArray[2]": xian
    })
    this.getZhen();
  },
  getZhen: function() { //  得到镇
    var shengNum = this.data.multiIndex[0];
    var cityNum = this.data.multiIndex[1];
    var xianNum = this.data.multiIndex[2];
    var chinaData = this.data.chinaData;
    var zhenData = chinaData[shengNum].children[cityNum].children[xianNum].children;
    var zhen = [];
    for (var i = 0; i < zhenData.length; i++) {
      zhen.push(zhenData[i].name)
    }
    this.setData({
      "multiArray[3]" : zhen
    })
  }
})