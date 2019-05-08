// pages/product/productView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:"",
      productInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        id:options.pid
      });
      this.getProductInfo();
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

  },
  getProductInfo:function (){
    wx.request({
      url: 'http://api.leyou.com/api/item/product/productInfo/'+this.data.id,
      method:'get',
      success:(res)=>{
        console.log(res.data.data)
        this.setData({
          productInfo:res.data.data
        })
      }
    })
  }
})