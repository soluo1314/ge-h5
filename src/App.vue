<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-11 17:02:59
 * @Description: 
-->
<template>
  <div id="app" class="ignore-max-container">
    <router-view />
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('theme/setThemeType', 'orange')
    },
  }
</script>
