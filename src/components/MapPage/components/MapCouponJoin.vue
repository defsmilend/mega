<template>
    <div class="map_coupons_content">
      <div class="joun_us_main">
        <img src="../photos/coupon_back.png" alt="" class="qr_code_background">
        <div class="join_us_content">
          <div class="left_info">
            <div class="main_title">
              <p class="title">Присоединяйся к MEGA Friends</p>
              <img src="../photos/vector.png" alt="" class="vector">
            </div>
            <p class="caption">Получи специальные предложения для участников программы лояльности</p>
            <button><p>Подробнее</p></button>
        </div>
          <div class="right_info">
            <img src="../photos/map_qr_code.png" alt="" class="qr_code">
            <p>Получи<br> 100 баллов в подарок</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'MapCouponJoin'
}
</script>

<style scoped lang="scss">
p,h1,h2,h3{
  padding: 0;
  margin: 0;
}
.map_coupons_content{
  margin-left: 60px;
  .joun_us_main{
    width: 595px;
    height: 234px;
    background: #EDCB2E;
    border-radius: 20px;
    position: relative;
    z-index: 1;
    img.qr_code_background{
      position: absolute;
      z-index: 2;
      padding-left: 325px;
    }

    .join_us_content{
      padding-left: 36px;
      padding-top: 33px;
      display: flex;
      position: absolute;
      z-index: 2;

      .left_info{
        .main_title{
          display: flex;
          img.vector{
            width: 124.69px;
            height: 22.43px;
            padding-top: 33px;
            padding-left: 22.76px;
          }

        }
        p.title{
          width: 211px;
          height: 78px;
          font-family: Verdana;
          font-style: normal;
          font-weight: bold;
          font-size: 23px;
          line-height: 138.53%;
          color: #000000;
        }
        p.caption{
          width: 287px;
          height: 44px;
          font-family: Verdana;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 129%;
          color: #000000;
        }
        button{
          margin-top: 12px;
          width: 166px;
          height: 49px;
          background: #FFFFFF;
          border-radius: 48px;
          display: flex;
          align-items: center;
          p{
            width: 209.03px;
            height: 17.99px;
            font-family: Verdana;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 132.03%;
            text-align: center;
            color: #000000;
          }
        }
      }
      .right_info{
        margin-left: 32.76px;
        //position: relative;
        //z-index: 1;
        img.qr_code{
          padding-top: 17px;
          position: absolute;
          z-index: 3;
        }
        p{
          padding-top: 128px;
          width: 102px;
          height: 55px;
          font-family: Verdana;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 140.03%;
          text-align: center;
          color: #000000;
        }
      }
    }
  }
}
</style>