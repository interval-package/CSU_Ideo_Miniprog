// pages/eventPage/evenPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slideButtons: [{
      extClass: 'starBtn',
      text: '详细',
      src: '../../../images/list/star.png'
    }, {
      type: 'warn',
      text: '其他信息',
      src: '../../../images/list/trash.png'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  toVideoPage(e){
    wx.redirectTo({
      url: '../videoPage/videoPage',
    })
  },

  unMadeFun(e){
    wx.showToast({
      title: '还在升级中，敬请期待',
      icon:'none',
    })
  }
})