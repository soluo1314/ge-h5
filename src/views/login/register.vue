<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: lz
 * @LastEditTime: 2022-04-24 17:13:38
 * @Description: 
-->
<template>
  <div class="app-container">
    <van-form @submit="onSubmit">
      <div class="box">
        <div class="zn-bold zn-text-ct zn-mb-2">Sign up</div>

        <div class="item">
          <img src="../../assets/images/login/phone.png" alt="" />
          <div class="zn-flex-1">
            <van-field
              class="fieldbox"
              v-model="account"
              placeholder="Please enter your phone number to log in"
              :rules="[{ required: true }]"
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
              :rules="[{ required: true }]"
            />
          </div>
        </div>
        <div class="item">
          <!-- <van-icon name="envelop-o" /> -->
          <img src="../../assets/images/login/code.png" alt="" />
          <div class="zn-flex-1">
            <van-field
              class="fieldbox"
              v-model="imgcode"
              placeholder="Graphic verification code"
              :rules="[{ required: true }]"
            />
          </div>
          <img
            style="width: 5rem; height: 2.2rem; margin-right: -4.266667vw"
            :src="yzmImg"
            alt=""
            @click="getCode"
          />
          <!-- <div class="send zn-flex zn-ai-center zn-jc-center" @click="getCode">Send</div> -->
        </div>
        <div class="item">
          <img src="../../assets/images/login/people.png" alt="" />
          <div class="zn-flex-1">
            <van-field
              class="fieldbox"
              v-model="icode"
              placeholder="Please enter the invitation code"
              :rules="[{ required: true }]"
            />
          </div>
        </div>
        <div class="zn-flex zn-ai-center zn-jc-end">
          <div>Have an account？</div>
          <div @click="$router.push('/login')" class="zn-text-orange">Sign in now</div>
        </div>
      </div>

      <div class="btn zn-flex zn-ai-center zn-jc-center">
        <van-button round block type="info" native-type="submit">Sign up</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import { register, getRegVcode } from '@/api/userApi'
  import { Toast } from 'vant'
  export default {
    name: 'register',
    data() {
      return {
        account: '',
        password: '',
        captcha_id: '',
        imgcode: '',
        icode: '',
        yzmImg: require('../../assets/images/login/yzm.jpg'),
      }
    },
    created() {
      this.getCode()
      if (this.$route.query.icode) {
        this.icode = this.$route.query.icode
      }
    },
    methods: {
      regSubmit(param) {
        return new Promise((resolve, reject) => {
          register(param)
            .then(async (res) => {
              resolve()
              await Toast.success(res.info)
              setTimeout(() => {
                this.$router.push('/login')
              }, 2000)
            })
            .catch((err) => {
              reject(err)
            })
        })
      },
      async onSubmit() {
        await this.regSubmit({
          account: this.account,
          password: this.password,
          captcha_id: this.captcha_id,
          imgcode: this.imgcode,
          icode: this.icode,
        })
      },
      async getCode() {
        const res = await getRegVcode()
        this.captcha_id = res.data.captcha_id_reg
        this.yzmImg = res.data.image
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
        .van-icon {
          margin-right: 1.1rem !important;
        }
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
