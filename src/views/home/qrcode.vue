<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-22 16:26:13
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Service"></nav-bar>
    <div class="t1 zn-text-ct">{{ $route.query.name }}</div>
    <div class="t2 zn-text-ct">
      <!-- <canvas id="QRCode_header"></canvas> -->
      <img :src="$route.query.qrcode" alt="" />
    </div>
    <div class="t3 zn-text-ct">
      <a href="###">{{ $route.query.account }}</a>
    </div>
  </div>
</template>

<script>
  import { getQrcode } from '@/api/homeApi'
  import NavBar from '@/components/NavBar'
  import QRCode from 'qrcode'
  export default {
    name: 'HomeQrcode',
    components: {
      NavBar,
    },
    data() {
      return {
        url: '',
      }
    },
    mounted() {
      this.getCode()
    },
    methods: {
      async getCode() {
        const res = await getQrcode()
        this.url = res.data.url
        this.initCode()
      },
      initCode() {
        let opts = {
          errorCorrectionLevel: 'H', //容错级别
          type: 'image/png', //生成的二维码类型
          quality: 0.3, //二维码质量
          margin: 5, //二维码留白边距
          width: 240, //宽
          height: 240, //高
          text: '', //二维码内容
          color: {
            dark: '#333333', //前景色
            light: '#fff', //背景色
          },
        }

        this.$nextTick(() => {
          //this.QRCodeMsg = "http://www.baidu.com"; //生成的二维码为URL地址js
          let msg = document.getElementById('QRCode_header')
          // 将获取到的数据（val）画到msg（canvas）上
          console.log(888, msg)
          QRCode.toCanvas(msg, this.url, opts, function (error) {
            console.log(error)
          })
        })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .app-container {
    background: #0a0a0a;
    color: #fff;
    padding-top: 46px;
    font-size: 1.2rem;
    .t1 {
      margin-top: 2rem;
      font-size: 1.5rem;
    }
    .t2 {
      margin-top: 0.8rem;
      #QRCode_header,
      img {
        width: 240px;
        height: 240px;
        margin: auto;
      }
    }
    .t3 {
      margin-top: 0.8rem;
      a {
        color: #fff;
        text-decoration: underline;
      }
    }
  }
</style>
