<template>
  <div class="specials_main">
    <div class="specials_content">
      <div class="special_1">
        <img src="../photos/blue.png" alt="">
        <p>Возврат 0,5% баллами за все покупки в МЕГЕ</p>
      </div>
      <div class="special_2">
        <img src="../photos/yellow.png" alt="">
        <p>100 приветственных баллов за регистрацию в программе</p>
      </div>
      <div class="special_3">
        <img src="../photos/pink.png" alt="">
        <p>Cпецпредложения и акции</p>
      </div>
      <div class="special_4">
        <img src="../photos/gray.png" alt="">
        <p>Баллы за использование сервиса «Шопинг налегке» через мобильное приложение*</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Specials'
}
</script>

<style scoped lang="scss">
p,h1,h2,h3{
  margin: 0;
  padding: 0;
}
.specials_main{
  width: 1987px;
  height: 308px;
  margin-top: 64px;
  margin-left: 162px;
}
.specials_content{
  display: flex;

  .special_1{
    margin-right: 118px;
    img{
      width: 254px;
      height: 215px;
    }
    p{
      width: 226px;
      height: 44px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 140.03%;
      color: #000000;
      margin-top: 27px;
    }
  }
  .special_2{
    margin-right: 152px;
    img{
      width: 229px;
      height: 194px;
      padding-top: 11px;
    }
    p{
      width: 270px;
      height: 44px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 140.03%;
      color: #000000;
      margin-top: 37px;
    }
  }
  .special_3{
    margin-right: 130px;
    img{
      width: 221px;
      height: 187px;
      padding-top: 14px;
    }
    p{
      position: absolute;
      width: 270px;
      height: 22px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 140.03%;
      color: #000000;
      margin-top: 41px;
    }

  }
  .special_4{
    img{
      width: 254px;
      height: 215px;
    }
    p{
      width: 298px;
      height: 66px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 140.03%;
      text-align: center;
      color: #000000;
      margin-top: 27px;
    }

  }
}
</style>