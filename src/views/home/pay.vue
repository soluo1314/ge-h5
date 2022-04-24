<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-24 10:24:55
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Pay order"> </nav-bar>
    <div class="box">
      <div class="item">
        <div class="label">Realname :</div>
        <div>{{ FormData.realname }}</div>
      </div>
      <div class="item">
        <div class="label">Bank :</div>
        <div>{{ FormData.bank_name }} </div>
      </div>
      <div class="item">
        <div class="label">Account :</div>
        <div>{{ FormData.account }}</div>
      </div>
      <div class="item">
        <div class="label">money :</div>
        <div>{{ FormData.pay_num }}</div>
      </div>
    </div>
    <div class="btn zn-flex zn-ai-center zn-jc-center">
      <div @click="submit">Submit</div>
    </div>
  </div>
</template>

<script>
  import { rechargeAct_post } from '@/api/amountApi'
  import { Toast } from 'vant'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'bank',
    components: {
      NavBar,
    },
    data() {
      return {
        FormData: {},
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.FormData = JSON.parse(this.$route.query.info)
      },
      async submit() {
        const res = await rechargeAct_post({
          pay_type: this.FormData.type,
          money: this.FormData.pay_num,
          bank_id: this.FormData.bank_id,
        })
        Toast.success(res.info)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .app-container {
    background: #0a0a0a;
    color: #fff;
    padding-top: 46px;
    .box {
      padding: 0 1rem;
      .item {
        padding: 0.8rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        font-size: 14px;
        .label {
          margin-right: 1rem;
          text-align: right;
          width: 6.5rem;
        }
        .fieldbox {
          background: transparent;
          border: none;
          padding: 0.4rem 0.5rem;
          // margin-top: 0.5rem;
          border-radius: 0.3rem;
        }
      }
    }
    .btn {
      background-color: rgb(210, 160, 95);
      border-color: rgb(210, 160, 95);
      height: 2.4rem;
      width: 80%;
      margin: 1rem auto 0;
      padding: 0;
      font-size: 1.1rem;
      border-radius: 1.2rem;
    }
  }
</style>
