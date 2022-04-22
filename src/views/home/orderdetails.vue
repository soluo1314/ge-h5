<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-22 17:30:36
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Order details"> </nav-bar>
    <div class="box">
      <div class="item">
        <div>Order No.</div>
        <div>{{ FormData.osn }}</div>
      </div>
      <div class="item">
        <div>Money</div>
        <div>{{ FormData.money }}</div>
      </div>
      <div class="item">
        <div>Pay type</div>
        <div>{{ FormData.osn }}</div>
      </div>
      <div class="item">
        <div>Order time</div>
        <div>{{ FormData.create_time }}</div>
      </div>
      <div class="item">
        <div>Status</div>
        <div>{{ FormData.status_flag }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { payinfo } from '@/api/amountApi'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'HomeOrderdetails',
    components: {
      NavBar,
    },
    data() {
      return {
        FormData: {},
      }
    },
    mounted() {
      this.getDetail()
    },
    methods: {
      async getDetail() {
        const res = await payinfo({
          osn: this.$route.query.osn,
        })
        this.FormData = res.data.item
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
        div:nth-child(1) {
          margin-right: 1rem;
          text-align: right;
          width: 6rem;
        }
      }
    }
  }
</style>
