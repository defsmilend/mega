<template>
  <div class="map_header_main">
    <div class="map_header_content">
      <p class="header_title">Карта</p>
      <div class="header_info">
        <p>МЕГА открыта до 23:00</p>
        <p>14:00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'MapHeader'
}
</script>

<style scoped lang="scss">
p,h1,h2,h3{
  padding: 0;
  margin: 0;
}
.map_header_main{
  height: 185px;
  width: 1920px;
}
.map_header_content{
  height: 185px;
  display: flex;
  padding-top: 74px;
  p.header_title {
    width: 157px;
    height: 61px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 61px;
    color: #000000;
  }

  .header_info{
    display: flex;
    padding-top: 34px;
    margin-left: 1212px;
    width: 350px;
    height: 24px;
    p:first-child{
      margin-right: 40px;
      width: 245px;
      height: 24px;
      font-family: Verdana;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
    }
    p:last-child{
      width: 65px;
      height: 24px;
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