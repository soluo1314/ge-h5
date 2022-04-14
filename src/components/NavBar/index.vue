<!--
 * @Author: xyw
 * @Date: 2022-04-13 11:37:33
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-14 14:21:09
 * @Description: 
-->
<template>
  <div class="nav zn-flex zn-jc-center zn-ai-center">
    <div v-if="back" class="back" @click="$router.go(-1)">
      <van-icon name="arrow-left" /> Back
    </div>
    {{ content }}
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      content: String,
      back: String,
    },
  }
</script>
<style lang="scss" scoped>
  .nav {
    background: #1a1a1a;
    color: #fff;
    height: 46px;
    font-size: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    .back {
      position: absolute;
      top: 50%;
      left: 3%;
      transform: translate(0, -50%);
    }
    .right {
      position: absolute;
      top: 50%;
      right: 3%;
      transform: translate(0, -50%);
    }
  }
</style>
