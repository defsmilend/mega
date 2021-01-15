<template>
  <div class="search_help_main">
    <div class="search_help_content">
      <p class="header_title">Чаще всего ищут:</p>
      <div class="buttons_help">
        <button class="button_adidas"><p>Adidas</p></button>
        <button class="button_cafe"><p>Детское кафе «Шокол...</p></button>
        <button class="button_playground"><p>Детская площадка</p></button>
        <button class="button_edinorogshop"><p>edinorogshop</p></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchHelp',
  components: {}
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}

h1, h2, h3, p {
  padding: 0;
  margin: 0;
}
.search_help_main {
  margin-top: 140px;
}

p.header_title {
  width: 206px;
  height: 32px;
  font-family: Verdana;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: #000000;
}
.buttons_help{
  display: flex;
  margin-top: 10px;

  button.button_adidas{
    width: 101px;
    height: 50px;
    background: #F5F5F5;
    border-radius: 64px;
    //outline: 0 !important;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: medium none;

    p{
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #000000;
    }
  }
  button.button_cafe{
    width: 267px;
    height: 50px;
    background: #F5F5F5;
    border-radius: 64px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: medium none;
    p{
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #000000;
    }

  }
  button.button_playground{
    width: 214px;
    height: 50px;
    background: #F5F5F5;
    border-radius: 64px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: medium none;
    p{
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #000000;
    }

  }
  button.button_edinorogshop{
    width: 164px;
    height: 50px;
    background: #F5F5F5;
    border-radius: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: medium none;
    p{
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #000000;
    }

  }
}

</style>