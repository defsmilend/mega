<template>
  <div class="special_offers_main">
    <router-link to="megafriends">
      <div class="special_offers_content">
        <img src="../photos/special_offer.png" alt="">
      </div>

    </router-link>
<!--    <router-view/>-->
  </div>

</template>

<script>
export default {
  name: 'SpecialOffersSmall',
  components: {}
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

h1, h2, h3, p {
  padding: 0;
  margin: 0;
}

.special_offers_main {
  width: 644px;
  height: 599px;
}

</style>