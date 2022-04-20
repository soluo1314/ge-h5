<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: lz
 * @LastEditTime: 2022-04-19 22:23:58
 * @Description: 
-->
<template>
  <div class="app-container">
    <van-form @submit="onSubmit">
      <div class="box">
        <div class="zn-bold zn-text-ct zn-mb-2">Sign in</div>
        <div class="item">
          <img src="../../assets/images/login/phone.png" alt="" />
          <div class="zn-flex-1">
            <van-field
              class="fieldbox"
              v-model="account"
              placeholder="Please enter your phone number to log in"
              :rules="[{ required: true, message: 'Please enter your phone number to log in' }]"
            />
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/login/password.png" alt="" />
          <div class="zn-flex-1">
            <van-field
              class="fieldbox"
              type="password"
              v-model="password"
              placeholder="Please enter the login password"
              :rules="[{ required: true, message: 'Please enter the login password' }]"
            />
          </div>
        </div>
        <div class="item">
          <img src="../../assets/images/login/code.png" alt="" />
          <div class="zn-flex-1">
            <van-field class="fieldbox" v-model="vcode" placeholder="Graphic verification code" />
          </div>
          <img
            style="width: 5rem; height: 2.2rem; margin-right: -4.266667vw"
            src="../../assets/images/login/yzm.jpg"
            alt=""
          />
        </div>
        <div class="zn-flex zn-ai-center zn-jc-between">
          <div @click="$router.push('/register')" class="zn-text-orange">Register now</div>
          <div @click="$router.push('/forget')">Forget password？</div>
        </div>
      </div>
      <div class="btn zn-flex zn-ai-center zn-jc-center">
        <van-button round block type="info" native-type="submit">Sign in</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'login',
    data() {
      return {
        account: '111111111',
        password: 'gsdfgsfd12df',
        captcha_id: '',
        vcode: '',
      }
    },
    methods: {
      ...mapActions({ A_LOGIN: 'user/A_LOGIN' }),
      async onSubmit(values) {
        console.log('submit', values)
        await this.A_LOGIN({
          account: this.account,
          password: this.password,
          // captcha_id: 'dbc84a6506f5ddc5',
          // vcode: '3273',
        })
        await this.$router.push('/')
      },
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
      }
    }
    .btn {
      > .van-button {
        background-color: #ee0a24;
        border-color: #ee0a24;
        width: 92%;
        height: 2.8rem;
        margin: 1.5rem auto 0;
        padding: 0;
        font-size: 1.1rem;
      }
    }
  }
</style>
