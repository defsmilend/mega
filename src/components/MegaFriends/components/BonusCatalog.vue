<template>
  <div class="bonus_catalog_main">
    <div class="bonus_catalog_content">
      <img src="../photos/bonus.png" alt="">
      <div class="catalog_info">
        <div class="captions">
          <div class="main_caption">
            <p>Каталог бонусов</p>
            <p>Меняй баллы на скидки, сервисы и подарочные карты</p>
          </div>
          <router-link to="news_sales" class="show_bonus">
            <p class="show">Показать все бонусы</p>
          </router-link>
        </div>
        <div class="cards">
          <div class="city"></div>
          <div class="palmetta"></div>
          <div class="digital_master"></div>
          <div class="city"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BonusCatalog',
  components: {}
}
</script>

<style scoped lang="scss">
h1, h2, h3, p {
  margin: 0px;
  padding: 0px;
}

.bonus_catalog_main {
  width: 1702px;
  height: 700px;
  background: #C5D3E0;
  border-radius: 32px;
  margin-top: 328px;

}

.bonus_catalog_content {
  display: flex;
  padding-right: 46px;
  box-sizing: border-box;

  img {
    width: 652px;
    height: 700px;
  }
}

.catalog_info {
  padding-top: 56px;

  .captions {
    display: flex;
  }

  .main_caption p:first-child {
    width: 453px;
    height: 55px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 47px;
    line-height: 117.03%;
    color: #000000;
  }

  .main_caption p:last-child {
    margin-top: 19px;
    width: 403px;
    height: 54px;
    font-family: Verdana;
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    line-height: 117.03%;
    color: #000000;
  }

  .show {
    margin-left: 346px;
    display: flex;
    padding-top: 108px;
    width: 220px;
    height: 19px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 117.03%;
    color: #4077A1
  }

  .cards {
    display: flex;
    margin-top: 29px;

    .palmetta {
      width: 242px;
      height: 424px;
      background: url('../photos/palmetta.png');
      border-radius: 20px;
      margin-right: 12px;
    }

    .digital_master {
      width: 241px;
      height: 424px;
      background: url('../photos/digital_master.png');
      border-radius: 20px;
      margin-right: 12px;

    }

    .city {
      width: 243px;
      height: 424px;
      border-radius: 20px;
      background: #FFFFFF;
      background: url('../photos/city.png');
      margin-right: 12px;

    }
  }
  .show_bonus{
    text-decoration: none;
    width: 220px;
    height: 19px;
  }

}
</style>