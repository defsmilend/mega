<template>
  <div class="popup_wrapper">
    <div class="v-popup">
      <div class="popup_header">
      <span>
        <img src="./photos/close.png" alt="" @click="closePopup">
      </span>
      </div>
      <div class="popup_content">
        <img src="./photos/app_store_qr_code.png" alt="">
        <p>Наведите камеру на QR-код, чтобы скачать приложение в App Store</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup_app_store",
  props: {},
  data() {
    return {}
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  }
}
</script>

<style scoped lang="scss">
p,h1,h2,h3{
  margin: 0;
  padding: 0;
}

.popup_wrapper{
  //background: rgba(64, 64, 64, .4);
  position: absolute;
  z-index: 10;
}
.v-popup {
  width: 487px;
  height: 498px;
  background: #FFFFFF;
  border-radius: 20px;
  margin-left: 646px;
  //
  top: 290px;
  box-shadow: 0 0 17px 0 #e7e7e7;
  //z-index: 10;
  .popup_header {
    padding-top: 27px;
    padding-left: 412px;
  }
  .popup_content{
    margin-top: 34px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      width: 203px;
      height: 203px;
    }
    p{
      width: 269px;
      height: 63px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 132.03%;
      text-align: center;
      color: #000000;
      margin-top: 40px;
    }
  }
}

</style>