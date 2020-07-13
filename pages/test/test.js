// pages/test/test.js
const app = getApp();

var utils = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    multiArray: [],
    warning:'',
    startDate:'',
    currentTab: 0,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    bottom_view_height2: 100,
    deviceH: '', //当前屏幕高度
    deviceW: '',
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    load: true,
    itemMessage: [], //商品信息
    address_info: {}, //地址信息
    preferential_info: {}, //商品优惠信息
    goods_info: [], //商品信息
    goods_count: '', //商品件数
    goods_freight: '', //运费
    goods_price: '', //商品价格
    total: '', //合计价格
    itemId: '', //商品id
    typeId: '', //商品规格id
    type: '', //选项,用来判断购物车下单还是详情页下单
    order_message: '', //订单留言
    cart_ids: [], // 购物车商品id
    addressId: '', //地址id
    modeName: '快递',
    name: '',
    show: true,
    flag: false,
    flag1: true,
    flag2: 0,
    flag3: true,
    mode: [{
        type: '0',
        name: '快递',
        checked: 'true'
      },
      {
        type: '1',
        name: '门店自提'
      },
      {
        type: '2',
        name: '商家配送'
      },
      {
        type: '3',
        name: '系统配送'
      }
    ],
    item: {
      iconfontBack: "icon-arrowleft",
      navigationBarTitle: "确认订单",
      statusBarHeight: app.globalData.statusBarHeight
    },
    statusBarHeight: app.globalData.statusBarHeight,
    //日期
    timeList: [],
    //可预约天数
    yyDay: 3,
    //预约时间段
    hourList: [{
        hour: "08:00-10:00",
        n: 8,
        isShow: true
      },

      {
        hour: "10:00-12:00",
        n: 10,
        isShow: true
      },
      {
        hour: "12:00-14:00",
        n: 12,
        isShow: true
      },

      {
        hour: "14:00-16:00",
        n: 14,
        isShow: true
      },

      {
        hour: "18:00-19:00",
        n: 18,
        isShow: true
      }
    ],
    //是否显示
    timeShow: false,
    currentTab: 0,
    //选择时间
    chooseHour: "",
    //选择日期
    chooseTime: "",
    hourIndex: -1,
    //预约时间
    yyTime: '',
    idx: '',
    dayname: '',
    time: ''
  },
  pickerTap:function(){
    
  },
  bindMultiPickerColumnChange:function(e){
 
    console.log('哈哈哈哈',e.detail.column)
    console.log('====',e.detail.value)
    let c = e.detail.column;
    let v = e.detail.value;
    var time = [];
    var date = new Date();
    // console.log(date)
    var date = new Date();
    var currentHours = date.getHours();
    var currentMinute = date.getMinutes();
    var temp = this.data.multiArray;
    // currentHours = 12;
    if(c == 0){
      if(temp[c][v] == '今天'){
        temp[1] = ["尽快送达|两小时内"];
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
      this.setData({
        multiArray:temp
      })
    }
  },
  timeClick12:function(e){
    let c = 0;
    let v =e.currentTarget.dataset.index;
    var time = [];
    var date = new Date();
    console.log(date)
    var date = new Date();
    var currentHours = date.getHours();
    var currentMinute = date.getMinutes();
    var temp = this.data.multiArray;
    // currentHours = 12;
    if(c == 0){
      if(temp[c][v] == '今天'){
        temp[1] = ["尽快送达|两小时内"];
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
      this.setData({
        multiArray:temp,
        currentTab:e.currentTarget.dataset.index
      })
    }
    console.log(temp)
  },
  hourClick12:function(e){
    console.log(e.currentTarget.dataset.index);
    console.log(e.currentTarget.dataset.item);
     let c = 1;
    let v =e.currentTarget.dataset.index;
    var time = [];
    var date = new Date();
    console.log(date)
    var date = new Date();
    var currentHours = date.getHours();
    var currentMinute = date.getMinutes();
    var temp = this.data.multiArray;
    // currentHours = 12;
    if(c == 0){
      if(temp[c][v] == '今天'){
        temp[1] = ["尽快送达|两小时内"];
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
      this.setData({
        multiArray:temp,
        currentTab:e.currentTarget.dataset.index
      })
    }
    console.log(temp)
  },
    //日期选择
    timeClick: function (e) {
      var that = this;
      if (e.currentTarget.dataset.index == 0) {
        this.setData({
          dayname: '今天'
        })
      } else if (e.currentTarget.dataset.index == 1) {
        this.setData({
          dayname: '明天'
        })
      } else if (e.currentTarget.dataset.index == 2) {
        this.setData({
          dayname: '后天'
        })
      }
      //非今天-不判断超过当前时间点(所有时间点都可选择)
      if (e.currentTarget.dataset.index != 0) {
        var list = this.data.hourList;
        for (var i = 0; i < list.length; i++) {
          list[i].isShow = true;
        }
        this.setData({
          hourList: list,
          hourIndex: that.data.hourIndex
        })
      } else {
        //今天-过时不可预约
        var hour = new Date().getHours();
        for (var i = 0; i < this.data.hourList.length; i++) {
          var list = this.data.hourList;
          if (this.data.hourList[i].n <= hour) {
            list[i].isShow = false;
            this.setData({
              hourList: list,
              hourIndex: i + 1,
              time: that.data.hourList[i + 1].hour
            })
          }
        }
      }
      this.setData({
        currentTab: e.currentTarget.dataset.index,
        chooseTime: this.data.timeList[e.currentTarget.dataset.index].date,
        yyTime: '',
        chooseHour: ''
      });
    },
    // 时间选择
    hourClick: function (e) {
      var that = this;
      // 时间不可选择
      if (!e.currentTarget.dataset.isshow) {
        return false;
      }
      this.setData({
        hourIndex: e.currentTarget.dataset.index,
        chooseHour: this.data.hourList[e.currentTarget.dataset.index].hour,
  
      });
      var chooseTime = new Date().getFullYear() + "-" + this.data.chooseTime + " " + this.data.chooseHour
      this.setData({
        yyTime: chooseTime,
        time: that.data.chooseHour
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var type = options.type; //用来判断是购物车下单还是详情页下单
    var that = this;
    let _date = new Date();
    let format = "MM-dd"
    utils.Format(format, _date); //将当前日期格式化
    var dateList = [];
    for (var i = 0; i < this.data.yyDay; i++) {
      var d = {};
      var day = utils.DateAdd('d', i).getDay();
      if (day == 1) {
        var w = "周一"
      }
      if (day == 2) {
        var w = "周二"
      }
      if (day == 3) {
        var w = "周三"
      }
      if (day == 4) {
        var w = "周四"
      }
      if (day == 5) {
        var w = "周五"
      }
      if (day == 6) {
        var w = "周六"
      }
      if (day == 0) {
        var w = "周日"
      }
      let _date1 = utils.DateAdd('d', i);
      d.name = w;
      d.date = utils.Format("MM-dd", _date1);
      dateList.push(d)
    }
    this.setData({
      timeList: dateList
    });
    //初始化判断
    //当前时间
    var hour = new Date().getHours();
    for (var i = 0; i < this.data.hourList.length; i++) {
      var list = this.data.hourList;
      //过时不可选
      if (this.data.hourList[i].n <= hour) {
        list[i].isShow = false;
        this.setData({
          hourList: list,
          hourIndex: i + 1
        })
      }
    }

    let time = this.data.hourList[this.data.hourIndex].hour;
    if (this.data.currentTab == 0) {
      this.setData({
        dayname: "今天",
        time: time
      })
    }
    var date = new Date();
    var currentHours = date.getHours();
    // var currentMinute = date.getMinutes();
    var temp = [];
    // console.log(currentHours)
    // console.log(currentMinute)
    // currentHours = 12;
    var temp_time = [];
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
        startDate:'尽快送达 | 两小时内'
      })
      temp[0] = ["今天","明天","后天"];
      temp[1] = ["尽快送达|两小时内"];
      for(let i=currentHours+2;i<20;){
        var i1 = i+2;
        temp[1].push(i+':00'+'-'+i1+':00')
        i+=2;
      }
    }
    this.setData({
      multiArray:temp,
    })
    if(this.data.warning!=''){
      wx.showToast({
        title: this.data.warning,
        icon: 'none',
        duration: 3000
      })
    }
    // console.log(temp)
    // console.log(temp_time)
  },
  
  bindStartMultiPickerChange:function(e){
    console.log(e)
    let temp = this.data.multiArray;
    this.setData({
      startDate:temp[0][e.detail.value[0]]+' | '+temp[1][e.detail.value[1]]
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
})
