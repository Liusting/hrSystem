// pages/My/advice/index.js
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
    html: '<div class="div_class" style="line-height: 30px;">　　本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约。本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。<br>&nbsp;栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约本报北京6月20日电 十三届全国人大常委会第十九次会议20日上午在北京人民大会堂闭幕。会议经表决，通过了公职人员政务处分法、新修订的档案法、新修订的人民武装警察法。国家主席习近平分别签署第46、47、48号主席令予以公布。栗战书委员长主持会议常委会组成人员160人出席会议，出席人数符合法定人数。会议表决通过了全国人大常委会关于加入《武器贸易条约》的决定，决定加入这个条约</div>',
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
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