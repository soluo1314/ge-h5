<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-14 14:16:34
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Bind bank card"> </nav-bar>
    <div class="box">
      <div class="item">
        <div>Realname :</div>
        <div>aaaaa</div>
      </div>
      <div class="item">
        <div>Bank :</div>
        <div>DCB Bank</div>
      </div>
      <div class="item">
        <div>Account :</div>
        <div>111111</div>
      </div>
      <div class="item">
        <div>IFSC :</div>
        <div>22222</div>
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
    name: 'bank',
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
        padding: 0.8rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        div:nth-child(1) {
          margin-right: 1rem;
          text-align: right;
          width: 6rem;
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
