// components/item_bar/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    iconSrc: {
      type: String,
      value: '' // 默认图标
    },
    titleText: {
      type: String,
      value: 'Test' // 默认标题文本
    },
    titleSize: {
      type: String,
      value: '32rpx' // 默认标题文字大小
    },
    titleColor: {
      type: String,
      value: '#111111' // 默认标题文字颜色
    },
    detailText: {
      type: String,
      value: '测试用宝箱非常好' // 默认细节文本
    },
    detailSize: {
      type: String,
      value: '21rpx' // 默认细节文字大小
    },
    detailColor: {
      type: String,
      value: '#111111' // 默认细节文字颜色
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