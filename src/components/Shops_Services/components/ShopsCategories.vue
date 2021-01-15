<template>
  <div class="shops_categories_main">
    <div class="shops_categories_content">
      <!--      <div class="first_line">-->
      <!--        <ShopsCategoriesCard/>-->
      <!--        <ShopsCategoriesCard/>-->
      <!--        <ShopsCategoriesCard/>-->
      <!--        <ShopsCategoriesCard/>-->
      <!--      </div>-->
      <!--      <div class="second_line">-->
      <!--        <ShopsCategoriesCard/>-->
      <!--        <ShopsCategoriesCard/>-->
      <!--        <ShopsCategoriesCard/>-->
      <!--        <ShopsCategoriesCard/>-->
      <!--      </div>-->
      <div class="shops_categories_cards">
        <ShopsCategoriesCard v-for="(info,key) in cards_info"
                             :key="key"
                             :info="info"
        />
<!--        <ShopsCategoriesCard/>-->
<!--        <ShopsCategoriesCard/>-->
<!--        <ShopsCategoriesCard/>-->
<!--        <ShopsCategoriesCard/>-->
<!--        <ShopsCategoriesCard/>-->
<!--        <ShopsCategoriesCard/>-->
<!--        <ShopsCategoriesCard/>-->
<!--        <ShopsCategoriesCard/>-->
<!--        <ShopsCategoriesCard/>-->
<!--        <ShopsCategoriesCard/>-->
      </div>
      <div class="offer_card">
        <SpecialOffers/>
      </div>
    </div>
  </div>
</template>

<script>
import ShopsCategoriesCard from "@/components/Shops_Services/components/ShopsCategoriesCard";
import SpecialOffers from "@/components/Coupons/components/SpecialOffers";

export default {
  name: 'ShopsCategories',
  components: {
    SpecialOffers,
    ShopsCategoriesCard
  },
  data: function () {
    return {
      cards_info : [
        {title: 'Женская одежда и обувь', icon: require('../photos/ShopsCategoriesCardForWomen.png')},
        {title: 'Мужская одежда и обувь', icon: '../photos/electronic.png'},
        {title: 'Детские товары и услуги', icon: '@/components/Shops_Services/photos/child.png'},
        {title: 'Спорт и отдых', icon: '@/components/Shops_Services/photos/sport.png'},
        {title: 'Электроника', icon: '@/components/Shops_Services/photos/electronic.png'},
        {title: 'Аксессуары', icon: '@/components/Shops_Services/photos/accessories.png'},
        {title: 'Красота и здоровье', icon:'@/components/Shops_Services/photos/beauty.png'},
        {title: 'Продукты питания', icon:'@/components/Shops_Services/photos/products.png'},
        {title: 'Услуги', icon: '@/components/Shops_Services/photos/services.png'},
        {title: 'Домашний уют', icon: '@/components/Shops_Services/photos/home.png'},
        {title: 'Cкидки,акции и купоны', icon:'@/components/Shops_Services/photos/sales.png'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
h1, h2, h, p {
  margin: 0px;
  padding: 0px;
}

.shops_categories_main {
  margin-top: 34px;
  //width: 1076px;
}

.shops_categories_content {
  display: flex;
}

.shops_categories_cards {
  display: flex;
  flex-wrap: wrap;
  width: 1064px;
}

.offer_card {
  margin-left: 12px;
}
</style>