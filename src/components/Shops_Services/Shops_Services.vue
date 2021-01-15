<template>
  <div class="shops_services_wrapper">
    <div class="shops_services_main">
      <ShopsHeader/>
      <ShopsCategories/>
    </div>
  </div>
</template>

<script>
import ShopsHeader from "@/components/Shops_Services/components/ShopsHeader";
import ShopsCategories from "@/components/Shops_Services/components/ShopsCategories";
export default {
name: 'Shops_Services',
components: {
  ShopsCategories,
  ShopsHeader
}
}
</script>

<style scoped lang="scss">
h1,h2,h,p{
  margin: 0px;
  padding: 0px;
}
.shops_services_wrapper{
  height: 1072px;
}
</style>