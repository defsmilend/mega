<template>
    <div class="rocher_card">
      <img src="../../../assets/trace_logo.png" alt="">
      <div class="description">
        <h1>Забирай призы в Yves Rocher</h1>
        <p>Совершай покупки с 30 ноября по 25 декабря и получай призы</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Rocher'
}
</script>

<style scoped lang="scss">

p,h1,h2,h3{
  padding: 0;
  margin: 0;
}

.rocher_card{
  width: 328px;
  height: 452px;
  border-radius:33.5px;
  background-image: url(../../../assets/rocher.png);
  background-color: #F5B086;
  display: flex;
  flex-direction: column;
  img{
    width: 107px;
    height: 20.32px;
    padding-top: 54px;
    padding-left: 34px;
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
  background: #FFFFFF;
  opacity: 0.85;
  margin-top: 230.68px;
  border-radius: 0 0 33.5px 33.5px;
  h1{
    width: 229px;
    height: 61px;
    margin-top: 19px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 6px;
    box-sizing: border-box;

  }
  p{
    padding-bottom: 27px;
    font-family: Gotham Pro;
    width: 282px;
    height: 48px;
    box-sizing: border-box;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
