<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-21 20:10:08
 * @Description: 
-->
<template>
  <div class="app-container redpack">
    <nav-bar back="true" content="Redpack"> </nav-bar>
    <div class="wrap">
      <div class="code">
        <van-field v-model="code" label="Code" placeholder="Please enter the redpack code" />
      </div>
      <div class="btn zn-flex zn-ai-center zn-jc-center">
        <div @click="submit">Receive</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { redpackAct } from '@/api/prizeApi'
  import NavBar from '@/components/NavBar'
  import { Toast } from 'vant'
  export default {
    name: 'redpack',
    components: {
      NavBar,
    },
    data() {
      return {
        code: '',
      }
    },
    methods: {
      async submit() {
        const res = await redpackAct({
          code: this.code,
        })
        Toast.success(res.info)
      },
    },
  }
</script>

<style lang="scss">
  .redpack {
    .van-field__control {
      color: #232323 !important;
    }
  }
</style>

<style lang="scss" scoped>
  v-deep .van-field__control {
    color: #323232;
  }
  .app-container {
    background: #0a0a0a;
    color: #fff;
    padding-top: 46px;
    .wrap {
      width: 92%;
      margin: 4rem auto 0;
      .code {
        border-radius: 0.5rem;
        overflow: hidden;
      }
      .btn {
        background-color: rgb(210, 160, 95);
        border-color: rgb(210, 160, 95);
        height: 2.8rem;
        width: 100%;
        margin: 1rem auto 0;
        padding: 0;
        font-size: 1.1rem;
        border-radius: 1.4rem;
      }
    }
  }
</style>
