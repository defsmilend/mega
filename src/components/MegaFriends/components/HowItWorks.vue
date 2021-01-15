<template>
  <div class="instruction_main">
    <div class="instruction">
      <div class="instruction_header">
        <p>Как это работает?</p>
        <p>MEGA Friends – это программа лояльности, доступная прямо в приложении МЕГИ и на сайте mega.ru. Копи баллы и обменивай их на скидки, сервисы и подарочные сертификаты в каталоге «Только для друзей». Получи доступ к специальному пространству в МЕГЕ и мероприятиям для участников программы.
        </p>
      </div>

      <div class="points">
        <div class="join">
          <img src="../photos/join.png" alt="" class="join_picture">
          <p class="first">Как присоединиться</p>
          <p>Зарегистрируйся в приложении МЕГА, на mega.ru или оформи банковскую карту на стойке. Сразу получи 100 приветственных баллов!
          </p>
        </div>
        <div class="collect">
          <img src="../photos/collect.png" alt="" class="collect_picture">
          <p class="first">Копи баллы</p>
          <p>Получай баллы за все покупки в МЕГЕ – просто сканируй чеки в приложении, или прямо на карту MEGA Friends – при оплате.
          </p>
        </div>
        <div class="use">
          <img src="../photos/use.png" alt="" class="use_picture">
          <p class="first">Используй баллы</p>
          <p>Покупай бонусы за баллы. Бонус появится в личном кабинете в «Моих бонусах», просто покажи его кассиру в магазине и получи скидку или подарок!
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default{
  name:'HowItWorks'
}
</script>

<style scoped lang="scss">
h1,h2,h3,p{
  margin: 0px;
  padding: 0px;
}
.instruction_main{
  margin-top: 30px;
  margin-left: 137px;
  width: 1447px;
  height: 116px;
}
.instruction_header{
  display: flex;
  flex-direction: column;
  p:first-child{
    width: 416px;
    height: 53px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 132.03%;
    color: #000000;
    padding-left: 515px;
  }
  p:last-child{
    width: 909px;
    height: 66px;
    font-family: Verdana;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 131.03%;
    text-align: center;
    color: #000000;
    margin-top: 10px;
    padding-left: 269px;
  }
}
.points{
  width: 1447px;
  height: 116px;
  display: flex;
  margin-top: 30px;

  img{
    padding-left: 150px;
  }
  .join_picture{
    width: 63.41px;
    height: 92.65px;
    transform: rotate(-5.85deg);
    margin-bottom: 31px;
  }
  .collect_picture{
    width: 103.42px;
    height: 104.27px;
    margin-bottom: 27px;
  }
  .use_picture{
    width: 93.6px;
    height: 65.87px;
    transform: rotate(-6.82deg);
    margin-bottom: 43.16px;
  }
  .use{
    padding-top: 23.68px;
    p.first{
      margin: 0 auto;
      width: 260px;
      height: 26px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 131.03%;
      text-align: center;
      color: #000000;
      padding-bottom: 10px;
    }
    p:last-child{
      width: 391px;
      height: 60px;
      font-family: Verdana;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #4F4F4F;
    }
  }
  .join{
    margin-right: 160px;
    p.first{
      margin: 0 auto;
      width: 260px;
      height: 26px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 131.03%;
      text-align: center;
      color: #000000;
      padding-bottom: 10px;

    }
    p:last-child{
      width: 391px;
      height: 60px;
      font-family: Verdana;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #4F4F4F;
    }
  }
  .collect{
    margin-right: 160px;

    p.first{
      margin: 0 auto;
      width: 260px;
      height: 26px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 131.03%;
      text-align: center;
      color: #000000;
      padding-bottom: 10px;

    }
    p:last-child{
      width: 391px;
      height: 60px;
      font-family: Verdana;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #4F4F4F;
    }
  }
  .collect{
    p{

    }
  }
}


</style>