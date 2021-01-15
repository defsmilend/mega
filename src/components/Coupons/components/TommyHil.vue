<template>
  <div class="tommy_card">
    <img src="../../../assets/tommy_logo.png" alt="">
    <div class="description">
      <h1>Скидка 15% в Tommy Hilfiger</h1>
      <p>С MEGACARD World Mastercard® до 31 декабря</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'TommyHil'
}
</script>

<style scoped lang="scss">

p,h1,h2,h3{
  padding: 0;
  margin: 0;
}
.tommy_card{
  width: 328px;
  height: 452px;
  border-radius:33.5px;
  background-image: url(../../../assets/tommy.png);
  display: flex;
  flex-direction: column;
  img{
    width: 36px;
    height: 27px;
    padding-top: 40px;
    padding-left: 38px;
  }
}
.description{
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  padding-left: 34px;
  box-sizing: border-box;
  width: 328px;
  height: 162px;
  margin-top: 230.68px;
  border-radius: 0 0 33.5px 33.5px;
  h1{
    width: 237px;
    height: 62px;
    margin-top: 19px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 9px;
    box-sizing: border-box;

  }
  p{
    padding-bottom: 24px;
    font-family: Gotham Pro;
    width: 272px;
    height: 48px;
    box-sizing: border-box;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>