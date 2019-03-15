Component({
  properties: {
    prop1: {
      type: String,
      value: 'index.properties'
    },
    prop2: {
      type: String,
      value: 'aa'
    }
  },
  data: {
    flag: false,
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: (s) => {
          console.log(s)
          this.setData({
            flag: true,
          })
        }
      })
    }
  },
  methods: {

  }
})
