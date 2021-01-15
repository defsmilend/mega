<template>
  <div class="map_coupons_main">
    <div class="map_coupons_content">
<!--      <img src="../photos/MegFriends.png" alt="" class="mega_friends_logo">-->

      <div class="header">
        <p>Купоны Mega Friends</p>
        <p>Все купоны</p>
      </div>
      <div class="coupon_lists_content">
        <div class="mega_friends_logos">
          <img src="../photos/MegFriends.png" alt="" class="mega_friends_logo">
          <img src="../photos/MegFriends.png" alt="" class="mega_friends_logo2">
          <img src="../photos/MegFriends.png" alt="" class="mega_friends_logo3">
        </div>
        <div class="ellipses">
          <img src="../photos/Ellipse.png" alt="" class="ellipse">
          <img src="../photos/Ellipse.png" alt="" class="ellipse2">
          <img src="../photos/Ellipse.png" alt="" class="ellipse3">
          <img src="../photos/Ellipse.png" alt="" class="ellipse4">
          <img src="../photos/Ellipse.png" alt="" class="ellipse5">
          <img src="../photos/Ellipse.png" alt="" class="ellipse6">
        </div>
        <div class="coupon_levis">
          <img src="../photos/levis.png" alt="" class="levis_logo">
          <p class="main_caption">Скидка до 5% на покупку</p>
          <p class="status">Друг</p>
          <p class="validity">Действует до: 30.11.2020</p>
          <div class="points_line">
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>

          </div>
          <div class="bottom_caption">
            <div class="marks">
              <p>25</p>
              <p>баллов</p>
            </div>
            <p class="more_link">Подробнее</p>
          </div>
        </div>
        <div class="coupon_decatlon">
          <img src="../photos/decatlon.png" alt="" class="levis_logo">
          <p class="main_caption">Скидка до 5% на покупку</p>
          <p class="status">Друг</p>
          <p class="validity">Действует до: 30.11.2020</p>
          <div class="points_line">
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
          </div>
          <div class="bottom_caption">
            <div class="marks">
              <p>25</p>
              <p>баллов</p>
            </div>
            <p class="more_link">Подробнее</p>
          </div>
        </div>
        <div class="coupon_calvin">
          <img src="../photos/calvin.png" alt="" class="levis_logo">
          <p class="main_caption">Скидка до 5% на покупку</p>
          <p class="status">Друг</p>
          <p class="validity">Действует до: 30.11.2020</p>
          <div class="points_line">
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
            <div class="points"></div>
          </div>
          <div class="bottom_caption">
            <div class="marks">
              <p>25</p>
              <p>баллов</p>
            </div>
            <p class="more_link">Подробнее</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export  default {
  name:'MapCoupons'
}
</script>

