<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-24 18:38:17
 * @Description: 
-->
<template>
  <div>
    <van-tabbar
      fixed
      route
      v-model="active"
      :active-color="$store.getters.themeColor"
      class="ignore-max-container"
      style="right: 0; z-index: 999999999"
    >
      <van-tabbar-item replace to="/home">
        <span>Home</span>
        <template #icon="props">
          <template
            v-if="props.active"
            :style="props.active ? { fill: $store.getters.themeColor } : {}"
          >
            <!-- <svg-icon icon-class="tabbar-home-fill" /> -->
            <img src="../../../../assets/images/tabbar/home-1.png" />
          </template>
          <template v-else>
            <img src="../../../../assets/images/tabbar/home.png" />
          </template>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/prize">
        <span>Prize Pool</span>
        <template #icon="props">
          <template
            v-if="props.active"
            :style="props.active ? { fill: $store.getters.themeColor } : {}"
          >
            <img src="../../../../assets/images/tabbar/prize-1.png" />
          </template>
          <template v-else>
            <img src="../../../../assets/images/tabbar/prize.png" />
          </template>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/product">
        <span>Product</span>
        <template #icon="props">
          <template
            v-if="props.active"
            :style="props.active ? { fill: $store.getters.themeColor } : {}"
          >
            <img src="../../../../assets/images/tabbar/product-1.png" />
          </template>
          <template v-else>
            <img src="../../../../assets/images/tabbar/product.png" />
          </template>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace @click="open">
        <span>Community</span>
        <template #icon="props">
          <template
            v-if="props.active"
            :style="props.active ? { fill: $store.getters.themeColor } : {}"
          >
            <img src="../../../../assets/images/tabbar/community.png" />
          </template>
          <template v-else>
            <img src="../../../../assets/images/tabbar/community.png" />
          </template>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/me">
        <span>Me</span>
        <template #icon="props">
          <template
            v-if="props.active"
            :style="props.active ? { fill: $store.getters.themeColor } : {}"
          >
            <img src="../../../../assets/images/tabbar/me-1.png" />
          </template>
          <template v-else>
            <img src="../../../../assets/images/tabbar/me.png" />
          </template>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Tabbar, TabbarItem } from 'vant'
  Vue.use(Tabbar)
  Vue.use(TabbarItem)
  export default {
    name: 'AppTabbar',
    components: {},
    data() {
      return {
        active: 0,
      }
    },
    computed: {
      community_url() {
        return localStorage.getItem('community_url')
      },
    },
    methods: {
      open() {
        if (this.community_url) {
          window.open(this.community_url)
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .ignore-max-container {
    background: rgb(26, 26, 26);
    .van-tabbar-item--active {
      background: rgb(26, 26, 26);
    }
  }
</style>
