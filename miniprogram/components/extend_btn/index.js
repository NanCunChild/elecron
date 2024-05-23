// components/extend_btn/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    backgroundColor: {
      type: String,
      value: '#284a7e'  // 默认背景颜色
    },
    borderRadius: {
      type: String,
      value: '32rpx'  // 默认边框圆角
    },
    iconSrc: {
      type: String,
      value: ''  // 默认图标
    },
    titleText: {
      type: String,
      value: 'Test'  // 默认标题文本
    },
    titleSize: {
      type: String,
      value: '46rpx'  // 默认标题文字大小
    },
    titleColor: {
      type: String,
      value: '#fefefe'  // 默认标题文字颜色
    },
    detailText: {
      type: String,
      value: '测试用宝箱非常好'  // 默认细节文本
    },
    detailSize: {
      type: String,
      value: '24rpx'  // 默认细节文字大小
    },
    detailColor: {
      type: String,
      value: '#fefefe'  // 默认细节文字颜色
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})