<style scoped lang="scss">
p,h1,h2,h3{
  margin: 0;
  padding: 0;
}
.map_coupons_main{
  margin-left: 60px;
  margin-top: 31px;
}
.map_coupons_content{
  width: 595px;

  .header{
    display: flex;
    justify-content: space-between;
    p:first-child{
      width: 251px;
      height: 24px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #000000;
    }
    p:last-child{
      width: 136px;
      height: 24px;
      font-family: Verdana;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #4077A1;
    }
  }
  .coupon_lists_content{
    height: 327px;
    background: #C6D3DF;
    border-radius: 20px;
    margin-top: 17px;
    display: flex;
    position: relative;
    z-index: 1;
    img.mega_friends_logo{
      position: absolute;
      z-index: 2;
      padding-left: 149px;
    }
    img.mega_friends_logo2{
      position: absolute;
      z-index: 2;
      padding-left: 348px;
    }
    img.mega_friends_logo3{
      position: absolute;
      z-index: 2;
      padding-left: 547px;
    }
    img.ellipse{
      position: absolute;
      z-index: 2;
      margin-left: 3.79px;
      margin-top: 227px;
      width: 14.41px;
      height: 14.41px;
      background: #C6D3DF;
      border-radius: 50%;
    }
    img.ellipse2{
      position: absolute;
      z-index: 2;
      margin-left: 179px;
      margin-top: 227px;
      width: 14.41px;
      height: 14.41px;
      background: #C6D3DF;
      border-radius: 50%;
    }
    img.ellipse3{
      position: absolute;
      z-index: 2;
      margin-left: 202.79px;
      margin-top: 227px;
      width: 14.41px;
      height: 14.41px;
      background: #C6D3DF;
      border-radius: 50%;
    }
    img.ellipse4{
      position: absolute;
      z-index: 2;
      margin-left: 378px;
      margin-top: 227px;
      width: 14.41px;
      height: 14.41px;
      background: #C6D3DF;
      border-radius: 50%;
    }
    img.ellipse5{
      position: absolute;
      z-index: 2;
      margin-left: 401.79px;
      margin-top: 227px;
      width: 14.41px;
      height: 14.41px;
      background: #C6D3DF;
      border-radius: 50%;
    }
    img.ellipse6{
      position: absolute;
      z-index: 2;
      margin-left: 577px;
      margin-top: 227px;
      width: 14.41px;
      height: 14.41px;
      background: #C6D3DF;
      border-radius: 50%;
    }
    .coupon_levis{
      margin: 10px 24px 0px 11px;
      width: 175px;
      height: 307px;
      background: #FFFFFF;
      border-radius: 10px;
      //padding-left: 21px;
      box-sizing: border-box;
      img.levis_logo{
        width: 51px;
        height: 51px;
        padding-top: 23px;
        padding-left: 21px;
      }
      p.main_caption{
        padding-left: 21px;
        width: 146px;
        height: 77px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 140.03%;
        color: #000000;
        margin-top: 19px;
      }
      p.status{
        width: 42px;
        height: 16px;
        font-family: Verdana;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 140.03%;
        color: #C0C0C0;
        padding-left: 21px;
      }
      p.validity{
        margin-top: 2px;
        width: 179px;
        height: 16px;
        font-family: Verdana;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 140.03%;
        color: #4077A1;
        padding-left: 21px;
      }
      .points_line{
        display: flex;
        margin-top: 13px;
        padding-left: 15px;
        padding-right: 15px;
        width: 144.82px;
        height: 4.32px;
        .points{
          width: 4.32px;
          height: 4.32px;
          background: #C4C4C4;
          margin-right: 6.48px;
          border-radius: 50%;
        }
        .points:last-child{
          margin-right: 0px;
        }
      }
      .bottom_caption{
        margin-top: 17.49px;
        padding-left: 21px;
        .marks{
          display: flex;
          p:first-child{
            font-family: Verdana;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 138.53%;
            color: #DA474D;
            margin-right: 6px;
            margin-bottom: 5px;
            box-sizing: border-box;
          }
          p:last-child {
            padding-top: 4.14px;
            width: 63.12px;
            height: 14.12px;
            font-family: Verdana;
            font-style: normal;
            font-weight: normal;
            font-size: 14.9492px;
            line-height: 138.53%;
            color: #DA474D;
          }
        }
        p.more_link{
          width: 85px;
          height: 19px;
          left: 21px;
          top: 281px;

          font-family: Verdana;
          font-style: normal;
          font-weight: bold;
          font-size: 10px;
          line-height: 117.03%;
          color: #000000;
        }
      }
    }
    .coupon_decatlon{
      margin: 10px 24px 0px 0px;
      width: 175px;
      height: 307px;
      background: #FFFFFF;
      border-radius: 10px;
      //padding-left: 21px;
      box-sizing: border-box;
      img.levis_logo{
        width: 51px;
        height: 51px;
        padding-top: 23px;
        padding-left: 21px;
      }
      p.main_caption{
        width: 146px;
        height: 77px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 140.03%;
        color: #000000;
        margin-top: 19px;
        padding-left: 21px;
      }
      p.status{
        width: 42px;
        height: 16px;
        font-family: Verdana;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 140.03%;
        color: #C0C0C0;
        padding-left: 21px;
      }
      p.validity{
        margin-top: 2px;
        width: 179px;
        height: 16px;
        font-family: Verdana;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 140.03%;
        color: #4077A1;
        padding-left: 21px;
      }
      .points_line{
        display: flex;
        margin-top: 13px;
        padding-left: 15px;
        padding-right: 15px;
        width: 144.82px;
        height: 4.32px;
        .points{
          width: 4.32px;
          height: 4.32px;
          background: #C4C4C4;
          margin-right: 6.48px;
          border-radius: 50%;
        }
        .points:last-child{
          margin-right: 0px;
        }
      }
      .bottom_caption{
        margin-top: 17.49px;
        .marks{
          display: flex;
          padding-left: 21px;
          p:first-child{
            font-family: Verdana;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 138.53%;
            color: #DA474D;
            margin-right: 6px;
            margin-bottom: 5px;
            box-sizing: border-box;
          }
          p:last-child {
            padding-top: 4.14px;
            width: 63.12px;
            height: 14.12px;
            font-family: Verdana;
            font-style: normal;
            font-weight: normal;
            font-size: 14.9492px;
            line-height: 138.53%;
            color: #DA474D;
          }
        }
        p.more_link{
          width: 85px;
          height: 19px;
          left: 21px;
          top: 281px;

          font-family: Verdana;
          font-style: normal;
          font-weight: bold;
          font-size: 10px;
          line-height: 117.03%;
          color: #000000;
          padding-left: 21px;
        }
      }

    }
    .coupon_calvin{
      width: 175px;
      height: 307px;
      background: #FFFFFF;
      border-radius: 10px;
      //padding-left: 21px;
      box-sizing: border-box;
      margin: 10px 0px 0px 0px;

      img.levis_logo{
        width: 51px;
        height: 51px;
        padding-top: 23px;
        padding-left: 21px;
      }
      p.main_caption{
        width: 146px;
        height: 77px;
        font-family: Verdana;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 140.03%;
        color: #000000;
        margin-top: 19px;
        padding-left: 21px;
      }
      p.status{
        width: 42px;
        height: 16px;
        font-family: Verdana;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 140.03%;
        color: #C0C0C0;
        padding-left: 21px;
      }
      p.validity{
        margin-top: 2px;
        width: 179px;
        height: 16px;
        font-family: Verdana;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 140.03%;
        color: #4077A1;
        padding-left: 21px;
      }
      .points_line{
        display: flex;
        margin-top: 13px;
        padding-left: 15px;
        padding-right: 15px;
        width: 144.82px;
        height: 4.32px;
        .points{
          width: 4.32px;
          height: 4.32px;
          background: #C4C4C4;
          margin-right: 6.48px;
          border-radius: 50%;
        }
        .points:last-child{
          margin-right: 0px;
        }
      }
      .bottom_caption{
        margin-top: 17.49px;
        padding-left: 21px;
        .marks{
          display: flex;
          p:first-child{
            font-family: Verdana;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 138.53%;
            color: #DA474D;
            margin-right: 6px;
            margin-bottom: 5px;
            box-sizing: border-box;
          }
          p:last-child {
            padding-top: 4.14px;
            width: 63.12px;
            height: 14.12px;
            font-family: Verdana;
            font-style: normal;
            font-weight: normal;
            font-size: 14.9492px;
            line-height: 138.53%;
            color: #DA474D;
          }
        }
        p.more_link{
          width: 85px;
          height: 19px;
          font-family: Verdana;
          font-style: normal;
          font-weight: bold;
          font-size: 10px;
          line-height: 117.03%;
          color: #000000;
        }
      }
    }
  }
}


</style>