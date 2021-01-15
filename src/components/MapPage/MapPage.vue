<template>
  <div class="map_page_main">
    <div class="map_page_content">
      <MapHeader/>
      <div class="map_content">
        <Map/>
        <div class="coupons">
          <MapCouponJoin/>
          <MapCoupons/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MapHeader from "@/components/MapPage/components/MapHeader";
import Map from "@/components/MapPage/components/Map";
import MapCouponJoin from "@/components/MapPage/components/MapCouponJoin";
import MapCoupons from "@/components/MapPage/components/MapCoupons";
export default {
  name:'MapPage',
  components: {MapCoupons, MapCouponJoin, Map, MapHeader},
}
</script>

<style scoped lang="scss">

p,h1,h2,h3{
  padding: 0;
  margin: 0;
}
.map_page_main{
  width: 1920px;
  height: 878px;
}
.map_content{
  display: flex;
}


</style>