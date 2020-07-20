Page({
  data: {
    PageCur: 'Home'
  },
  onLoad:function(){
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur,
    })
  },
  //分享转发
  onShareAppMessage(res) {
    return {
      title: '流浪者速递',
      imageUrl: 'http://img1.imgtn.bdimg.com/it/u=3922290090,3177876335&fm=26&gp=0.jpg',
      path: '/pages/index/index'
    }
  },
  //分享朋友圈
  onShareTimeline: function () {
    return {
      title: '流浪者速递',
      query: '',
      imageUrl: ''
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