// pages/Home/goodsMessage/index.js
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
    imgList: [],
    min: 0, //最少字数
    max: 40, //最多字数 (根据自己需求改变) 
    goodsType: [{
      id: 1,
      name: '文件证照',
    }, {
      id: 2,
      name: '数码产品',
    }, {
      id: 3,
      name: '珠宝首饰',
    }, {
      id: 4,
      name: '美妆日用',
    }, {
      id: 5,
      name: '服饰鞋帽',
    }, {
      id: 6,
      name: '易碎物品',
    }, {
      id: 7,
      name: '水果生鲜',
    }, {
      id: 8,
      name: '其他',
    }],
    selectId: '', //被选中id值
    goodNumber: 1,
    estimatedWeight: 1,
    estimatedVolume: 1,
    isshow: false,
    goodsName: ''
  },
  //点击确认
  confirm: function () {
    console.log(this.data.goodsName)
    console.log(this.data.estimatedVolume)
    console.log(this.data.estimatedWeight)
    console.log(this.data.goodNumber)
    if (this.data.goodsName == "") {
      wx.showToast({
        icon: 'none',
        title: '请输入物品名称'
      })
    }else{
      var pages = getCurrentPages();
      var prevPage = pages[pages.length - 2]; //上一个页面
      //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
      prevPage.setData({
        goodsData: {
          goodsName: this.data.goodsName,
          estimatedVolume: this.data.estimatedVolume,
          estimatedWeight: this.data.estimatedWeight,
          goodNumber: this.data.goodNumber,
          isgoodsData:false
        }
      })
    }
    wx.navigateBack({
      delta: 1,
    })
  },
  addAndReduce: function (e) {
    let type = e.currentTarget.dataset.type;
    let item = e.currentTarget.dataset.item;
    switch (type) {
      case 'number':
        let number = this.data.goodNumber;
        if (item == 'add') {
          if (number == 99) {
            wx.showToast({
              icon: 'none',
              title: '数量不能大于100'
            })
            return;
          } else {
            number++;
          }

        } else if (item == 'reduce') {
          if (number == 1) {
            wx.showToast({
              icon: 'none',
              title: '数量不能小于1'
            })
            return;
          } else {
            number--;
          }
        }
        this.setData({
          goodNumber: number
        })
        break;
      case 'weight':
        let weight = this.data.estimatedWeight;
        if (item == 'add') {
          if (weight == 99) {
            wx.showToast({
              icon: 'none',
              title: '重量不能大于100'
            })
            return;
          } else {
            weight++;
          }
        } else if (item == 'reduce') {
          if (weight == 1) {
            wx.showToast({
              icon: 'none',
              title: '重量不能小于1'
            })
            return;
          } else {
            weight--;
          }
        }
        this.setData({
          estimatedWeight: weight
        })
        break;
      case 'volume':
        let volume = this.data.estimatedVolume;
        if (item == 'add') {
          if (volume == 99) {
            wx.showToast({
              icon: 'none',
              title: '体积不能大于100'
            })
            return;
          } else {
            volume++;
          }
        } else if (item == 'reduce') {
          if (volume == 1) {
            wx.showToast({
              icon: 'none',
              title: '体积不能小于1'
            })
            return;
          } else {
            volume--;
          }
        }
        this.setData({
          estimatedVolume: volume
        })
        break;
    }
  },
  //点击输入框输入
  numberinput: function (e) {
    console.log(e);
    let type = e.currentTarget.dataset.type;
    let value = e.detail.value;
    switch (type) {
      case 'number':
        if (value == 0 || value == "") {
          wx.showToast({
            icon: 'none',
            title: '数量不能为0',
          })
          this.setData({
            goodNumber: 1
          })
        } else {
          this.setData({
            goodNumber: value
          })
        }
        break;
      case 'weight':
        if (value == 0 || value == "") {
          wx.showToast({
            icon: 'none',
            title: '数量不能为0',
          })
          this.setData({
            estimatedWeight: 1
          })
        } else {
          this.setData({
            estimatedWeight: value
          })
        }
        break;
      case 'volume':
        if (value == 0 || value == "") {
          wx.showToast({
            icon: 'none',
            title: '数量不能为0',
          })
          this.setData({
            estimatedVolume: 1
          })
        } else {
          this.setData({
            estimatedVolume: value
          })
        }
        break;
    }
  },
  //其他物品输入
  otherInput: function (e) {
    this.setData({
      goodsName: e.detail.value
    })
    console.log(e.detail.value);
  },
  //物品类型选择
  ChooseCheckbox(e) {
    console.log(e);
    let id = e.currentTarget.dataset.id;
    let name = e.currentTarget.dataset.name;
    if (id == 8) {
      this.setData({
        isshow: true,
        selectId: id,
        goodsName: ''
      })
    } else {
      this.setData({
        isshow: false,
        selectId: id,
        goodsName: name
      })
    }
  },
  //字数限制  
  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    //最多字数限制
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len //当前字数  
    });
  },
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '召唤师',
      content: '确定要删除这段回忆吗？',
      cancelText: '再看看',
      confirmText: '再见',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
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