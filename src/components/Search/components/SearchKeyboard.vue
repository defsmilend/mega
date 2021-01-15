<template>
  <div class="search_keyboard_main">
    <div class="search_keyboard_content">
      <div class="first_row">
        <button class="little_button"><p>й</p></button>
        <button class="little_button"><p>ц</p></button>
        <button class="little_button"><p>у</p></button>
        <button class="little_button"><p>к</p></button>
        <button class="little_button"><p>е</p></button>
        <button class="little_button"><p>н</p></button>
        <button class="little_button"><p>г</p></button>
        <button class="little_button"><p>ш</p></button>
        <button class="little_button"><p>щ</p></button>
        <button class="little_button"><p>з</p></button>
        <button class="little_button"><p>х</p></button>
        <button class="large_button"><img src="../photos/strelka_for_button.png" alt=""></button>
      </div>
      <div class="second_row">
        <button class="little_button"><p>ф</p></button>
        <button class="little_button"><p>ы</p></button>
        <button class="little_button"><p>в</p></button>
        <button class="little_button"><p>а</p></button>
        <button class="little_button"><p>п</p></button>
        <button class="little_button"><p>р</p></button>
        <button class="little_button"><p>о</p></button>
        <button class="little_button"><p>л</p></button>
        <button class="little_button"><p>д</p></button>
        <button class="little_button"><p>ж</p></button>
        <button class="large_button"><p>Найти</p></button>
      </div>
      <div class="third_row">
        <button class="little_button"><p>я</p></button>
        <button class="little_button"><p>ч</p></button>
        <button class="little_button"><p>с</p></button>
        <button class="little_button"><p>м</p></button>
        <button class="little_button"><p>и</p></button>
        <button class="little_button"><p>т</p></button>
        <button class="little_button"><p>ь</p></button>
        <button class="little_button"><p>б</p></button>
        <button class="little_button"><p>ю</p></button>
        <button class="little_button"><p>э</p></button>
        <button class="little_button"><p>ё</p></button>
        <button class="little_button"><p>ъ</p></button>
      </div>
      <div class="fourth_row">
        <button class="middle_button"><p>Eng</p></button>
        <button class="space_button"><p></p></button>
        <button class="middle_button"><p>#%+</p></button>
        <button class="middle_button"><p>123</p></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchKeyboard',
  components: {}
}
</script>

<style lang="scss" scoped>
h1, h2, h, p {
  margin: 0px;
  padding: 0px;
}

.search_keyboard_main {
  //margin-top: 140px;
  width: 965px;
  height: 276px;
  background: #EDCC00;
  border-radius: 35px;
  margin-top: 140px;
}

.search_keyboard_content {
  padding: 30px 126px 30px 131px;


  .little_button {
    width: 45px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 64px;
    border: medium none;
    margin-right: 10px;
  }
  .middle_button{
    width: 85px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 34px;
    border: medium none;
    margin-right: 10px;
    p{
      ont-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #000000;
    }
  }
  .middle_button:last-child{
    margin-right: 0px;
  }
  p {
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #000000;
  }
}

.first_row {
  display: flex;

  .large_button {
    width: 100px;
    height: 45px;
    left: 836px;
    top: 588px;
    background: #EF9E94;
    border-radius: 34px;
    border: medium none;

    img {
      width: 44px;
      height: 44px;
    }
  }
}

.second_row {
  margin-top: 10px;
  margin-left: 31px;


  .large_button {
    width: 100px;
    height: 45px;
    left: 836px;
    top: 588px;
    background: #18A06B;
    border-radius: 34px;
    border: medium none;

    p {
      width: 58px;
      height: 16px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #FFFFFF;
      padding-left: 15px;
    }
  }
}

.third_row {
  margin-top: 10px;
}
.fourth_row{
  margin-top: 16px;

  .space_button{
    width: 423px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 34px;
    border: medium none;
    padding-top: 16px;
    margin-right: 10px;
  }
}

</style>