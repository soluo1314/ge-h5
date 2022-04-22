<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-22 14:59:40
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="detail"> </nav-bar>
    <div class="newsDet_wrap"
      ><div class="title">{{ info.title }}</div
      ><div class="topbox"
        ><span>News</span> <span class="time">{{ info.publish_time }}</span></div
      ><div class="txtbox" v-html="info.content"></div
    ></div>
  </div>
</template>

<script>
  import { news } from '@/api/homeApi'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'HomeNewsdetail',
    components: {
      NavBar,
    },
    data() {
      return {
        info: {},
      }
    },
    mounted() {
      this.getDetail()
    },
    methods: {
      async getDetail() {
        const res = await news({
          id: this.$route.query.id,
        })
        this.info = res.data.info
      },
    },
  }
</script>

<style lang="scss" scoped>
  .app-container {
    background: #0a0a0a;
    color: #fff;
    padding-top: 46px;
    .newsDet_wrap {
      padding: 0 4%;
      font-size: 0.9rem;
      .title {
        font-size: 1.1rem;
        padding: 0.8rem 0;
      }
      .topbox {
        color: #c6c6c6;
        font-size: 0.95rem;
      }
      .txtbox {
        padding: 1rem 0;
        p {
          word-break: break-all;
          line-height: 1.5rem;
          padding-bottom: 0.8rem;
        }
      }
    }
  }
</style>
