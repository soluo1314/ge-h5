<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-22 09:25:25
 * @Description: 
-->
<template>
  <div class="app-container">
    <nav-bar back="true" content="Bind bank card"> </nav-bar>
    <div class="box">
      <div class="item">
        <div class="label">Realname :</div>
        <div
          ><van-field
            class="fieldbox"
            v-model="form.realname"
            placeholder="Please enter the realname"
        /></div>
      </div>
      <div class="item">
        <div class="label">Bank :</div>
        <div class="zn-flex zn-jc-between zn-ai-center zn-flex-1" @click="show = true">
          <div>DCB Bank</div>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="item">
        <div class="label">Account :</div>
        <div
          ><van-field
            class="fieldbox"
            v-model="form.account"
            placeholder="Please enter the bank account"
        /></div>
      </div>
      <div class="item">
        <div class="label">IFSC :</div>
        <div
          ><van-field
            class="fieldbox"
            v-model="form.password2"
            placeholder="Please enter the ifsc code"
        /></div>
      </div>
    </div>
    <div class="btn zn-flex zn-ai-center zn-jc-center">
      <div>Submit</div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns"
        @confirm="submit"
        @cancel="show = false"
        @change="onChange"
      />
    </van-popup>
  </div>
</template>

<script>
  import { bank, bank_update } from '@/api/meApi'
  import NavBar from '@/components/NavBar'
  export default {
    name: 'bank',
    components: {
      NavBar,
    },
    data() {
      return {
        show: false,
        form: {
          bank_id: undefined,
          bank_name: '',
          account: '',
          realname: '',
          password2: '',
        },
        columns: [],
      }
    },
    mounted() {
      this.getBanks()
    },
    methods: {
      async getBanks() {
        const res = await bank()
        this.columns = res.data.bank_arr
        this.form = Object.assign(this.from, res.data.bank)
      },
      async submit() {
        const res = await bank_update({})
        console.log(res)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .app-container {
    background: #0a0a0a;
    color: #fff;
    padding-top: 46px;
    .box {
      padding: 0 1rem;
      .item {
        padding: 0.8rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        .label {
          margin-right: 1rem;
          text-align: right;
          width: 6rem;
        }
        .fieldbox {
          background: transparent;
          border: none;
          padding: 0.4rem 0.5rem;
          // margin-top: 0.5rem;
          border-radius: 0.3rem;
        }
      }
    }
    .btn {
      background-color: rgb(210, 160, 95);
      border-color: rgb(210, 160, 95);
      height: 2.4rem;
      width: 80%;
      margin: 1rem auto 0;
      padding: 0;
      font-size: 1.1rem;
      border-radius: 1.2rem;
    }
  }
</style>
