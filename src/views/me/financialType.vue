<!--
 * @Author: xyw
 * @Date: 2022-04-24 18:13:33
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-24 18:28:55
 * @Description: 
-->
<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-21 20:19:10
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Financial records"> </nav-bar>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="load">
      <div class="tablebox">
        <div class="table">
          <div class="tr zn-flex zn-ai-center w-100">
            <div class="th">Time</div>
            <div class="th">Investment</div>
            <div class="th">Rate(%)</div>
            <div class="th">Money</div>
            <div class="th">Remark</div>
          </div>
          <div class="tr zn-flex zn-ai-center w-100" v-for="(item, index) in list" :key="index">
            <div class="td">
              {{ item.create_time }}
            </div>
            <div class="td">{{ item.base_money }}</div>
            <div class="td">{{ item.rate }}</div>
            <div class="td">{{ item.money }}</div>
            <div class="td">{{ item.remark }}</div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  import { reward } from '@/api/meApi'
  export default {
    name: 'financial',
    components: {
      NavBar,
    },
    data() {
      return {
        loading: false,
        finished: false,
        page: 1,
        list: [],
      }
    },
    methods: {
      async getList() {
        const res = await reward({
          page: this.page,
          s_type: this.$route.query.s_type,
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
              width: 20%;
            }
            &:nth-child(2) {
              width: 25%;
              max-width: 25%;
            }
            &:nth-child(3) {
              width: 15%;
            }
            &:nth-child(4) {
              width: 15%;
            }
            &:nth-child(5) {
              width: 25%;
              max-width: 25%;
            }
          }
          .td {
            box-sizing: border-box;
            text-align: center;
            height: 3rem;
            // line-height: 3rem;
            font-size: 0.8rem;
            padding: 0.5rem 0.3rem;
            border-right: 1px solid #484848;
            border-bottom: 1px solid #484848;
            overflow: hidden;
            word-break: break-word;
            &:nth-child(1) {
              width: 20%;
            }
            &:nth-child(2) {
              width: 25%;
              max-width: 25%;
            }
            &:nth-child(3) {
              width: 15%;
            }
            &:nth-child(4) {
              width: 15%;
            }
            &:nth-child(5) {
              width: 25%;
              max-width: 25%;
            }
          }
        }
      }
    }
  }
</style>
