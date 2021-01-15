<template>
  <div class="megafriends_wrapper">
    <div class="megafr_main">
      <MegaFriendsHeader/>
      <LoyalityProgram/>
      <HowItWorks/>
      <BonusCatalog/>
      <Specials/>
      <GiftCards/>
    </div>
  </div>
</template>

<script>
import LoyalityProgram from "@/components/MegaFriends/components/LoyalityProgram";
import HowItWorks from "@/components/MegaFriends/components/HowItWorks";
import BonusCatalog from "@/components/MegaFriends/components/BonusCatalog";
import Specials from "@/components/MegaFriends/components/Specials";
import GiftCards from "@/components/MegaFriends/components/GiftCards";
import MegaFriendsHeader from "@/components/MegaFriends/components/MegaFriendsHeader";
export default {
  name: 'MegaFriendsPage',
  components: {MegaFriendsHeader, GiftCards, Specials, BonusCatalog, HowItWorks,LoyalityProgram},
  data(){return{

  }}
}
</script>

<style>
body{
  background: #FFFFFF !important;
}
</style>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');


p,h1,h2,h3{
  padding: 0;
  margin: 0;
}
.megafriends_wrapper{
  height: 2955px;
}

.megafr_main{
  background: #FFFFFF;
}
</style>
