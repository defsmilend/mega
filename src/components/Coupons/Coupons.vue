<template>
  <div id="app">
  <div class="coupons">
    <div class="title_name">
      <h1>Специальные предложения МЕГИ</h1>
    </div>
    <div class="coupons_main">
    <div class="coupons_column1">
      <Rocher/>
      <DodoOther/>
      <Rocher/>
    </div>

    <div class="coupons_column2">
      <PandoraOther/>
      <DiscountCatalog/>
      <PandoraOther/>
    </div>

    <div class="coupons_column3">
      <TommyHil/>
      <SamsungOther/>
      <TommyHil/>
    </div>

    <SpecialOffers/>
    </div>
  </div>
  </div>
</template>

<script>
import Rocher from "@/components/Coupons/components/Rocher";
import DiscountCatalog from "@/components/Coupons/components/DiscountCatalog";
import TommyHil from "@/components/Coupons/components/TommyHil";
import SpecialOffers from "@/components/Coupons/components/SpecialOffers";
import DodoOther from "@/components/Coupons/components/DodoOther";
import PandoraOther from "@/components/Coupons/components/PandoraOther";
import SamsungOther from "@/components/Coupons/components/SamsungOther";
export default {
  name: 'Coupons',
  components: {
    SamsungOther,
    PandoraOther, DodoOther, SpecialOffers, TommyHil, DiscountCatalog, Rocher},
}
</script>
<style>
/*body{*/
/*  background: #F2F2F2 !important;*/

/*}*/
</style>

<style scoped lang="scss">

p,h1,h2,h3{
  padding: 0;
  margin: 0;
}
body{
  //background: #F2F2F2;
}
.coupons{
  //background: #F2F2F2;
}

.coupons_main{
  width: 1920px;
  height: 1680px;
  margin-top: 50px;
  display: flex;
  //background: #F2F2F2;
}

.coupons_column1{
  margin-right: 21px;
}
.coupons_column2{
  margin-right: 21px;
}
.coupons_column3{
  margin-right: 40px;
}

.title_name h1{
  padding-top: 74px;
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  line-height: 61px;
  font-style: normal;
  font-weight: bold;
  color: #000000;
}

</style>
