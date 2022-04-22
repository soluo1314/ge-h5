<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-22 17:54:50
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Withdraw"> </nav-bar>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="load">
      <div class="tablebox">
        <div class="table">
          <div class="tr zn-flex zn-ai-center w-100">
            <div class="th">Time/Order No.</div>
            <div class="th">Money</div>
            <div class="th">Status</div>
          </div>
          <div class="tr zn-flex zn-ai-center w-100" v-for="item in list" :key="item">
            <div class="td">
              <div>{{ item.create_time }}</div>
              <div>{{ item.osn }}</div>
            </div>
            <div class="td">{{ item.money }}</div>
            <div class="td">{{ item.status_flag }}</div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
  import { cashlog } from '@/api/amountApi'
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
        list: [],
        page: 1,
      }
    },
    methods: {
      async getList() {
        const res = await cashlog({
          page: this.page,
        })
        this.finished = res.data.finished
        this.list = [...this.list, ...res.data.list]
        this.page = res.data.page
        this.loading = false
      },
      load() {
        this.loading = true
        this.getList()
      },
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
              width: 55%;
            }
            &:nth-child(2) {
              width: 15%;
            }
            &:nth-child(3) {
              flex: 1;
            }
          }
          .td {
            text-align: center;
            height: 2rem;
            font-size: 0.8rem;
            padding: 0.5rem 0.3rem;
            border-right: 1px solid #484848;
            border-bottom: 1px solid #484848;
            &:nth-child(1) {
              width: 55%;
            }
            &:nth-child(2) {
              width: 15%;
            }
            &:nth-child(3) {
              flex: 1;
            }
          }
        }
      }
    }
  }
</style>
