<template>
  <div class="gift_cards_main">
  <div class="gift_cards_content">
    <p class="header_content_caption">Чем ближе дружим, тем больше получаем!</p>
    <div class="cards">
      <div class="good_friend">
          <div class="first_part">
            <img src="../photos/heart.png" alt="">
            <p>Хороший друг</p>
          </div>

        <div class="second_part">
          <img src="../photos/coupon.png" alt="">
          <p>Купоны из каталога</p>
        </div>

      </div>
      <div class="clear_friend">
        <div class="first_part">
          <div class="hearts">
            <img src="../photos/heart.png" alt="">
            <img src="../photos/heart.png" alt="">
          </div>
          <p>Близкий друг</p>
        </div>
        <div class="second_part">
          <img src="../photos/coupon.png" alt="">
          <p>Купоны из каталога</p>
        </div>
        <div class="third_part">
          <img src="../photos/hands.png" alt="">
          <p>Сервисы</p>
        </div>
      </div>
      <div class="best_friend">
      <div class="first_part">
        <div class="hearts">
          <img src="../photos/heart.png" alt="">
          <img src="../photos/heart.png" alt="">
          <img src="../photos/heart.png" alt="">
        </div>
        <p>Лучший друг</p>
      </div>
        <div class="second_part">
          <img src="../photos/coupon.png" alt="">
          <p>Купоны из каталога</p>
        </div>
        <div class="third_part">
          <img src="../photos/hands.png" alt="">
          <p>Сервисы</p>
        </div>
        <div class="fourth_part">
          <img src="../photos/gift.png" alt="">
          <p class="giftP">Подарочные карты</p>
        </div>
      </div>
    </div>
    <img class="family" src="../photos/family.png" alt="">

  </div>
  </div>
</template>
<script>
export  default {
  name:'GiftCards'
}
</script>

<style scoped lang="scss">
p,h1,h2,h3{
  padding: 0px;
  margin: 0px;
}
.gift_cards_main{
  width: 1720px;
  height: 729px;
  background: #539286;
  border-radius: 32px;
  margin-top: 86px;
}
.gift_cards_content{
  display: flex;
  p.header_content_caption{
    padding:263px 0px 183px 110px;
    width: 359px;
    height: 283px;
    font-family: Verdana;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 123.53%;
    color: #000000;
  }
  img.family{
    width: 535px;
    height: 600px;
    border-radius: 26px;
    padding-top: 129px;
    margin-left: 10px;
  }
  .cards{
    padding-top: 110px;
    margin-left: 71px;
    .good_friend{
      width: 361px;
      height: 171px;
      background: #C5D3E0;
      border-radius: 85.5px;
      display: flex;

      .first_part{
        height: 58px;
        width: 120px;
        padding-top: 56px;
        padding-left: 40px;
        margin-right: 7px;
        img{
          width: 14.28px;
          height: 12.27px;
          padding-left: 53.36px;
        }
        p{
          width: 120px;
          height: 48px;
          font-family: Verdana;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 118.53%;
          text-align: center;
          color: #000000;
        }

      }
      .second_part{
        width: 136px;
        height: 129.21px;
        padding-top: 20.95px;
        img{
          width: 81px;
          height: 86px;
          padding-left: 26.12px;
        }
        p{
          width: 136px;
          height: 38px;
          font-family: Verdana;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 118.53%;
          text-align: center;
          color: #000000;
        }
      }
    }
    .clear_friend{
      width: 490px;
      height: 171px;
      background: #9FBBB3;
      border-radius: 85.5px;
      display: flex;
      .first_part{
        height: 58px;
        width: 120px;
        padding-top: 56px;
        padding-left: 40px;
        margin-right: 7px;
        .hearts{
          display: flex;
          img{
            width: 14.28px;
            height: 12.27px;
            padding-left: 40px;
          }
          img:last-child{
            padding-left: 2.72px;
          }
        }
        p{
          width: 120px;
          height: 48px;
          font-family: Verdana;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 118.53%;
          margin-top: 11px;
          text-align: center;
          color: #000000;
        }
      }
      .second_part{
        width: 136px;
        height: 129.21px;
        padding-top: 20.95px;
        img{
          width: 81px;
          height: 86px;
          padding-left: 26.12px;
        }
        p{
          width: 136px;
          height: 38px;
          font-family: Verdana;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 118.53%;
          text-align: center;
          color: #000000;
        }
      }
      .third_part{
        padding-top: 29.25px;
        margin-left: 29px;
        width: 82px;
        img{
          width: 82px;
          height: 88px;
        }
        p{
          width: 136px;
          height: 19px;
          font-family: Verdana;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 118.53%;
          color: #000000;
        }
      }


    }
    .best_friend{
      width: 633px;
      height: 171px;
      background: #DACDC4;
      border-radius: 85.5px;
      display: flex;
      .first_part{
        height: 58px;
        width: 120px;
        padding-top: 56px;
        padding-left: 40px;
        margin-right: 7px;
        .hearts{
          display: flex;
          img{
            width: 14.28px;
            height: 12.27px;
            padding-left: 40px;
          }
          img:last-child{
            padding-left: 2.72px;
          }
          img:nth-child(2n){
            padding-left: 2.72px;
          }
        }
        p{
          width: 120px;
          height: 48px;
          font-family: Verdana;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 118.53%;
          margin-top: 11px;
          text-align: center;
          color: #000000;
        }
      }
      .second_part{
        width: 136px;
        height: 129.21px;
        padding-top: 20.95px;
        img{
          width: 81px;
          height: 86px;
          padding-left: 26.12px;
        }
        p{
          width: 136px;
          height: 38px;
          font-family: Verdana;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 118.53%;
          text-align: center;
          color: #000000;
        }
      }
      .third_part{
        padding-top: 29.25px;
        margin-left: 29px;
        width: 88px;
        img{
          width: 82px;
          height: 88px;
        }
        p{
          width: 136px;
          height: 19px;
          font-family: Verdana;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 118.53%;
          color: #000000;
        }
      }
      .fourth_part{
        width: 136px;
        height: 116px;
        padding-top: 34px;
        display: flex;
        flex-direction: column;
        margin-left: 27px;
        img{
          width: 81px;
          height: 55px;
          padding-left: 28px;
        }
        p.giftP{
          width: 136px;
          height: 38px;
          font-family: Verdana;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 118.53%;
          text-align: center;
          color: #000000;
          margin-top: 23px;

        }
      }
    }
  }

}
</style>