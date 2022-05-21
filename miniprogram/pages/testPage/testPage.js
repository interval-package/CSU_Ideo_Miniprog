// pages/testPage/testPage.js
const db=wx.cloud.database()

Page({
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 传参不是自动的，要有接收
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
        title:"开始答题吧！"
      })
    }).catch(err=>{
      wx.showToast({
        title: '无法读取数据库',
        icon: 'none'
      })
      console.error("无法读取数据库"+err)
    })
  },

  submit(e){
    wx.redirectTo({
      url: '../resultPage/resultPage?questionName='+this.data.questionName,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

})