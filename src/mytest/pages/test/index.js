// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag:4,
    time: new Date().toString(),
    str:"123456",
    a:1,
    b:2,
    c:3,
    infolist:[1,2,3,4],
    textlist:[{msg:"文本一"},{msg:"文本二"}],
    objectList: [{ id: 1, unique: "u1" }, { id: 2, unique: "u2" }, { id: 3, unique: "u3" }],
    numberList:[1,2,3]
  },
  switch:function(e){
    let length = this.data.objectList.length
    for(let i = 0; i < length; i++)
    {
      let x = Math.floor(Math.random() * length)
      let y = Math.floor(Math.random() * length)
      let temp = this.data.objectList[y]
      this.data.objectList[x] = this.data.objectList[y]
      this.data.objectList[y] = temp
    }
    this.setData({
      objectList:this.data.objectList
    })
  },
  addToFront:function(e)
  {
    let length = this.data.objectList.length
    this.data.objectList = [{id:length, unique:'u'+length}].concat(this.data.objectList)
    this.setData({ objectList: this.data.objectList})
  },
  addNumberToFront:function(e)
  {
      this.data.numberList = [this.data.numberList.length + 1].concat(this.data.numberList)
      this.setData({numberList:this.data.numberList})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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