<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-15 15:39:21
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Recharge"> </nav-bar>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="tablebox">
        <div class="table">
          <div class="tr zn-flex zn-ai-center w-100">
            <div class="th">Time/Order No.</div>
            <div class="th">Money</div>
            <div class="th">Status</div>
            <div class="th">Details</div>
          </div>
          <div class="tr zn-flex zn-ai-center w-100" v-for="item in tableData" :key="item">
            <div class="td">
              <div>04-14 14:20:51</div>
              <div>158d37480124eb7f</div>
            </div>
            <div class="td">550</div>
            <div class="td">Waiting payment</div>
            <div class="td">
              <van-button size="mini" type="warning" @click="$router.push('/home/orderdetails')"
                >View</van-button
              >
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  export default {
    name: 'HomeRechargerecords',
    components: {
      NavBar,
    },
    data() {
      return {
        loading: false,
        finished: false,
        tableData: [1, 2, 3, 4, 5],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .app-container {
    background: #0a0a0a;
    color: #fff;
    padding-top: 46px;
    .tablebox {
      padding: 1rem 3% 0.5rem;
      .table {
        background: #2d2d2d;
        border-top: 1px solid #484848;
        border-left: 1px solid #484848;
        .tr {
          font-size: 0.8rem;
          width: 100%;
          .th {
            padding: 0.5rem 0.3rem;
            border-bottom: 1px solid #484848;
            font-size: 0.8rem;
            border-right: 1px solid #484848;
            text-align: center;
            font-weight: bold;
            &:nth-child(1) {
              width: 35%;
            }
            &:nth-child(2) {
              width: 15%;
            }
            &:nth-child(3) {
              width: 25%;
            }
            &:nth-child(4) {
              flex: 1;
            }
          }
          .td {
            text-align: center;
            height: 2rem;
            line-height: 2rem;
            font-size: 0.8rem;
            padding: 0.5rem 0.3rem;
            border-right: 1px solid #484848;
            border-bottom: 1px solid #484848;
            &:nth-child(1) {
              width: 35%;
            }
            &:nth-child(2) {
              width: 15%;
            }
            &:nth-child(3) {
              width: 25%;
            }
            &:nth-child(4) {
              flex: 1;
            }
          }
        }
      }
    }
  }
</style>
