<template>
  <div class="search_wrapper">
    <div class="search_main">
      <div class="search_place">
        <SearchPlace/>
        <SearchInput/>
        <SearchHelp/>
        <SearchKeyboard/>
      </div>
      <div class="special_offers_place">
        <SpecialOffersSmall/>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPlace from "@/components/Search/components/SearchPlace";
import SearchInput from "@/components/Search/components/SearchInput";
import SearchHelp from "@/components/Search/components/SearchHelp";
import SpecialOffersSmall from "@/components/Search/components/SpecialOffersSmall";
import SearchKeyboard from "@/components/Search/components/SearchKeyboard";

export default {
  name: 'Search',
  components: {
    SearchKeyboard,
    SpecialOffersSmall,
    SearchHelp,
    SearchInput,
    SearchPlace
  }
}
</script>

<style lang="scss" scoped>
h1, h2, h, p {
  margin: 0px;
  padding: 0px;
}

.search_wrapper {
  height: 877px;
}
.search_main{
  display: flex;
}
.special_offers_place{
  margin-left: 111px;
  margin-top: 235px;
}

</style>