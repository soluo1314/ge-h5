<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-13 11:26:07
 * @Description: 
-->
<template>
  <div class="app-container">
    <div class="choujiang_wrap">
      <div class="banner">
        <img src="../../assets/images/prize/banner.png" alt="" />
      </div>
      <div class="notice">
        <van-notice-bar
          color="rgb(237,106,12)"
          text="Congratulations: user got 1687RS at 91*****357"
        >
          <template #left-icon>
            <img
              style="width: 1rem; height: 1rem; margin-right: 0.5rem"
              src="../../assets/images/home/alert.png"
            />
          </template>
        </van-notice-bar>
        <van-icon name="arrow" />
      </div>
      <div class="hblist zn-flex zn-flex-wrap">
        <div class="item" v-for="item in [4, 5, 6, 7, 8, 9]" :key="item">
          <div class="text">Blessing</div>
        </div>
      </div>
      <p class="tipstxt">Buy products and get lucky draw</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Prize',
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  .app-container {
    background: #0a0a0a;
    .choujiang_wrap {
      padding: 1rem 0;
      .banner {
        position: relative;
        width: 92%;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
      .van-notice-bar {
        background-color: transparent;
        padding: 0 1rem 0 0.5rem;
      }
      .notice {
        margin: 0.5rem 1rem;
        position: relative;
        .van-icon-arrow {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(0, -50%);
          color: rgb(237, 106, 12);
        }
      }
      .hblist {
        padding: 0 4%;
        margin-top: 1rem;
        .item {
          background: url('../../assets/images/prize/hongbao.png') no-repeat center top/100% auto;
          width: 28%;
          height: 8.5rem;
          margin-right: 8%;
          position: relative;
          margin-bottom: 0.6rem;
          &:nth-child(3n) {
            margin-right: 0;
          }
          .text {
            margin-top: 5.5rem;
            color: #fff;
            text-align: center;
          }
        }
      }
      .tipstxt {
        text-align: center;
        font-size: 0.8rem;
        padding: 0.5rem 0 1rem;
        color: #fff;
      }
    }
  }
</style>
