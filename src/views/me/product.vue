<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-24 16:55:13
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="My product"> </nav-bar>
    <div class="wrap">
      <div class="w-100 zn-flex zn-ai-center zn-jc-center zn-text-orange">
        <div style="padding: 0.5rem 0; font-size: 0.95rem">Total：₹{{ money }}</div>
      </div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="load">
        <div class="card" v-for="item in list" :key="item.osn">
          <div class="zn-flex">
            <img :src="item.covers" alt="" />
            <div class="zn-flex-1">
              <div class="tr">{{ item.goods_name }}</div>
              <div class="tr">
                <span class="zn-text-orange">₹{{ item.money }}</span>
                <span> {{ item.days }}days {{ item.rate }}%/day </span>
              </div>
              <div class="tr">Profit: {{ item.profit_days }}days ₹{{ item.profit_reward }}</div>
              <div class="zn-flex zn-jc-between tr">
                <div>{{ item.create_time }}</div>
                <template v-if="item.finish == 0">
                  <div v-if="item.receive == 1" class="btn red" @click="Receive(item.osn)"
                    >Receive</div
                  >
                  <div v-else class="btn">Receive</div>
                </template>
                <div class="zn-text-orange" v-else>Finish</div>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
  import { order, receiveProfit } from '@/api/productApi'
  import { Toast } from 'vant'
  import NavBar from '@/components/NavBar'
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
        money: 0,
      }
    },
    methods: {
      async getList() {
        const res = await order({
          page: this.page,
        })
        res.data.list.map((n) => {
          n.covers = process.env.VUE_APP_PIC_URL + n.covers[0].replace('/public', '')
          n.icon = process.env.VUE_APP_PIC_URL + n.icon.replace('/public', '')
        })
        this.finished = res.data.finished
        this.list = [...this.list, ...res.data.list]
        this.page = res.data.page
        this.money = res.data.money
        this.loading = false
      },
      load() {
        this.loading = true
        this.getList()
      },
      async Receive(osn) {
        const res = await receiveProfit({
          osn: osn,
        })
        Toast.success(res.info)
        this.page = 1
        this.list = []
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
    .wrap {
      padding: 0 4%;
      .card {
        background: #404240;
        color: #fff;
        border-radius: 5px;
        padding: 8px 16px;
        margin-bottom: 1rem;
        img {
          width: 88px;
          height: 88px;
          margin-right: 8px;
          border-radius: 8px;
        }
        .zn-flex-1 {
          .tr {
            margin-top: 0.2rem;
            &:last-child {
              height: 1.8rem;
              line-height: 1.8rem;
            }
            .btn {
              width: 5rem;
              height: 1.8rem;
              line-height: 1.8rem;
              text-align: center;
              background-color: rgb(153, 153, 153);
              border-color: rgb(153, 153, 153);
              &.red {
                background-color: red;
                border-color: red;
              }
            }
          }
        }
      }
    }
  }
</style>
