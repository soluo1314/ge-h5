<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-24 08:55:35
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Retrieve password"> </nav-bar>
    <div class="box">
      <div class="item hasp">
        <van-icon name="user-o" />
        <div>{{ userInfo.account }}</div>
      </div>
      <div class="item hasp">
        <van-icon name="phone-o" />
        <div class="zn-flex zn-ai-center zn-jc-between zn-flex-1">
          <div>{{ userInfo.phone.slice(0, 2) + '***' + userInfo.phone.slice(5) }}</div>
          <div style="color: #969799">Receives messages</div>
        </div>
      </div>
      <div class="item">
        <van-icon name="envelop-o" />
        <div class="zn-flex-1">
          <van-field class="fieldbox" v-model="code" placeholder="SMS verification code" />
        </div>
        <!-- <div class="send zn-flex zn-ai-center zn-jc-center">Send</div> -->
        <img style="width: 5rem; height: 2rem" :src="yzmCode" alt="" @click="getCode" />
      </div>
      <div class="item">
        <van-icon name="closed-eye" />
        <div class="zn-flex-1">
          <van-field
            class="fieldbox"
            type="password"
            v-model="password"
            placeholder="New password"
          />
        </div>
      </div>
      <div class="item">
        <van-icon name="passed" />
        <div class="zn-flex-1">
          <van-field
            class="fieldbox"
            type="password"
            v-model="password2"
            placeholder="Confirm password"
          />
        </div>
      </div>
    </div>
    <div class="btn zn-flex zn-ai-center zn-jc-center">
      <div @click="submit">Submit</div>
    </div>
  </div>
</template>

<script>
  import { getVcode } from '@/api/userApi'
  import { password_update } from '@/api/meApi'
  import { Toast } from 'vant'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'setpassword',
    components: {
      NavBar,
    },
    computed: {
      userInfo() {
        return this.$store.getters.userInfo
      },
    },
    data() {
      return {
        code: '',
        password: '',
        password2: '',
        yzmCode: require('../../assets/images/login/yzm.jpg'),
      }
    },
    created() {
      this.getCode()
    },
    methods: {
      async submit() {
        if (this.password != this.password2) {
          Toast.fail('The password entered twice is inconsistent')
          return
        }
        const res = await password_update({
          password: this.password,
          type: 1,
        })
        Toast.success(res.info)
      },
      async getCode() {
        const res = await getVcode()
        this.captcha_id = res.data.captcha_id
        this.yzmCode = res.data.image
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
