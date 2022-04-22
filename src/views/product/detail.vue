<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-22 10:30:34
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Project"></nav-bar>
    <div class="product_wrap">
      <div class="pBox">
        <div class="pItem">
          <img :src="formData.covers" alt="" />
          <div class="pro_name zn-flex zn-ai-center">
            <img class="touxiang" :src="formData.icon" alt="" />
            <div>{{ formData.name }}</div>
          </div>
          <div class="zn-flex desc">
            <div class="zn-flex-1 zn-flex zn-jc-center zn-ai-center zn-flex-wrap">
              <div class="w-100 zn-text-ct">Price (₹)</div>
              <div class="zn-text-orange">{{ formData.price }}</div>
            </div>
            <div class="zn-flex-1 zn-flex zn-jc-center zn-ai-center zn-flex-wrap">
              <div class="w-100 zn-text-ct">Day yield (%)</div>
              <div class="zn-text-orange">{{ formData.rate }}</div>
            </div>
            <div class="zn-flex-1 zn-flex zn-jc-center zn-ai-center zn-flex-wrap">
              <div class="w-100 zn-text-ct">Term (days)</div>
              <div class="zn-text-orange">{{ formData.days }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cerbox">
        <div class="titlebox zn-flex zn-jc-center">
          <div class="title zn-flex zn-jc-center zn-ai-center zn-text-orange"
            >Project description</div
          >
        </div>
        <div class="pro_detail">
          <div class="tablecon" v-html="formData.content"> </div>
        </div>
      </div>
    </div>

    <div class="foot">
      <div class="btn zn-flex zn-jc-center zn-ai-center zn-text-ct" @click="show = true"
        >Buy now</div
      >
    </div>
    <!-- 底部弹出层 -->
    <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
      <van-icon name="cross" class="close" @click="show = false" />
      <div class="invest_wrap">
        <div class="amount">
          <div class="tab1 zn-flex zn-ai-center">
            <div class="zn-flex-1">
              <div>Balance Wallet (₹)</div>
              <div>{{ wallet2.balance }}</div>
            </div>
            <div class="zn-flex-1">
              <div>Recharge Wallet (₹)</div>
              <div>{{ wallet1.balance }}</div>
            </div>
          </div>
        </div>
        <div class="item zn-flex zn-ai-center zn-jc-between">
          <div>Price</div>
          <div class="zn-text-orange">₹{{ formData.price }}</div>
        </div>
        <div class="item zn-flex zn-ai-center zn-jc-between">
          <div>Restricted quantity</div>
          <div>{{ formData.invest_limit }}</div>
        </div>
        <div class="item zn-flex zn-ai-center zn-jc-between">
          <div>Interest time</div>
          <div>Settlement at 24:00 every day</div>
        </div>
        <div class="item zn-flex zn-ai-center zn-jc-between">
          <div>Purchase quantity</div>
          <div><van-stepper v-model="num" :max="formData.invest_limit" /></div>
        </div>
        <div class="btn zn-flex zn-jc-center zn-ai-center zn-text-ct" @click="submit"
          >Confirm buy</div
        >
      </div>
    </van-popup>
  </div>
</template>

<script>
  import { goods, invest } from '@/api/productApi'
  import NavBar from '@/components/NavBar'
  import { Toast } from 'vant'
  export default {
    name: 'ProductDetail',
    components: {
      NavBar,
    },
    data() {
      return {
        formData: {},
        wallet1: {},
        wallet2: {},
        show: false,
        num: 0,
      }
    },
    mounted() {
      this.getDetail()
    },
    methods: {
      async getDetail() {
        const res = await goods({ cid: this.$route.query.id })
        this.formData = res.data.info
        this.wallet1 = res.data.wallet1
        this.wallet2 = res.data.wallet2
        this.formData.covers =
          process.env.VUE_APP_PIC_URL + this.formData.covers[0].replace('/public', '')
        this.formData.icon = process.env.VUE_APP_PIC_URL + this.formData.icon.replace('/public', '')
      },
      async submit() {
        const res = await invest({
          cid: this.formData.cid,
          quantity: this.num,
        })
        Toast.success(res.info)
        this.show = false
      },
    },
  }
</script>

<style lang="scss" scoped>
  .van-popup {
    background: rgb(51 51 51);
    border-radius: 1.5rem 1.5rem 0 0;
    .close {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
    .invest_wrap {
      padding: 3rem 4% 0.8rem;
      .tab1 {
        margin: 0 auto;
        padding: 0.3rem 0;
        background: #d2a05f;
        border-radius: 0.5rem;
        .zn-flex-1 {
          padding: 0.5rem;
          text-align: center;
          position: relative;
          // &:nth-child(1):after {
          //   content: '';
          //   width: 2px;
          //   height: 31px;
          //   background-color: #2a2a2a;
          //   position: absolute;
          //   top: 50%;
          //   right: -1px;
          //   transform: translate(0, -50%);
          // }
          div {
            margin-top: 0.3rem;
            font-size: 0.8rem;
            &:nth-child(2) {
              font-size: 1.1rem;
            }
          }
        }
      }
      .item {
        background: transparent;
        padding: 0.8rem 0;
        border-bottom: 1px solid #544c4c;
        font-size: 14px;
      }
      .btn {
        background: rgb(238, 10, 36);
        height: 3rem;
        font-size: 0.95rem;
        margin: 1.5rem auto;
      }
    }
  }
  .app-container {
    background: #0a0a0a;
    color: #fff;
    .product_wrap {
      padding: 0 3%;
      position: absolute;
      width: 94%;
      top: 3rem;
      bottom: 3rem;
      overflow-y: scroll;
      left: 0;
      .pBox {
        .pItem {
          border-bottom: 1px solid #2c2c2c;
          padding-bottom: 0.5rem;
          img {
            width: 100%;
            height: 20rem;
          }
          .pro_name {
            font-size: 0.95rem;
            padding: 0.6rem 0;
            border-bottom: 1px solid #2c2c2c;
            .touxiang {
              width: 1.2rem;
              height: 1.2rem;
              border-radius: 3px;
              margin-right: 0.2rem;
            }
          }
          .desc {
            height: 3rem;
            font-size: 0.8rem;
            background: #2d2d2d;
          }
        }
      }
      .cerbox {
        background: #1a1a1a;
        margin-top: 0.6rem;
        .titlebox {
          .title {
            width: 50%;
            height: 44px;
            border-bottom: 1px solid #d2a05f;
          }
        }
        .pro_detail {
          padding: 1.2rem 0;
          .tablecon {
            width: 94%;
            margin: 0 auto;
            padding-bottom: 1rem;
          }
        }
      }
    }

    .foot {
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 4rem;
      padding-top: 0.3rem;
      left: 0;
      right: 0;
      background: #2d2d2d;
      .btn {
        background: rgb(238, 10, 36);
        width: 94%;
        height: 3rem;
        font-size: 0.95rem;
        margin: 0 auto;
      }
    }
  }
</style>
