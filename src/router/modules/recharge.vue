<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-22 16:45:16
 * @Description: 
-->
<template>
  <div class="app-container recharge">
    <nav-bar back="true" content="Recharge">
      <template slot="right">
        <span @click="$router.push('/home/rechargerecords')">Records</span>
      </template>
    </nav-bar>
    <div class="recharge_wrap">
      <div class="balance">Balance：{{ FormData.wallet.balance }}</div>
      <div class="amount_txt">Amount：</div>
      <div class="payItemBox">
        <div
          class="item"
          :class="{ active: amount == item }"
          v-for="item in FormData.pay_items"
          :key="item"
          @click="amount = item"
          >{{ item }}</div
        >
      </div>
      <div>
        <van-field class="fieldbox" v-model="amount" placeholder="Please enter amount" />
      </div>
      <div class="payway">
        <van-radio-group v-model="payway">
          <van-radio
            class="w-100 zn-text-white"
            :name="item.type"
            icon-size="24px"
            label-position="left"
            v-for="item in FormData.pay_types"
            :key="item.id"
            >{{ item.name }}</van-radio
          >
        </van-radio-group>
      </div>
      <div class="zn-flex zn-jc-center zn-ai-center">
        <div class="btn zn-flex zn-jc-center zn-ai-center" @click="Submit">Submit</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { recharge } from '@/api/amountApi'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'HomeRecharge',
    components: {
      NavBar,
    },
    data() {
      return {
        amount: '',
        payway: '',
        FormData: {
          wallet: {},
          pay_items: [],
          pay_types: [],
        },
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        const res = await recharge()
        this.FormData = res.data
      },
      async Submit() {
        this.$router.push('/pay')
      },
    },
  }
</script>
<style lang="scss">
  .recharge {
    .van-radio__label {
      color: #fff !important;
    }
    .van-radio__icon--checked {
      .van-icon {
        background-color: #d2a05f;
        border-color: #d2a05f;
      }
    }
  }
</style>
<style lang="scss" scoped>
  .app-container {
    background: #0a0a0a;
    color: #fff;
    padding-top: 46px;
    .recharge_wrap {
      padding: 0 4%;
      font-size: 1.2rem;
      .balance {
        padding: 0.8rem 0 0.2rem;
      }
      .amount_txt {
        padding-bottom: 0.4rem;
      }
      .payItemBox {
        text-align: left;
        padding-left: 1rem;
        .item {
          text-align: center;
          border: 1px solid #f2f2f2;
          width: 5rem;
          margin: 0.3rem;
          display: inline-block;
          line-height: 2rem;
          padding: 0 0.5rem;
          border-radius: 2px;
          &.active {
            border: 1px solid #d2a05f;
            color: #d2a05f;
          }
        }
      }
      .fieldbox {
        background: transparent;
        border: 1px solid #7c7c7c;
        padding: 0.4rem 0.5rem;
        margin-top: 0.5rem;
        border-radius: 0.3rem;
      }
      .payway {
        .van-cell {
          padding: 1rem 0;
          font-size: 1.2rem;
          line-height: 2rem;
          background: transparent;
          color: #fff;
        }
        .van-radio {
          justify-content: space-between;
          padding: 1rem 0;
          font-size: 1.2rem;
          line-height: 2rem;
          color: #fff !important;
        }
      }
      .btn {
        background-color: rgb(238, 10, 36);
        border-color: rgb(238, 10, 36);
        height: 2.8rem;
        width: 12rem;
        margin: 1rem auto 0;
        padding: 0;
        font-size: 0.9rem;
      }
    }
  }
</style>
