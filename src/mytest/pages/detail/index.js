// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data_item: {
      src: "", 
      index: 0, 
      name: "", 
      time: ""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(decodeURIComponent(options.index))
    console.log(decodeURIComponent(options.name))
    console.log(decodeURIComponent(options.time))
    console.log(decodeURIComponent(options.src))
    this.setData({
      data_item: { 
          src: decodeURIComponent(options.src), 
          index: decodeURIComponent(options.index), 
          name: decodeURIComponent(options.name), 
          time: decodeURIComponent(options.time) 
        }
    })
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