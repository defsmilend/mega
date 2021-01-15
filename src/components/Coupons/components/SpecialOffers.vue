<template>
  <div class="main">
    <router-link to="megafriends">
    <div class="offer_card">

    </div>
    </router-link>
<!--    <router-view />-->

  </div>
</template>

<script>
export default {
  name: 'SpecialOffers'
}
</script>

<style scoped lang="scss">

p,h1,h2,h3,a{
  padding: 0;
  margin: 0;
}
//.main{
//  margin-left: 40px;
//}
.offer_card{
  width: 644px;
  height: 660px;
  border-radius: 30px;
  background-image: url(../../../assets/offers.png);
  a {
    display: block;
  }
}

</style>