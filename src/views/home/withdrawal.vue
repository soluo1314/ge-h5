<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-22 17:49:34
 * @Description: 
-->
<template>
  <div class="app-container withdrawal">
    <nav-bar back="true" content="Withdraw">
      <template slot="right">
        <span @click="$router.push('/home/withdrawalrecords')">Records</span>
      </template>
    </nav-bar>
    <div class="box">
      <div class="item">
        <div>Balance：</div>
        <div>542.94</div>
      </div>
      <div class="item">
        <div>Bank info：</div>
        <div></div>
      </div>
      <div class="item">
        <div>Bank name : </div>
        <div>{{ FormData.bank_name }}</div>
      </div>
      <div class="item">
        <div>Realname : </div>
        <div>{{ FormData.realname }}</div>
      </div>
      <div class="item">
        <div>Bank Account : </div>
        <div>{{ FormData.account }}</div>
      </div>
      <!-- <div class="item">
        <div>IFSC code : </div>
        <div>22222</div>
      </div> -->
      <div class="item">Amount：</div>
      <div class="item">
        <van-field
          class="fieldbox"
          v-model="amount"
          placeholder="Please enter the payment amount"
        />
      </div>
      <div class="item">Password：</div>
      <div class="item">
        <van-field
          class="fieldbox"
          type="password"
          v-model="password"
          placeholder="Please enter the payment password"
        />
      </div>
    </div>
    <div class="zn-flex zn-ai-center zn-jc-center">
      <div class="btn zn-flex zn-ai-center zn-jc-center" @click="submit">Submit</div>
    </div>
  </div>
</template>

<script>
  import { withdraw, withdrawAct } from '@/api/amountApi'
  import NavBar from '@/components/NavBar'
  import { Toast } from 'vant'
  export default {
    name: 'HomeWithdrawal',
    components: {
      NavBar,
    },
    data() {
      return {
        amount: '',
        password: '',
        FormData: {},
        balance: 0,
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      async init() {
        const res = await withdraw()
        this.FormData = res.data.banklog
        this.balance = this.FormData.wallet.balance
      },
      async submit() {
        const res = await withdrawAct({
          money: this.amount,
          password2: this.password,
        })
        Toast.success(res.info)
      },
    },
  }
</script>
<style lang="scss">
  .van-field__control {
    color: #fff !important;
  }
</style>
<style lang="scss" scoped>
  .app-container {
    background: #0a0a0a;
    color: #fff;
    padding-top: 46px;
    .box {
      padding: 0 1rem;
      .item {
        padding: 0.3rem 0;
        display: flex;
        align-items: center;
        line-height: 21px;
        div:nth-child(1) {
          margin-right: 1rem;
        }
        .fieldbox {
          background: transparent;
          border: 1px solid #7c7c7c;
          padding: 0.4rem 0.5rem;
          // margin-top: 0.5rem;
          border-radius: 0.3rem;
          .van-field__value {
            input.van-field__control {
              color: #fff !important;
            }
          }
        }
      }
    }
    .btn {
      background: #d2a05f;
      width: 12rem;
      margin: 1rem auto 0;
      padding: 0;
      height: 2.4rem;
    }
  }
</style>
