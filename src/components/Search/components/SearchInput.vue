<template>
  <div class="search_input_main">
    <div class="search_input_content">
      <form action="#">
        <input type="search" class="input_search" placeholder="Что будем искать?">
        <input type="submit" class="button_search" placeholder="">
<!--        <img src="../photos/search-icon.png" alt="" class="search_icon">-->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  components: {}
}
</script>

<style lang="scss" scoped>

* {
  box-sizing: border-box;
}
h1, h2, h3, p {
  padding: 0;
  margin: 0;
}

.search_input_main {
  margin-top: 40px;
}

input.input_search {
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 41px;
  width: 970px;
  height: 70px;
  outline: 0 !important;
  position: absolute;
  z-index: 1;
}
input.button_search{
  width: 141px;
  height: 62px;
  background: #18A06B;
  border-radius: 41px;
  position: absolute;
  z-index: 2;
  margin: 4px 4px 4px 825px;
  outline: 0 !important;

}
form{
}

input.input_search[placeholder] {
  font-family: Verdana;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #828282;
  padding-left: 30px;
}
img.search_icon{
  position: absolute;
  z-index: 3;
  margin-left: 885px;
  margin-top: 21.23px;
}
</style>