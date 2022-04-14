<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-14 10:53:14
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar content="Medical equipment"></nav-bar>
    <div class="product_wrap">
      <div class="pBox">
        <div class="pItem" v-for="item in [4, 5, 6, 7, 8, 9]" :key="item">
          <img src="../../assets/images/product/item.jpg" alt="" />
          <div class="pro_name zn-flex zn-ai-center">
            <img class="touxiang" src="../../assets/images/product/item.jpg" alt="" />
            <div> Ultrasound</div>
          </div>
          <div class="zn-flex desc">
            <div class="zn-flex-1 zn-flex zn-jc-center zn-ai-center zn-flex-wrap">
              <div class="zn-text-orange">550</div>
              <div class="w-100 zn-text-ct">Price (₹)</div>
            </div>
            <div class="zn-flex-1 zn-flex zn-jc-center zn-ai-center zn-flex-wrap">
              <div class="zn-text-orange">4.3</div>
              <div class="w-100 zn-text-ct">Day yield (%)</div>
            </div>
            <div class="zn-flex-1 zn-flex zn-jc-center zn-ai-center zn-flex-wrap">
              <div class="zn-text-orange">45</div>
              <div class="w-100 zn-text-ct">Term (days)</div>
            </div>
          </div>
          <div class="pro_info zn-flex zn-ai-center zn-jc-between">
            <div class="pro_desc">
              <div>
                Restricted quantity：
                <span class="zn-text-orange">10</span>
              </div>
              <div>Medical equipment</div>
            </div>
            <div
              class="btn zn-flex zn-ai-center zn-jc-center"
              @click="$router.push('/product/detail')"
              >Rent</div
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  export default {
    name: 'Product',
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
