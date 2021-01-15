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
import Rocher from "@/components/Rocher";
import DiscountCatalog from "@/components/DiscountCatalog";
import TommyHil from "@/components/TommyHil";
import SpecialOffers from "@/components/SpecialOffers";
import DodoOther from "@/components/DodoOther";
import PandoraOther from "@/components/PandoraOther";
import SamsungOther from "@/components/SamsungOther";
export default {
  name: 'Coupons',
  components: {
    SamsungOther,
    PandoraOther, DodoOther, SpecialOffers, TommyHil, DiscountCatalog, Rocher},
}
</script>
<style scoped lang="scss">

//#id{
//    background: #F2F2F2;
//}

p,h1,h2,h3{
  padding: 0;
  margin: 0;
}

.coupons_main{
  height: 2080px;
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
