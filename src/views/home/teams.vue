<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-21 19:18:23
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="My team"> </nav-bar>
    <div class="w-100 zn-flex zn-ai-center zn-jc-center">
      <div style="padding: 0.8rem 0 0; font-size: 1.2rem">Total：{{ total }}</div>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="load">
      <div class="tablebox">
        <div class="table">
          <div class="tr zn-flex zn-ai-center w-100">
            <div class="th">Avatar</div>
            <div class="th">Account</div>
            <div class="th">Level</div>
            <div class="th">Register time</div>
          </div>
          <div
            class="tr zn-flex zn-ai-center w-100"
            v-for="(item, index) in list"
            :key="item.account + index"
          >
            <div class="td">
              <img :src="item.headimgurl" alt="" />
            </div>
            <div class="td">{{ item.account }}</div>
            <div class="td">{{ item.level }}</div>
            <div class="td">{{ item.reg_time }} </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import { team } from '@/api/homeApi'
  export default {
    name: 'HomeTeams',
    components: {
      NavBar,
    },
    data() {
      return {
        loading: false,
        finished: false,
        list: [],
        page: 1,
        total: 0,
      }
    },
    methods: {
      async getList() {
        const res = await team({
          page: this.page,
        })
        this.finished = res.data.finished
        this.list = [...this.list, ...res.data.list]
        this.page = res.data.page
        this.total = res.data.count
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
              width: 15%;
            }
            &:nth-child(2) {
              width: 25%;
            }
            &:nth-child(3) {
              width: 15%;
            }
            &:nth-child(4) {
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
              width: 15%;
            }
            &:nth-child(2) {
              width: 25%;
            }
            &:nth-child(3) {
              width: 15%;
            }
            &:nth-child(4) {
              flex: 1;
            }
            img {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
      }
    }
  }
</style>
