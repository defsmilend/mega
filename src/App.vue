<template>
  <div id="app">
    <div class="main_page">
      <div class="container">
        <router-view/>
      </div>
      <Navigation/>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation";
export default {
  name: 'App',
  components: {
    Navigation,
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
p,h1,h2,h3{
  padding: 0;
  margin: 0;
}
#app{
  width: 1920px;
  //height: 1883px;
  //width: 100vw;
  //height: 100vh;
}
.container{
  padding-left: 99px;
  padding-right: 99px;
}

</style>
