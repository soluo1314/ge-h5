<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-24 09:23:41
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Setting"> </nav-bar>
    <div class="box">
      <div class="item" @click="$router.push('/me/info')">
        <div>Personal information</div>
        <div class="zn-flex zn-ai-center">
          <img :src="userInfo.headimgurl" alt="" />
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="item" @click="$router.push('/me/setpassword')">
        <div>Modify sign in password</div>
        <van-icon name="arrow" />
      </div>
      <div class="item" @click="$router.push('/me/paypassword')">
        <div>Modify payment password</div>
        <van-icon name="arrow" />
      </div>
      <div class="item" @click="$router.push('/me/bank')">
        <div>Bind bank card</div>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="btn zn-flex zn-ai-center zn-jc-center">
      <div @click="logOut()">Sign out</div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'set',
    components: {
      NavBar,
    },
    data() {
      return {}
    },
    computed: {
      userInfo() {
        return this.$store.getters.userInfo
      },
    },
    methods: {
      ...mapActions({ A_LOGIN_OUT: 'user/A_LOGIN_OUT' }),
      async logOut() {
        await this.A_LOGIN_OUT()
        this.$router.push('/login')
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
        padding: 1rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .zn-flex {
          img {
            width: 30px;
            height: 30px;
            margin-right: 0.5rem;
          }
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
