<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-21 17:07:03
 * @Description: 
-->
<template>
  <div class="app-container">
    <div class="choujiang_wrap">
      <div class="banner">
        <img src="../../assets/images/prize/banner.png" alt="" />
        <div class="text">
          <div>Welcome to the </div>
          <div>GE raffle center</div>
        </div>
      </div>
      <div class="notice">
        <van-notice-bar color="rgb(237,106,12)" :text="notice">
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
        <template v-if="flag">
          <div class="item" v-for="item in [1, 2, 3, 4, 5, 6]" :key="item" @click="open(item)">
            <div class="text">Blessing</div>
          </div>
        </template>
        <template v-else>
          <div class="item open" v-for="item in all" :key="item">
            <div class="m">{{ item }}</div>
            <div class="reset" @click="flag = true">reset</div>
            <div class="text">Blessing</div>
          </div>
        </template>
      </div>
      <div v-show="!flag" class="again" @click="flag = true">Lottery again</div>
      <p class="tipstxt">Buy products and get lucky draw</p>
    </div>
  </div>
</template>

<script>
  import { lottery, lotteryAct } from '@/api/prizeApi'
  import { Dialog } from 'vant'
  export default {
    name: 'Prize',
    data() {
      return {
        lottery: 0,
        notice: '',
        flag: true,
        money: 0,
        all: [],
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        const res = await lottery()
        this.lottery = res.data.lottery
        this.notice = res.data.notice.reduce((pre, curr) => pre + '   ' + curr.title, '')
      },
      async open(idx) {
        const res = await lotteryAct({
          idx: idx,
        })
        this.all = Object.values(res.data.all)
        this.all = this.all.map((n) => {
          if (typeof n == 'number') {
            n = '₹' + n
          }
          return n
        })
        this.money = res.data.money
        this.lottery = res.data.lottery
        this.flag = false
        if (this.lottery > 0) {
          Dialog.alert({
            title: 'Blessing',
            message: `${res.info}\nmoney:${this.money}`,
            confirmButtonText: 'Close',
            className: 'zn-text-orange',
          }).then(() => {
            // on close
          })
        } else {
          Dialog.alert({
            title: 'Notice',
            message: `${res.info}`,
            confirmButtonText: 'Got it',
            className: 'zn-text-orange',
          }).then(() => {
            // on close
          })
        }
      },
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
        .text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #d41c1c;
          font-size: 1.12rem;
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
          color: #fff;
          text-align: center;
          font-size: 0.7rem;

          &:nth-child(3n) {
            margin-right: 0;
          }
          .text {
            margin-top: 5.5rem;
          }
          &.open {
            background: url('../../assets/images/prize/hb.png') no-repeat center top/100% auto !important;
            .m {
              margin-top: 2rem;
              font-size: 0.95rem;
              color: #c64c5e;
            }
            .reset {
              margin-top: 1.5rem;
              color: rgb(254, 254, 189);
              font-size: 0.7rem;
            }
            .text {
              margin-top: 0.8rem;
            }
          }
        }
      }
      .again {
        width: 120px;
        height: 32px;
        line-height: 32px;
        background: transparent;
        border: 1px solid rgb(254, 234, 90);
        color: rgb(254, 234, 90);
        text-align: center;
        margin: 0.5rem auto;
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
