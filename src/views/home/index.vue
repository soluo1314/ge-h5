<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-11 17:35:41
 * @Description: 
-->
<template>
  <div class="app-container">
    <div class="index_wrap">
      <div class="index_top">
        <div class="headbox">
          <div>
            <van-image class="logo" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Image as VanImage } from 'vant'

  Vue.use(VanImage)
  export default {
    name: 'Home',
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  .index_wrap {
    position: absolute;
    top: 0;
    bottom: 3rem;
    overflow-y: scroll;
    left: 0;
    width: 100%;
    .index_top {
      background: url('../../assets/images/home/index_bg.png') no-repeat left top/100% auto;
      padding: 0 3%;
      .headbox {
        display: flex;
        color: #fff;
        align-items: center;
        padding: 0.5rem 0;
        .logo {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          overflow: hidden;
        }
      }
    }
  }
</style>
