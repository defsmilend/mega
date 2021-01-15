<template>
  <div class="header_main">
  <p class="mega_title">MEGA Friends</p>
  <div class="header_content">
    <div class="time">
      <p>МЕГА открыта до 23:00</p>
      <p>14:00</p>
    </div>
    <div class="road_history">
      <p>Магазины и услуги</p>
      <p>Женская одежда и обувь</p>
      <p>Levi's</p>
      <p>Скидка 20% на покупки</p>
      <p>Mega Friends</p>
    </div>
  </div>
  </div>
</template>

<script>
export  default {
  name:'MegaFriendsHeader'
}
</script>

<style scoped lang="scss">

h1,h2,h,p{
  margin: 0px;
  padding: 0px;
}

.mega_title{
  width: 177px;
  height: 29px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  //text-transform: uppercase;
  color: #000000;
  padding-top: 50px;
}
.header_content{
  margin-top: 29px;
  height: 33px;
  //display: flex;

  .road_history{
    display: flex;
    padding-top: 11px;

    p{
      margin-right: 44px;
      font-family: Verdana;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      color: #000000;
    }
    p:last-child{
      font-family: Verdana;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      color: #828282;
      margin-right: 0px;
    }
  }
  .time{
    width: 350px;
    height: 24px;
    display: flex;
    float: right;
    p:first-child{
      margin-right: 40px;
      width: 245px;
      height: 24px;
      left: 1468px;
      top: 108px;

      font-family: Verdana;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;

      color: #000000;
    }
    p:last-child{
      width: 65px;
      height: 24px;
      left: 1753px;
      top: 108px;

      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;

      color: #000000;

    }

  }
}
</style>