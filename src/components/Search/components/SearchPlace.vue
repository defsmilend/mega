<template>
  <div class="search_place_main">
    <div class="search_place_content">
      <p class="main_description">Поиск</p>
      <div class="filter_search_buttons">
        <button class="search_button_destination"><p>Поиск назначению</p></button>
        <button class="search_button_alphabet"><p>Поиск по алфавиту</p></button>
        <img src="../photos/row.png" alt="" class="row">
        <p class="input_discription">Вы можете ввести любое название как русскими, так и латинскими буквами</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPlace',
  components: {}
}
</script>

<style lang="scss" scoped>
h1, h2, h, p {
  margin: 0px;
  padding: 0px;
}

.search_place_content {
  padding-top: 50px;

  p.main_description {
    width: 157px;
    height: 56px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 46px;
    line-height: 56px;
    color: #000000;
  }

  .filter_search_buttons {
    margin-top: 14px;
    display: flex;

    button.search_button_destination {
      margin-top: 16px;
      width: 239px;
      height: 50px;
      background: #BDD6ED;
      border-radius: 64px;
      //outline: 0 !important;
      position: absolute;
      z-index: 2;
      border: medium none;

      p {
        width: 182px;
        height: 19px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #000000;
        //padding-left: 20px;
        margin-left: 20px;
      }
    }
    .search_button_alphabet {
      margin-top: 16px;
      width: 270px;
      height: 50px;
      background: #F5F5F5;
      border-radius: 64px;
      //outline: 0 !important;
      position: absolute;
      z-index: 1;
      margin-left: 204px;
      overflow: hidden;
      border: medium none;
      p{
        width: 180px;
        height: 19px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #000000;
        margin-left: 48px;
      }
    }
    img.row{
      margin-left: 554px;
      margin-top: 5px;
    }
    p.input_discription{
      width: 288px;
      height: 60px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
      margin-left: 17.66px;
    }
  }

}

</style>