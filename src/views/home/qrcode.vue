<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-14 12:35:33
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Service"></nav-bar>
    <div class="t1 zn-text-ct">Telegram</div>
    <div class="t2 zn-text-ct">
      <img src="../../assets/images/home/qrcode.png" />
    </div>
    <div class="t3 zn-text-ct">
      <a href="###">@tel823482001</a>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  export default {
    name: 'HomeQrcode',
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
    font-size: 1.2rem;
    .t1 {
      margin-top: 2rem;
      font-size: 1.5rem;
    }
    .t2 {
      margin-top: 0.8rem;
    }
    .t3 {
      margin-top: 0.8rem;
      a {
        color: #fff;
        text-decoration: underline;
      }
    }
  }
</style>
