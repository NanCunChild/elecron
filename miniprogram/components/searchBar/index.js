// components/searchBar/index.js
Component({
  properties: {
    search_holder: {
      type: String,
      value: '搜你感兴趣的',
      observer: function(newVal) {
        this.setData({ placeholder: newVal }); // 当属性值变化时，更新placeholder
      }
    }
  },

  data: {
    placeholder: "", // 初始化placeholder
    isTouchingSearchBtn: false,
    isTapingSearchBtn: false,
    tapingTimer: null,
  },

  ready: function() {
    this.setData({
      placeholder: this.data.search_holder // 组件加载时，设置placeholder的初始值
    });
  },

  methods: {
    onFormSubmit: function(event) {
      const searchValue = event.detail.value.searchInput;
      console.log("搜索内容：", searchValue);
      // 这里可以根据searchValue来执行搜索逻辑
    },

    onSearchBtnTouchStart: function(e) {
      this.setData({ isTouchingSearchBtn: true });
    },
    onSearchBtnTouchEnd: function(e) {
      this.setData({ isTouchingSearchBtn: false });
    },
    onSearchBtnTouched: function(e){
      this.setData({isTapingSearchBtn: true});
      clearTimeout(this.data.tapingTimer); // 清除之前的定时器
      const timer = setTimeout(() => {
        this.setData({ isTapingSearchBtn: false }); // 1秒后自动恢复未按下状态
      }, 300);
      this.setData({ touchTimer: timer });
    }
  }
});
