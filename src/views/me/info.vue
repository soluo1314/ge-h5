<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: lz
 * @LastEditTime: 2022-04-22 14:00:52
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Personal information"> </nav-bar>
    <div class="box">
      <div class="item">
        <div class="label">Account</div>
        <div class="zn-flex-1"> {{ info.account }} </div>
      </div>
      <div class="item">
        <div class="label">Nickname</div>
        <div class="zn-flex-1">
          <van-field class="fieldbox" v-model="nickname" placeholder="Please enter ther nickname" />
        </div>
      </div>
      <div class="item">
        <div class="label">Current Avatar</div>
        <div>
          <img
            style="width: 5rem; height: 2.2rem; margin-right: -4.266667vw"
            :src="info.headimgurl"
            alt="url error"
          />
          <!-- <van-uploader v-model="fileList" multiple disabled /> -->
        </div>
      </div>
      <!-- <div class="item">
        <div class="label">Modify Avatar</div>
        <div><van-uploader v-model="fileList" multiple /></div>
      </div> -->
      <div class="item">
        <div class="label">Password</div>
        <div class="zn-flex-1">
          <van-field
            class="fieldbox"
            type="password"
            v-model="password"
            placeholder="Enter the payment password"
          />
        </div>
      </div>
    </div>
    <div class="btn zn-flex zn-ai-center zn-jc-center" @click="submit()">
      <div>Submit</div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import NavBar from '@/components/NavBar'
  import { updateNickName } from '@/api/userApi'
  export default {
    name: 'info',
    components: {
      NavBar,
    },
    data() {
      return {
        info: {
          account: '',
          balance: '',
          email: '',
          headimgurl: '',
          nickname: '',
          phone: '',
          realname: '',
        },
        nickname: '',
        password: '',
      }
    },
    mounted() {
      this.info = Object.assign({}, this.userInfo)
    },
    computed: {
      ...mapGetters({ userInfo: 'userInfo' }),
    },
    methods: {
      ...mapActions({ A_GET_USER_INFO: 'user/A_GET_USER_INFO' }),
      async submit() {
        console.log(this.nickname)
        if (this.nickname) {
          await updateNickName({ nickname: this.nickname })
          await this.A_GET_USER_INFO()
        }
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
        .label {
          margin-right: 1rem;
          text-align: right;
          width: 4.5rem;
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
