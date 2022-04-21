<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-21 19:46:29
 * @Description: 
-->
<template>
  <div class="app-container">
    <img class="set" @click="$router.push('/me/set')" src="../../assets/images/me/set.png" alt="" />
    <div class="head zn-flex zn-ai-center">
      <img :src="FormData.user.headimgurl" alt="" />
      <div>
        <div>{{ FormData.user.nickname }}</div>
        <div style="padding-top: 0.2rem">ID:{{ FormData.user.id }}</div>
      </div>
    </div>
    <div class="tab1 zn-flex zn-ai-center">
      <div class="zn-flex-1">
        <div>{{ FormData.wallet.balance }}</div>
        <div>Recharge Wallet</div>
      </div>
      <div class="zn-flex-1">
        <div>{{ FormData.wallet2.balance }}</div>
        <div>Balance Wallet</div>
      </div>
    </div>
    <div class="tab2 zn-flex zn-ai-center zn-mt-1">
      <div class="zn-flex-1">
        <div>{{ FormData.reward }}</div>
        <div>Profit</div>
      </div>
      <div class="zn-flex-1">
        <div>{{ FormData.rebate }}</div>
        <div>Commission</div>
      </div>
      <div class="zn-flex-1">
        <div>{{ FormData.tprofit }}</div>
        <div>Today Profit</div>
      </div>
    </div>
    <div class="tab2 zn-flex zn-ai-center">
      <div class="zn-flex-1">
        <div>{{ FormData.investment }}</div>
        <div>Products</div>
      </div>
      <div class="zn-flex-1">
        <div>{{ FormData.recharge }}</div>
        <div>Recharge</div>
      </div>
      <div class="zn-flex-1">
        <div>{{ FormData.withdraw }}</div>
        <div>Withdraw</div>
      </div>
    </div>
    <div
      class="link zn-flex zn-ai-center zn-jc-between"
      v-for="item in list"
      :key="item.name"
      @click="$router.push(item.link)"
    >
      <div class="zn-flex zn-ai-center">
        <img :src="item.icon" alt="" />
        <div>{{ item.name }}</div>
      </div>
      <van-icon name="arrow" />
    </div>
    <div style="height: 50px"></div>
  </div>
</template>

<script>
  import icon1 from '../../assets/images/me/icon1.png'
  import icon2 from '../../assets/images/me/icon2.png'
  import icon3 from '../../assets/images/me/icon3.png'
  import icon4 from '../../assets/images/me/icon4.png'
  import icon5 from '../../assets/images/me/icon5.png'
  import icon6 from '../../assets/images/me/icon6.png'
  import { me } from '@/api/meApi'
  export default {
    name: 'Me',
    data() {
      return {
        list: [
          {
            name: 'My product',
            link: '/me/product',
            icon: icon1,
          },
          {
            name: 'Bank account',
            link: '/me/bank',
            icon: icon2,
          },
          {
            name: 'Financial records',
            link: '/me/financial',
            icon: icon3,
          },
          {
            name: 'Invitation link',
            link: '/home/link',
            icon: icon4,
          },
          {
            name: 'My team',
            link: '/home/teams',
            icon: icon5,
          },
          {
            name: 'Redpack',
            link: '/me/redpack',
            icon: icon6,
          },
        ],
        FormData: {
          user: {},
          wallet: {},
          wallet2: {},
          investment: 0,
          recharge: 0,
          withdraw: 0,
          reward: '',
          rebate: 0,
          tprofit: 0,
        },
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      async getList() {
        const res = await me()
        this.FormData = res.data
      },
    },
  }
</script>

<style lang="scss" scoped>
  .app-container {
    background: #0a0a0a;
    color: #fff;
    .set {
      position: fixed;
      top: 1rem;
      right: 4%;
      width: 1.5rem;
      height: 1.5rem;
    }
    .head {
      padding: 1rem 4% 0.5rem;
      img {
        width: 4.7rem;
        height: 4.7rem;
        border: 0.15rem solid #fff;
        border-radius: 50%;
        margin-right: 0.8rem;
        overflow: hidden;
      }
      div {
        font-size: 0.95rem;
      }
    }
    .tab1 {
      width: 92%;
      margin: 0 auto;
      padding: 0.3rem 0;
      background: #1a1a1a;
      border-radius: 0.5rem;
      .zn-flex-1 {
        padding: 0.5rem;
        text-align: center;
        position: relative;
        &:nth-child(1):after {
          content: '';
          width: 2px;
          height: 31px;
          background-color: #2a2a2a;
          position: absolute;
          top: 50%;
          right: -1px;
          transform: translate(0, -50%);
        }
        div {
          margin-top: 0.3rem;
        }
      }
    }
    .tab2 {
      width: 92%;
      margin: 0 auto;
      padding: 0.3rem 0;
      background: #1a1a1a;
      border-radius: 0.5rem 0.5rem 0 0;
      &:last-child {
        border-radius: 0 0 0.5rem 0.5rem;
      }
      .zn-flex-1 {
        padding: 0.5rem;
        text-align: center;
        position: relative;
        &:not(:nth-child(3n)):after {
          content: '';
          width: 2px;
          height: 31px;
          background-color: #2a2a2a;
          position: absolute;
          top: 50%;
          right: -1px;
          transform: translate(0, -50%);
        }
        div {
          margin-top: 0.3rem;
        }
      }
    }
    .link {
      width: 92%;
      margin: 0 auto;
      padding: 0.8rem 0;
      font-size: 0.95rem;
      border-bottom: 1px solid #1a1a1a;
      img {
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 0.5rem;
      }
    }
  }
</style>
