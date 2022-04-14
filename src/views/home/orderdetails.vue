<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-14 19:30:18
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Order details"> </nav-bar>
    <div class="box">
      <div class="item">
        <div>Order No.</div>
        <div>158d37480124eb7f</div>
      </div>
      <div class="item">
        <div>Money</div>
        <div>550</div>
      </div>
      <div class="item">
        <div>Pay type</div>
        <div>Online Payment</div>
      </div>
      <div class="item">
        <div>Order time</div>
        <div>04-14 14:20:51</div>
      </div>
      <div class="item">
        <div>Status</div>
        <div>Waiting payment</div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  export default {
    name: 'HomeOrderdetails',
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
  }
</style>
