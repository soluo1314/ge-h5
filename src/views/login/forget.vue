<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-14 14:16:34
 * @Description: 
-->
<template>
  <div class="app-container">
    <div class="box">
      <div class="zn-bold zn-text-ct zn-mb-2">Retrieve password</div>

      <div class="item">
        <img src="../../assets/images/login/phone.png" alt="" />
        <div class="zn-flex-1">
          <van-field
            class="fieldbox"
            v-model="value"
            placeholder="Please enter your phone number"
          />
        </div>
      </div>
      <div class="item">
        <van-icon name="envelop-o" />
        <div class="zn-flex-1">
          <van-field class="fieldbox" v-model="value" placeholder="SMS verification code" />
        </div>
        <div class="send zn-flex zn-ai-center zn-jc-center">Send</div>
      </div>
      <div class="item">
        <img src="../../assets/images/login/password.png" alt="" />
        <div class="zn-flex-1">
          <van-field
            class="fieldbox"
            type="password"
            v-model="value"
            placeholder="Please enter the new password"
          />
        </div>
      </div>
      <div class="item">
        <img src="../../assets/images/login/password.png" alt="" />
        <div class="zn-flex-1">
          <van-field
            class="fieldbox"
            type="password"
            v-model="value"
            placeholder="Confirm new password"
          />
        </div>
      </div>
      <div class="zn-flex zn-ai-center zn-jc-between">
        <div class="zn-text-orange"></div>
        <div @click="$router.push('/login')">Return to sign in</div>
      </div>
    </div>
    <div class="btn zn-flex zn-ai-center zn-jc-center">
      <div>Retrieve password</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'forget',
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  .app-container {
    background: #0a0a0a;
    color: #fff;
    background-image: url('../../assets/images/login/bg.png');
    background-repeat: no-repeat;
    background-size: contain;

    .box {
      padding: 8.5rem 4% 0;
      .item {
        background: #1a1a1a;
        margin-bottom: 0.8rem;
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        padding: 0px 16px;

        img {
          width: 20px;
          height: 20px;
          margin-right: 1rem;
        }
        .fieldbox {
          background: transparent;
          border: none;
          padding: 0.4rem 0.5rem;
          // margin-top: 0.5rem;
          border-radius: 0.3rem;
        }
        .send {
          color: #ee0a24 !important;
          border: 1px solid #ee0a24;
          background: transparent;
          vertical-align: middle;
          width: 60px;
          border-radius: 6px;
          padding: 0.2rem;
          font-size: 0.8rem;
        }
      }
    }
    .btn {
      background-color: #ee0a24;
      border-color: #ee0a24;
      width: 92%;
      height: 2.8rem;
      margin: 1.5rem auto 0;
      padding: 0;
      font-size: 1.1rem;
    }
  }
</style>
