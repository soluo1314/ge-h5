<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-14 12:25:23
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Project"></nav-bar>
    <div class="product_wrap">
      <div class="pBox">
        <div class="pItem">
          <img src="../../assets/images/product/item.jpg" alt="" />
          <div class="pro_name zn-flex zn-ai-center">
            <img class="touxiang" src="../../assets/images/product/item.jpg" alt="" />
            <div> Ultrasound</div>
          </div>
          <div class="zn-flex desc">
            <div class="zn-flex-1 zn-flex zn-jc-center zn-ai-center zn-flex-wrap">
              <div class="w-100 zn-text-ct">Price (₹)</div>
              <div class="zn-text-orange">550</div>
            </div>
            <div class="zn-flex-1 zn-flex zn-jc-center zn-ai-center zn-flex-wrap">
              <div class="w-100 zn-text-ct">Day yield (%)</div>
              <div class="zn-text-orange">4.3</div>
            </div>
            <div class="zn-flex-1 zn-flex zn-jc-center zn-ai-center zn-flex-wrap">
              <div class="w-100 zn-text-ct">Term (days)</div>
              <div class="zn-text-orange">45</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cerbox">
        <div class="titlebox zn-flex zn-jc-center">
          <div class="title zn-flex zn-jc-center zn-ai-center zn-text-orange"
            >Project description</div
          >
        </div>
        <div class="pro_detail">
          <div class="tablecon">
            <p
              ><b
                >1. After users purchase [Ultrasonic-550rs], they will get equipment rental time and
                daily income.</b
              ><b></b></p
            ><p><b></b></p
            ><p
              ><b
                >2. The customer invests 550RS and gets 23.65rs every day. 45-day rental contract.
                Daily rate of return 4.3%, total rate of return 1064.25rs</b
              ><b></b></p
            ><p><b></b></p
            ><p
              ><b
                >3. The daily income will be credited to the account the next day, and you can
                directly apply for withdrawal.</b
              ><b></b></p
            ><p><b></b></p
            ><p
              ><b
                >4. When your account balance reaches 550rs, you can continue to subscribe to
                [Ultrasonic-550rs], and you will get higher income every day.</b
              ><b></b><span style="font-size: 14px; color: var(--el-text-color-regular)"></span
              ><span style="font-size: 14px; color: var(--el-text-color-regular)"></span
            ></p>
          </div>
        </div>
      </div>
    </div>

    <div class="foot">
      <div class="btn zn-flex zn-jc-center zn-ai-center zn-text-ct">Buy now</div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  export default {
    name: 'ProductDetail',
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
            height: 3rem;
            font-size: 0.8rem;
            background: #2d2d2d;
          }
        }
      }
      .cerbox {
        background: #1a1a1a;
        margin-top: 0.6rem;
        .titlebox {
          .title {
            width: 50%;
            height: 44px;
            border-bottom: 1px solid #d2a05f;
          }
        }
        .pro_detail {
          padding: 1.2rem 0;
          .tablecon {
            width: 94%;
            margin: 0 auto;
            padding-bottom: 1rem;
          }
        }
      }
    }

    .foot {
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 4rem;
      padding-top: 0.3rem;
      left: 0;
      right: 0;
      background: #2d2d2d;
      .btn {
        background: rgb(238, 10, 36);
        width: 94%;
        height: 3rem;
        font-size: 0.95rem;
        margin: 0 auto;
      }
    }
  }
</style>
