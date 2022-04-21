<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-21 19:44:55
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Invitation"> </nav-bar>
    <div class="invite_wrap">
      <div class="idbox"
        ><p>Your invitation code</p
        ><span
          ><b>{{ code }}</b></span
        ></div
      >
      <p class="tittxt_1">1.Dear members, the following is your invitation link</p>
      <div class="link">{{ url }}</div>
      <div class="zn-flex zn-jc-center zn-ai-center">
        <div class="btn zn-flex zn-jc-center zn-ai-center" @click="copy">Copy invitation link</div>
      </div>
      <p class="tittxt_2">2.Save the QR code and send it to your friends for recommendation</p>
      <div class="qrcode"
        ><div class="van-image"
          ><img :src="imgurl" class="van-image__img" /><!----><!----></div
        ></div
      >
    </div>
  </div>
</template>

<script>
  import { getQrcode } from '@/api/homeApi'
  import { Toast } from 'vant'
  import NavBar from '@/components/NavBar'
  import QRCode from 'qrcode'
  export default {
    name: 'HomeInvitation',
    components: {
      NavBar,
    },
    data() {
      return {
        url: '',
        imgurl: '',
        code: '',
      }
    },
    mounted() {
      this.getCode()
    },
    methods: {
      copy() {
        let input = document.createElement('input')
        document.body.appendChild(input)
        input.value = this.url
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
        Toast.success('Copy Scuess')
      },
      async getCode() {
        const res = await getQrcode()
        this.url = res.data.url
        this.imgurl = process.env.VUE_APP_PIC_URL + res.data.qrcode.replace('/public', '')
        this.code = res.data.icode
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
    .invite_wrap {
      font-size: 0.75rem;
      padding: 0 4%;
      .idbox {
        text-align: center;
        font-size: 0.95rem;
        padding: 2rem 0 1rem;
      }
      .link {
        border: 1px solid #7d7d7d;
        text-align: center;
        width: 80%;
        margin: 0.7rem auto 0;
        padding: 0.5rem;
        border-radius: 0.2rem;
        overflow: hidden;
      }
      .btn {
        background-color: #d2a05f;
        border-color: #d2a05f;
        height: 2.4rem;
        width: 80%;
        margin: 1rem auto 0;
        padding: 0;
        border-radius: 0.2rem;
      }
      .qrcode {
        width: 52%;
        margin: 2rem auto 0;
        background: #fff;
        padding: 0.3rem;
        .van-image {
          width: 11rem;
          margin: 0 auto;
          display: block;
          height: 11rem;
        }
      }
    }
  }
</style>
