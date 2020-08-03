Page({
  data: {
    PageCur: 'Home',
    couponArr: [{
        CouponName: '新人满减优惠券',
        CouponTypeName: '满30元可用',
        CouponMoney: 5,
        HasItBeenClaimed: false,
      },
      {
        CouponName: '满减券',
        CouponTypeName: '满100元可用',
        CouponMoney: 20,
        HasItBeenClaimed: false,
      },
      {
        CouponName: '折扣券',
        CouponTypeName: '满5000元可用',
        CouponMoney: 500,
        HasItBeenClaimed: false,
      },
      {
        CouponName: '现金券',
        CouponTypeName: '满10000元可用',
        CouponMoney: 1000,
        HasItBeenClaimed: true,
      }
    ],
    selectAddressData: {
      type: 2,
      item: ''
    },
    // 是否显示优惠劵弹窗
    isShowCouponPopUp: false
  },
  onLoad: function () {
    // let that = this;
    // setTimeout(() => {
    //   // 先开启优惠劵弹窗
    //   that.setData({
    //     // isShowCouponPopUp: true
    //   })
    //   // 设置优惠劵弹窗打开动画
    //   var animation = wx.createAnimation({
    //     duration: 600,
    //     timingFunction: 'ease',
    //   })
    //   that.animation = animation;
    //   animation.scale(1).step();
    //   that.setData({
    //     animationData: animation.export()
    //   })
    // }, 1000)
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur,
    })
  },
  //阻止弹出层滑动事件，空函数，不做任何处理
  // onPreventTouchMove: function () {
  //   return false;
  // },
  // //关闭优惠劵弹窗
  // closeTheCouponPopUp: function () {
  //   // 设置优惠劵弹窗关闭动画
  //   var animation = wx.createAnimation({
  //     duration: 300,
  //     timingFunction: 'ease',
  //   })
  //   this.animation = animation;
  //   animation.scale(0).step();
  //   this.setData({
  //     animationData: animation.export(),
  //   })
  //   //执行完动画后再关闭
  //   setTimeout(() => {
  //     this.setData({
  //       isShowCouponPopUp: false
  //     })
  //   }, 200)
  // },
  // //领取单个优惠劵
  // getCoupons: function (e) {
  //   // console.log(e.currentTarget.dataset.index)
  //   var index = e.currentTarget.dataset.index;
  //   var couponArr = this.data.couponArr;
  //   couponArr[index].HasItBeenClaimed = true;
  //   this.setData({
  //     couponArr: couponArr
  //   })
  // },
  // //已领取优惠劵
  // alreadyReceived: function () {
  //   wx.showToast({
  //     title: '已领取，可在卡包查看',
  //     icon: 'none'
  //   })
  // },
  // //领取全部优惠劵
  // getAllCoupons: function () {
  //   var couponArr = this.data.couponArr;
  //   couponArr.forEach((item) => {
  //     item.HasItBeenClaimed = true;
  //   })
  //   this.setData({
  //     couponArr: couponArr
  //   })
  //   wx.showToast({
  //     title: '领取成功，已放入卡包',
  //     icon: 'none'
  //   })
  // },
  //分享转发
  onShareAppMessage(res) {
    return {
      title: '流浪者速递 快到您无法想象',
      imageUrl: 'http://img1.imgtn.bdimg.com/it/u=3922290090,3177876335&fm=26&gp=0.jpg',
      path: '/pages/index/index'
    }
  },
  //分享朋友圈
  onShareTimeline: function () {
    return {
      title: '流浪者速递 快到您无法想象',
      query: '',
      imageUrl: 'http://img1.imgtn.bdimg.com/it/u=3922290090,3177876335&fm=26&gp=0.jpg'
    }
  },
  //小程序收藏
  onAddToFavorites: function () {
    return {
      title: '自定义标题',
      imageUrl: 'http://demo.png',
      query: 'name=xxx&age=xxx',
    }
  }
})