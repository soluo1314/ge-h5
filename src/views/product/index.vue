<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-22 10:30:27
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar content="Medical equipment"></nav-bar>
    <div class="product_wrap">
      <div class="pBox">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="load">
          <div class="pItem" v-for="item in list" :key="item.cid">
            <img :src="item.covers" alt="" />
            <div class="pro_name zn-flex zn-ai-center">
              <img class="touxiang" :src="item.icon" alt="" />
              <div> {{ item.name }}</div>
            </div>
            <div class="zn-flex desc">
              <div class="zn-flex-1 zn-flex zn-jc-center zn-ai-center zn-flex-wrap">
                <div class="zn-text-orange">{{ item.price }}</div>
                <div class="w-100 zn-text-ct">Price (₹)</div>
              </div>
              <div class="zn-flex-1 zn-flex zn-jc-center zn-ai-center zn-flex-wrap">
                <div class="zn-text-orange">{{ item.rate }}</div>
                <div class="w-100 zn-text-ct">Day yield (%)</div>
              </div>
              <div class="zn-flex-1 zn-flex zn-jc-center zn-ai-center zn-flex-wrap">
                <div class="zn-text-orange">{{ item.days }}</div>
                <div class="w-100 zn-text-ct">Term (days)</div>
              </div>
            </div>
            <div class="pro_info zn-flex zn-ai-center zn-jc-between">
              <div class="pro_desc">
                <div>
                  Restricted quantity：
                  <span class="zn-text-orange">{{ item.invest_limit }}</span>
                </div>
                <div>{{ item.category_name }}</div>
              </div>
              <div
                class="btn zn-flex zn-ai-center zn-jc-center"
                @click="$router.push('/product/detail?id=' + item.cid)"
                >Rent</div
              >
            </div>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
  import { plist } from '@/api/productApi'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'Product',
    components: {
      NavBar,
    },
    data() {
      return {
        page: 1,
        list: [],
        loading: false,
        finished: false,
      }
    },
    methods: {
      async getList() {
        const res = await plist({ page: this.page })
        res.data.list.map((n) => {
          n.covers = process.env.VUE_APP_PIC_URL + n.covers[0].replace('/public', '')
          n.icon = process.env.VUE_APP_PIC_URL + n.icon.replace('/public', '')
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
    .product_wrap {
      padding: 0 3%;
      position: absolute;
      width: 94%;
      top: 3rem;
      bottom: 3rem;
      overflow-y: scroll;
      left: 0;
      .pBox {
        .pItem {
          border-bottom: 1px solid #2c2c2c;
          padding-bottom: 0.5rem;
          img {
            width: 100%;
            height: 20rem;
          }
          .pro_name {
            font-size: 0.95rem;
            padding: 0.6rem 0;
            border-bottom: 1px solid #2c2c2c;
            .touxiang {
              width: 1.2rem;
              height: 1.2rem;
              border-radius: 3px;
              margin-right: 0.2rem;
            }
          }
          .desc {
            height: 5rem;
            .zn-text-orange {
              font-size: 1.5rem;
            }
            .w-100 {
              font-size: 0.8rem;
            }
          }
          .pro_info {
            font-size: 0.8rem;
            color: #d2d2d2;
            position: relative;
            margin-top: 0.2rem;
            .pro_desc {
              div {
                padding: 0.15rem 0;
              }
            }
            .btn {
              height: 2.5rem;
              width: 7rem;
              background: rgb(238, 10, 36);
              border-radius: 0.3rem;
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
</style>
