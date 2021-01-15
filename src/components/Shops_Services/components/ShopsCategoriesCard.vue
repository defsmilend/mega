<template>
  <div class="shops_categories_card_main" :style="cssVars">
    <div class="shops_categories_card_content">
      <p>{{ info.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopsCategoriesCard',
  props: ['info'],
  components: {},
  computed: {
    cssVars()
    {
      return {
        /* variables you want to pass to css */
        // '--color': this.info.icon,
        // "background-color": this.info.icon
        '--bg-color': this.info.icon
      }
    }
  }
}
</script>

<style scoped lang="scss">
h1,h2,h,p{
  margin: 0px;
  padding: 0px;
}
.shops_categories_card_main{
  width: 256px;
  height: 254px;
  //background-color: var(--bg-color);
  //background: url(');
  background-color: var(--bg-color);
  border-radius: 10px 10px 0px 0px;
  margin-right: 10px;
  margin-bottom: 25px;
}
.shops_categories_card_content{
  p{
    width: 195px;
    height: 44px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    padding-top: 189px;
    padding-left: 20px;
  }
}
</style>