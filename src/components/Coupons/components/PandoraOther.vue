<template>
  <div class="pandora_card">
    <div class="pandora_content">
      <div class="logos">
        <h1>Pandora</h1>
        <h2>MegaFr</h2>
      </div>
      <div class="card_title">
        <h1>Второй кофе в подарок</h1>
      </div>

      <div class="card_info">
        <p>Хороший друг</p>
        <p>Действует до: 31.01.2021</p>
      </div>

      <div class="card_points">
        <h1>10 баллов</h1>
      </div>

      <a href="">Подробнее</a>

    </div>
  </div>
</template>

<script>
export  default {
  name:'PandoraOther'
}
</script>

<style scoped lang="scss">
h1,h2,h3,p,a{
  padding: 0px;
  margin: 0px;
}
.pandora_card{
  width: 327px;
  height: 543px;
  border-radius: 25px;
  background-color: #FFFFFF;
  margin-bottom: 30px;
}

.card_title{
  margin-bottom: 80px;
}
.card_info{
  p{
    margin-bottom: 10px;
  }
}

.pandora_content{
  display: flex;
  flex-direction: column;
  padding-top: 67px;
  padding-right: 50px;
  box-sizing: border-box;
  padding-left: 34px;

}

.logos{
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  h1{
    width: 107px;
  }
  h2{
    width: 50px;
  }

}
.card_info{
  margin-bottom: 80px;
}
.card_points{
  display: flex;

}
a{
  display: flex;
  color: blue;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  align-items: center;

}

</style>