// pages/resultPage/resultPage.js
const db=wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 传参不是自动的，要有接收
    // console.log(options)
    db.collection("questionnaire").where({
      name : options.questionName
    }).get().then(res=>{
      console.log(res.data)
      this.setData({
        questionaire: res.data,
        questionName: options.questionName
      })
      // 显示标签
      wx.showToast({
        title:"收到！"
      })
    }).catch(err=>{
      wx.showToast({
        title: '无法读取数据库',
        icon: 'none'
      })
      console.error("无法读取数据库"+err)
    })
  },

})