<template>
  <div class="shops_header_main">
    <div class="shops_header_content">
      <p class="header_title">Магазины и услуги</p>
      <div class="header_info">
        <p>МЕГА открыта до 23:00</p>
        <p>14:00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopsHeader',
  components: {
  }
}
</script>

<style scoped lang="scss">
h1,h2,h,p{
  margin: 0px;
  padding: 0px;
}
.shops_header_main{
  width: 1920px;
  height: 201px;
}
.shops_header_content{
  height: 185px;
  display: flex;
  padding-top: 82px;
  p.header_title {
    width: 681px;
    height: 79px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 65px;
    line-height: 79px;
    color: #000000;
  }

  .header_info{
    display: flex;
    padding-top: 26px;
    margin-left: 688px;
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