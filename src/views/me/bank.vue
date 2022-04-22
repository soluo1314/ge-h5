<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-22 13:59:31
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
          <div>{{ form.bank_name }}</div>
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
        <div class="label">pay password :</div>
        <div
          ><van-field
            class="fieldbox"
            type="password"
            v-model="form.password2"
            placeholder="Please enter the pay password"
        /></div>
      </div>
    </div>
    <div class="btn zn-flex zn-ai-center zn-jc-center">
      <div @click="submit">Submit</div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-picker
        confirm-button-text="Confirm"
        cancel-button-text="Cancel"
        show-toolbar
        :columns="columns"
        valueKey="name"
        @confirm="confirm"
        @cancel="show = false"
      />
    </van-popup>
  </div>
</template>

<script>
  import { bank, bank_update } from '@/api/meApi'
  import { Toast } from 'vant'
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
        this.form = Object.assign(this.form, res.data.bank)
      },
      async submit() {
        const res = await bank_update(this.form)
        Toast.success(res.info)
      },
      confirm(item) {
        this.form.bank_id = item.id
        this.form.bank_name = item.name
        this.show = false
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
        font-size: 14px;
        .label {
          margin-right: 1rem;
          text-align: right;
          width: 6.5rem;
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
