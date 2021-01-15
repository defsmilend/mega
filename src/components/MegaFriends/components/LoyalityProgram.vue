<template>
  <div class="loyality_main">
    <popup_app_store
        v-if="isInfoPopupVisible"
        @closePopup="closeInfoPopup"/>
    <popup_google_play
        v-if="isInfoPopupVisibleGoogle"
        @closePopupGoogle="closeInfoPopupGoogle"/>
  <div class="loyalty_program">
    <div class="logos">
      <img src="../../../assets/man.png" alt="">
      <img src="../../../assets/megaFriends.png" alt="">
    </div>
    <div class="captions">
      <p class="first_caption">MEGA Friends – это больше чем программа лояльности!</p>
      <p class="second_caption">Узнавай о скидках, акциях
        и мероприятиях в приложении МЕГА</p>
      <div class="apps">
        <button
            class="app_store"
            @click="showPopupInfo"
        ></button>
        <button
            class="google_pay"
            @click="showPopupInfoGoogle"
        ></button>
      </div>
      <p class="third_caption">Присоединяйся к MEGA Friends и получи <strong>100 баллов на покупку купонов!</strong></p>
    </div>
    <div class="phone">
      <img src="../photos/phone.png" alt="" class="phone_picture">
      <div class="back_qr"><img src="../photos/QR_code.png" alt="" class="qr_code"></div>
      <p class="phone_caption">Наведите камеру<br> на QR-код, чтобы перейти на страницу Mega.ru</p>
    </div>
  </div>
  </div>
</template>

<script>
import popup_app_store from "@/components/Popup/popup_app_store";
import popup_google_play from "@/components/Popup/popup_google_play";
export  default {
  name:'LoyalityProgram',
  components: {popup_google_play, popup_app_store},
  data(){
    return{
      isInfoPopupVisible:false,
      isInfoPopupVisibleGoogle: false
    }
  },
  methods:{
    showPopupInfo(){
      this.isInfoPopupVisible = true;
    },
    closeInfoPopup(){
      this.isInfoPopupVisible = false;
    },
    showPopupInfoGoogle(){
      this.isInfoPopupVisibleGoogle = true;
    },
    closeInfoPopupGoogle(){
      this.isInfoPopupVisibleGoogle = false;
    }

  }
}
</script>

<style scoped lang="scss">
h1,h2,h3,p{
  margin: 0px;
  padding: 0px;
}

.loyalty_program{
  width: 1720px;
  height: 379px;
  margin-top: 60px;
  display: flex;

  background: #EC733A;
  border-radius: 30px;
}
.logos{
  position: relative;
  width: 499px;
  height: 379px;
  padding-left: 46px;

}
.logos img{
  z-index: 1;
  position: absolute;
}
.logos img:last-child{
  z-index: 1;
  position: absolute;
  padding: 183px 1px 0px 365px;

}
.captions{
  width: 509px;
  display: flex;
  flex-direction: column;
  margin-left: 101px;
  padding-top: 46px;
  .first_caption{
    width: 509px;
    height: 80px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 132.03%;
    color: #000000;
    margin-bottom: 21px;
  }
  .second_caption{
    width: 453px;
    height: 56px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 140.03%;
    color: #000000;
  }
  .third_caption{
    width: 361px;
    height: 44px;
    font-family: Verdana;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 140.03%;
    color: #000000;
  }
  .apps{
    display: flex;
    margin: 19px 0px 21px 0px;
    .app_store{
      width: 140px;
      height: 42px;
      background: url('../photos/appstore.png');
      border-radius: 9px;
      border: medium none;
    }
    .google_pay{
      width: 136px;
      height: 42px;
      background: url('../photos/googlePay.png');
      border-radius: 9px;
      margin-left: 11px;
      border: medium none;

    }
  }
}
.phone{
  width: 351.01px;
  height: 345px;
  padding-top: 34px;
  padding-left: 78px;
  box-sizing: border-box;


  .phone_picture{
    position: absolute;
    z-index: 1;
  }

  .qr_code{
    width: 135.38px;
    height: 135.38px;
    position: relative;
    z-index: 1;
    margin-left: 95.2px;
    margin-top: 79.48px;
    background: #FFFFFF;
    border-radius: 13px;
    padding: 11.36px;
  }
  .phone_caption{
    position: absolute;
    z-index: 1;
    width: 217.48px;
    height: 58.52px;
    font-family: Verdana;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 135.03%;
    text-align: center;
    color: #000000;
    padding-left: 64px;
    padding-top: 14.64px;
  }
}
</style>