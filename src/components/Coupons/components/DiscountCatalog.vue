<template>
  <div class="discountCatalog_card">
    <div class="card_description">
      <h1>Каталог скидок</h1>
      <p>Классные предложения в твой день рождения</p>
    </div>

  </div>

</template>

<script>
export default {
  name: 'DiscountCatalog'
}
</script>

<style scoped lang="scss">
p,h1,h2,h3{
  padding: 0;
  margin: 0;
}
.discountCatalog_card{
  width: 327px;
  height: 363px;
  background-image: url(../../../assets/Discount.png);
  margin-bottom: 30px;
  border-radius: 25px;
}
.card_description{
  display: flex;
  flex-direction: column;
  height: 139px;
  width: 327px;
  padding: 224px 29px 0 38px;
  box-sizing: border-box;
  h1{
    margin-bottom: 13px;
    width: 260px;
    height: 30px;
    padding-top: 22px;

    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
  }
  p{
    width: 208px;
    height: 48px;

    font-family: Gotham Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>