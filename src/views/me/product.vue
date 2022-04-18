<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-15 18:03:13
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="My product"> </nav-bar>
    <div class="wrap">
      <div class="w-100 zn-flex zn-ai-center zn-jc-center zn-text-orange">
        <div style="padding: 0.5rem 0; font-size: 0.95rem">Total：₹550.00</div>
      </div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="card">
          <div class="zn-flex">
            <img src="../../assets/images/product/item.jpg" alt="" />
            <div class="zn-flex-1">
              <div class="tr">Ultrasound</div>
              <div class="tr">
                <span class="zn-text-orange">₹550</span>
                <span> 45days 4.3%/day </span>
              </div>
              <div class="tr">Profit: 6days ₹141.90</div>
              <div class="zn-flex zn-jc-between tr">
                <div>04-06 13:24</div>
                <div class="btn">Receive</div>
              </div>
            </div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
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
        tableData: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      }
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
            }
          }
        }
      }
    }
  }
</style>
