<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-14 14:16:34
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Redpack"> </nav-bar>
    <div class="wrap">
      <div class="code">
        <van-field v-model="value" label="Code" placeholder="Please enter the redpack code" />
      </div>
      <div class="btn zn-flex zn-ai-center zn-jc-center">
        <div>Receive</div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  export default {
    name: 'redpack',
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
