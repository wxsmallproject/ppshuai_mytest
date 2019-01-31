// pages/apps/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgItem:{
        index: 1,
        name: "美女1",
        src: "https://tse4-mm.cn.bing.net/th?id=OIP.5ikAOQ1qzwVpbn_mz4e66AAAAA&w=186&h=216&c=7&o=5&pid=1.7",
        time:"2019-01-31"
      },
    datalist: [
      {
        index: 1,
        name: "美女1",
        src: "https://tse4-mm.cn.bing.net/th?id=OIP.jvfrYIL1MT4kT90SRpjxUgHaHa&w=229&h=216&c=7&o=5&pid=1.7", 
        time:"2019-01-31"
      },
      {
        index: 2,
        name: "美女2",
        src: "https://tse4-mm.cn.bing.net/th?id=OIP.5ikAOQ1qzwVpbn_mz4e66AAAAA&w=186&h=216&c=7&o=5&pid=1.7",
        time: "2019-01-31"
      },
      {
        index: 3,
        name: "美女3",
        src: "https://tse3-mm.cn.bing.net/th?id=OIP.kKEWpMR1QflfX4VUkzwaDAAAAA&w=226&h=169&c=7&o=5&pid=1.7",
        time: "2019-01-31"
      },
      {
        index: 4,
        name: "美女4",
        src: "https://tse1-mm.cn.bing.net/th?id=OIP.FPveEQb31GmbQ79Jm30F7QHaG0&w=248&h=216&c=7&o=5&pid=1.7",
        time: "2019-01-31"
      },
      {
        index: 5,
        name: "美女5",
        src: "http://img2.imgtn.bdimg.com/it/u=1209241417,1814611123&fm=26&gp=0.jpg",
        time: "2019-01-31"
      },
      {
        index: 6,
        name: "美女6",
        src: "http://img0.imgtn.bdimg.com/it/u=2039214533,338464999&fm=26&gp=0.jpg",
        time: "2019-01-31"
      },
      {
        index: 7,
        name: "美女7",
        src: "http://img0.imgtn.bdimg.com/it/u=4267850904,3312099610&fm=26&gp=0.jpg",
        time: "2019-01-31"
      },
      {
        index: 8,
        name: "美女8",
        src: "http://img5.imgtn.bdimg.com/it/u=4139348770,2692025687&fm=26&gp=0.jpg",
        time: "2019-01-31"
      },
      {
        index: 9,
        name: "美女9",
        src: "http://img0.imgtn.bdimg.com/it/u=2510499557,4050581999&fm=26&gp=0.jpg",
        time: "2019-01-31"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for (let i = 0; i < this.data.datalist.length; i++) {
      this.data.datalist[i]["enindex"] = encodeURIComponent(this.data.datalist[i]["index"])
      this.data.datalist[i]["enname"] = encodeURIComponent(this.data.datalist[i]["name"])
      this.data.datalist[i]["ensrc"] = encodeURIComponent(this.data.datalist[i]["src"])
      this.data.datalist[i]["entime"] = encodeURIComponent(this.data.datalist[i]["time"])
    }
    this.setData({
      datalist: this.data.datalist
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