<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-14 14:16:34
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Retrieve password"> </nav-bar>
    <div class="box">
      <div class="item hasp">
        <van-icon name="user-o" />
        <div>gz2002</div>
      </div>
      <div class="item hasp">
        <van-icon name="phone-o" />
        <div class="zn-flex zn-ai-center zn-jc-between zn-flex-1">
          <div>885**420</div>
          <div>Receives messages</div>
        </div>
      </div>
      <div class="item">
        <van-icon name="envelop-o" />
        <div class="zn-flex-1">
          <van-field class="fieldbox" v-model="value" placeholder="SMS verification code" />
        </div>
      </div>
      <div class="item">
        <van-icon name="closed-eye" />
        <div class="zn-flex-1">
          <van-field class="fieldbox" v-model="value" placeholder="New password" />
        </div>
        <div class="send zn-flex zn-ai-center zn-jc-center">Send</div>
      </div>
      <div class="item">
        <van-icon name="passed" />
        <div class="zn-flex-1">
          <van-field class="fieldbox" v-model="value" placeholder="Confirm password" />
        </div>
      </div>
    </div>
    <div class="btn zn-flex zn-ai-center zn-jc-center">
      <div>Submit</div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  export default {
    name: 'setpassword',
    components: {
      NavBar,
    },
    data() {
      return {}
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
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        &.hasp {
          padding: 0.8rem 0;
        }
        .van-icon {
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
