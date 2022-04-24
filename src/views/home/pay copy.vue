<!--
 * @Author: xyw
 * @Date: 2022-04-24 09:26:16
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-24 09:26:17
 * @Description: 
-->
<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: lz
 * @LastEditTime: 2022-04-23 22:30:20
 * @Description: 
-->
<template>
  <div class="app-container pay">
    <div class="bg"></div>
    <div class="box">
      <div class="top">
        <div>
          <div class="t1">₹</div>
          <div class="t2">The amount you need to pay</div>
        </div>
        <div class="t3">Select an option to pay(UPI)</div>
      </div>
      <div class="payway">
        <van-radio-group v-model="payway">
          <van-radio
            class="w-100 zn-text-white item"
            :name="item.type"
            icon-size="24px"
            label-position="left"
            v-for="item in FormData.pay_types"
            :key="item.id"
          >
            <img src="../../assets/images/home/women.png" alt="" />
            {{ item.bank_name }}
          </van-radio>
        </van-radio-group>
      </div>
      <div class="btn" @click="submit"> Pay ₹ </div>
    </div>
  </div>
</template>

<script>
  import { rechargeAct_post } from '@/api/amountApi'
  export default {
    name: 'pay',
    data() {
      return {
        payway: 'card',
        FormData: {
          pay_types: [
            {
              pay_num: 55018,
              bank_name: '국민기업은행',
              account: '80460104294220',
              realname: '유한회사 와이제이에이치와',
              bank_id: 2,
              type: 'card',
            },
            {
              pay_num: 55018,
              bank_name: '국민기업은행',
              account: '80460104294220',
              realname: '유한회사 와이제이에이치와',
              bank_id: 2,
              type: 'card',
            },
          ],
        },
      }
    },
    methods: {
      async submit() {
        await rechargeAct_post()
      },
    },
  }
</script>
<style lang="scss">
  .pay {
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
    background: #f0f0f0;
    .bg {
      width: 100%;
      height: 130px;
      background: #00b8f2;
      position: absolute;
      top: 0;
      left: 0;
    }
    .box {
      margin-top: 1rem;
      margin-left: 3.2%;
      padding-bottom: 1rem;
      width: 93.6%;
      border-radius: 0.6rem;
      background-color: #fff;
      position: relative;
      z-index: 99;
      .top {
        padding-top: 1rem;
        .t1 {
          margin-left: 10%;
          font-size: 0.8rem;
          font-weight: 400;
          font-stretch: normal;
          letter-spacing: 0;
          color: #333;
          margin-bottom: 0.5rem;
        }
        .t2 {
          margin-left: 10%;
          font-size: 0.95rem;
          font-weight: 400;
          font-stretch: normal;
          letter-spacing: 0;
          color: #9b9688;
          margin-bottom: 0.5rem;
        }
        .t3 {
          margin-left: 7%;
          font-family: ArialMT;
          font-size: 1.3rem;
          font-weight: 400;
          font-stretch: normal;
          letter-spacing: 0;
          color: #333;
          font-weight: bold;
        }
      }
      .payway {
        width: 90%;
        margin-left: 5%;
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
        .item {
          border-bottom: 1px solid #eee;
          padding: 1rem 0.5rem;
        }
        img {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          margin-right: 10px;
        }
      }
      .btn {
        border: none;
        padding: 0;
        margin: 1.5rem auto;
        cursor: pointer;
        width: 88%;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        background: #00b8f2;
        border-radius: 0.6rem;
        color: #fff;
      }
    }
  }
</style>
