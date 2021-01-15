<template>
  <div class="navigation_main">
    <div class="nav_cards">
      <router-link
        to="/search"
        style="text-decoration: none; color: inherit;">
      <div class="nav_card_info">
        <img src="../../assets/nac_icons/search.png" class="search">
        <p>Поиск</p>
      </div>
      </router-link>
    </div>

    <div class="nav_cards">
      <router-link
          to="/map"
          style="text-decoration: none; color: inherit;">
      <div class="nav_card_info">
        <img src="../../assets/nac_icons/map.png" class="map">
        <p>Карта</p>
      </div>
      </router-link>
    </div>
    <div class="nav_cards">
      <router-link
        to="/shops_services"
        style="text-decoration: none; color: inherit;">
      <div class="nav_card_info">
        <img src="../../assets/nac_icons/shops.png" class="shops">
        <p class="shopsP">Магазины и услуги</p>
      </div>
      </router-link>
    </div>
    <div class="nav_cards">
      <div class="nav_card_info">
        <img src="../../assets/nac_icons/services.png" class="services">
        <p class="servicesP">Сервисы меги</p>
      </div>
    </div>
    <div class="nav_cards">
      <div class="nav_card_info">
        <img src="../../assets/nac_icons/cafe.png" class="cafe">
        <p class="cefeP">Рестораны и кафе</p>
      </div>
    </div>
    <div class="nav_cards">
      <div class="nav_card_info">
        <img src="../../assets/nac_icons/entertainments.png" class="entertainments">
        <p>Развлечения</p>
      </div>
    </div>
    <div class="nav_cards">
      <div class="nav_card_info">
        <img src="../../assets/nac_icons/guests.png" class="guests">
        <p class="guestsP">Гостям с детьми</p>
      </div>
    </div>
    <div class="nav_cards">
      <div class="nav_card_info">
        <img src="../../assets/nac_icons/invalid.png" class="invalid">
        <p class="invalidP">Забота об инвалидах</p>
      </div>
    </div>
    <div class="nav_cards">
      <div class="nav_card_info">
        <img src="../../assets/nac_icons/sales.png" class="sales">
        <p class="salesP">Новости и акции</p>
      </div>
    </div>
    <router-link to="/megafriends">
      <div class="nav_mega">
        <div class="nav_card_info">
        </div>
      </div>
    </router-link>

    <div class="add_info">
      <div class="about_megacenter">
        <p>о центре мега</p>
      </div>
      <div class="road">
        <p>как уехать</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Navigation',
  components: {
  }
}
</script>

<style scoped lang="scss">
h1,h2,h,p{
  margin: 0px;
  padding: 0px;
}
.navigation_main{
  display: flex;
  //margin-top: 23px;
  padding-top: 21px;
  padding-bottom: 22px;
  background: rgba(197, 211, 224, 0.6);
  backdrop-filter: blur(40px);
  box-sizing: border-box;

  .nav_cards{
    width: 160px;
    height: 160px;
    background: #FFFFFF;
    border-radius: 6px;
    margin-right: 10px;
  }
  .nav_cards:first-child{
    margin-left: 24px;
    box-sizing: border-box;
  }
}

.nav_card_info{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p{
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
    margin-top: 19px;
    //padding-bottom: 20px;
    box-sizing: border-box;
  }
}
.nav_mega{
  width: 115px;
  height: 160.05px;

  background: url(../../assets/nac_icons/megafriends.png);
  border-radius: 5px;
}

.search{
  width: 101px;
  height: 101px;
  padding: 6px 35px 0px 24px;
}
.map{
  width: 88px;
  height: 88px;
  padding-top: 15px;
}
.shops{
  width: 78px;
  height: 78px;
  padding-top: 20px;
}
.services{
  width: 86px;
  height: 86px;
  padding-top: 17px;
}
.cafe{
  width: 88px;
  height: 88px;
  padding-top: 15px;
}
.entertainments{
  width: 73px;
  height: 52px;
  padding-top: 39px;
}
.guests{
  width: 53px;
  height: 63px;
  padding-top: 27px;
}
.invalid{
  width: 53px;
  height: 54px;
  padding-top: 34px;
}
.sales{
  width: 59px;
  height: 59px;
  margin-top:  30px;
}
.shopsP{
  width: 110px;
  height: 34px;
}
.servicesP{
  width: 110px;
  height: 34px;
  margin-top: 3px;
}
.salesP{
  Width:126px;
  Height:34px;
  margin-top: 17px;
}

.lang_buttons{
  margin-left: 26px;
}

.rus_button{
  width: 46px;
  height: 46px;
  background: url('../../assets/nac_icons/ru.png') no-repeat;
  border-radius: 8px;
  margin-bottom: 6px;
  padding-top: 27px;
  p{
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    //padding-top: 15px;
    text-align: center;
    text-transform: uppercase;

    color: #FFFFFF;
  }
}

.eng_button{
  width: 46px;
  height: 46px;
  background: url('../../assets/nac_icons/ru.png') no-repeat;
  border-radius: 8px;
  margin-bottom: 6px;
  p{
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    padding-top: 15px;
    text-align: center;
    text-transform: uppercase;

    color:  #000000;;
  }
}

.add_info{
  display: flex;
  flex-direction: column;
  margin-left: 9px;
  .about_megacenter{
    width: 160px;
    height: 75px;
    margin-bottom: 10px;
    background: #FFFFFF;
    border-radius: 4px;
    display: flex;
    align-items: center;

    p{
      width: 149px;
      height: 17px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;

      text-align: center;
      text-transform: uppercase;

      color: #000000;
    }
  }
  .road{
    width: 160px;
    height: 75px;
    background: #FFFFFF;
    border-radius: 4px;
    display: flex;
    align-items: center;

    p{
      width: 149px;
      height: 17px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;

      text-align: center;
      text-transform: uppercase;

      color: #000000;
    }
  }
}


</style>
