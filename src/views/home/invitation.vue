<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-15 18:54:03
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Invitation"> </nav-bar>
    <div class="invite_wrap">
      <div class="idbox"
        ><p>Your invitation code</p><span><b>497684</b></span></div
      >
      <p class="tittxt_1">1.Dear members, the following is your invitation link</p>
      <div class="link">https://ge.tianbo8.top/h5/register?icode=497684</div>
      <div class="zn-flex zn-jc-center zn-ai-center">
        <div class="btn zn-flex zn-jc-center zn-ai-center">Copy invitation link</div>
      </div>
      <p class="tittxt_2">2.Save the QR code and send it to your friends for recommendation</p>
      <div class="qrcode"
        ><div class="van-image"
          ><img
            src="https://ge.tianbo8.top/uploads/qrcode/tg_497684.jpg?rt=25754"
            class="van-image__img"
          /><!----><!----></div
        ></div
      >
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  export default {
    name: 'HomeInvitation',
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
        padding: 0.5rem 0;
        border-radius: 0.2rem;
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
