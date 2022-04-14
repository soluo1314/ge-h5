<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-14 17:21:33
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Recharge">
      <template slot="right">
        <span @click="$router.push('/home/rechargerecords')">Records</span>
      </template>
    </nav-bar>
    <div class="recharge_wrap">
      <div class="balance">Balance：0.00</div>
      <div class="amount_txt">Amount：</div>
      <div class="payItemBox">
        <div class="item">550</div>
        <div class="item">10000</div>
        <div class="item">20000</div>
        <div class="item">50000</div>
        <div class="item">70000</div>
        <div class="item">90000</div>
        <div class="item">99999</div>
      </div>
      <div>
        <van-field class="fieldbox" v-model="value" placeholder="Please enter amount" />
      </div>
      <div class="payway">
        <van-radio-group v-model="payway">
          <van-radio class="w-100 zn-text-white" name="1" icon-size="24px" label-position="left"
            >ssk_105</van-radio
          >
          <van-radio class="w-100 zn-text-white" name="2" icon-size="24px" label-position="left"
            >NinePay</van-radio
          >
        </van-radio-group>
      </div>
      <div class="zn-flex zn-jc-center zn-ai-center">
        <div class="btn zn-flex zn-jc-center zn-ai-center">Submit</div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  export default {
    name: 'HomeRecharge',
    components: {
      NavBar,
    },
    data() {
      return {
        value: '',
        payway: '1',
      }
    },
  }
</script>
<style lang="scss">
  .van-radio__label {
    color: #fff !important;
  }
  .van-radio__icon--checked {
    .van-icon {
      background-color: #d2a05f;
      border-color: #d2a05f;
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
