<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-15 18:41:15
 * @Description: 
-->
<template>
  <div class="app-container">
    <div class="index_wrap">
      <div class="index_top">
        <div class="headbox zn-jc-between">
          <div class="zn-flex zn-ai-center">
            <van-image class="logo" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            <div style="padding-left: 0.5rem">gz2002</div>
          </div>
          <img
            class="logo"
            src="../../assets/images/home/erji.png"
            @click="$router.push('/home/qrcode')"
          />
        </div>
        <van-swipe
          :autoplay="3000"
          style="height: 12rem; border-radius: 0.5rem"
          indicator-color="#fff"
        >
          <van-swipe-item v-for="item in [1, 2, 3]" :key="item">
            <img src="../../assets/images/home/swiper.png" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="index_cer">
        <div class="zn-flex">
          <div class="zn-flex-1 zn-text-ct" @click="$router.push('/home/recharge')">
            <img src="../../assets/images/home/icon1.png" alt="" />
            <div class="text">Recharge</div>
          </div>
          <div class="zn-flex-1 zn-text-ct" @click="$router.push('/home/withdrawal')">
            <img src="../../assets/images/home/icon2.png" alt="" />
            <div class="text">Withdrawal</div>
          </div>
          <div class="zn-flex-1 zn-text-ct" @click="$router.push('/home/teams')">
            <img src="../../assets/images/home/icon3.png" alt="" />
            <div class="text">Number of teams</div>
          </div>
          <div class="zn-flex-1 zn-text-ct" @click="$router.push('/home/link')">
            <img src="../../assets/images/home/icon4.png" alt="" />
            <div class="text">Invitation link</div>
          </div>
        </div>
        <van-notice-bar
          style="margin-bottom: 1rem"
          color="#fff"
          text="Congratulations: user got 1687RS at 91*****357"
        >
          <template #left-icon>
            <img
              style="width: 1rem; height: 1rem; margin-right: 0.5rem"
              src="../../assets/images/home/alert.png"
            />
          </template>
        </van-notice-bar>
        <div>
          <video
            autoplay
            controls
            class="w-100"
            src="https://ge.tianbo8.top/public/video/video.mp4"
          ></video>
        </div>
        <div class="newsbox">
          <div class="titbox"><p>News information</p><i class="line"></i></div>
          <div class="listbox">
            <div
              class="item"
              v-for="item in [4, 5, 6, 7]"
              :key="item"
              @click="$router.push('/home/newsdetail')"
            >
              <p>good news good news</p>
              <img src="../../assets/images/home/women.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  .index_wrap {
    position: absolute;
    top: 0;
    bottom: 3rem;
    overflow-y: scroll;
    left: 0;
    width: 100%;
    background: #0a0a0a;
    color: #fff;
    .index_top {
      background: url('../../assets/images/home/index_bg.png') no-repeat left top/100% auto;
      padding: 0 3%;
      .headbox {
        display: flex;
        color: #fff;
        align-items: center;
        padding: 0.5rem 0;
        .logo {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          overflow: hidden;
        }
      }
    }
    .index_cer {
      padding: 0 3%;
      img {
        width: 3rem;
        height: 3rem;
      }
      .zn-flex {
        padding: 1.5rem 0;
        font-size: 0.7rem;
        .text {
          padding-top: 0.6rem;
        }
      }
      .van-notice-bar {
        background-color: transparent;
      }
      .newsbox {
        margin-top: 1.4rem;
        position: relative;
        .titbox {
          color: #fff;
          text-align: center;
          position: relative;
          p {
            display: inline-block;
            position: relative;
            background: #0a0a0a;
            z-index: 2;
            padding: 0 0.5rem;
          }
          .line {
            height: 1px;
            background: #5c5c5c;
            display: block;
            position: absolute;
            width: 48%;
            margin: 0 auto;
            left: 0;
            right: 0;
            top: 0.6rem;
          }
        }
        .listbox {
          display: flex;
          flex-wrap: wrap;
          padding: 0.5rem 0 1rem;
          .item {
            width: 49%;
            display: block;
            margin: 0 2% 0.3rem 0;
            &:nth-child(2n) {
              margin-right: 0;
            }
            p {
              color: #fff;
              text-align: center;
              font-size: 0.8rem;
              padding: 0.8rem 0 0.5rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            img {
              width: 100%;
              height: 7rem;
            }
          }
        }
      }
    }
  }
</style>
