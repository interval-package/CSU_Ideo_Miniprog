
const db = wx.cloud.database()

Page({
  // 存储请求结果
  data: {
    times: 0,
    slideButtons: [{
      extClass: 'starBtn',
      text: '详细',
      src: '../../../images/list/star.png'
    }, {
      type: 'warn',
      text: '不做了',
      src: '../../../images/list/trash.png'
    }],
  },

  onShow() {
    db.collection(getApp().globalData.collection).get().then(res=>{
      this.setData({
        events : res.data,
        times : res.data.length
      })
    }).catch(err=>{
      console.error(err)
    })
  },

  async toStudyPage(e){
    const tarId = e.currentTarget.dataset.index
    // var tarName = e.currentTarget.dataset.name
    const tarName = this.data.events[tarId].name
    // 优化：name由id经过events索引到
    console.log(tarName)
    // 这里导入了name，借助name去导向(还没改)
    wx.navigateTo({
      url: '../testPage/testPage?questionName='+tarName,
    })
  },

  // 响应左划按钮事件
  async slideButtonTap(e) {
    const {
      index
    } = e.detail
    // 根据序号获得待办对象
    const id = e.currentTarget.dataset.index

    console.log(index)
    // 处理星标按钮点击事件
    if (index === 0) {
      wx.showToast({
        title: '你点了个星星',
        icon:'none',
      })
    }
    // 处理删除按钮点击事件
    if (index === 1) {
      wx.showToast({
        title: '你觉得合适吗？',
        icon:'none',
      })
    }
  },

})