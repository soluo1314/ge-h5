<!--
 * @Author: xyw
 * @Date: 2022-04-11 11:51:14
 * @LastEditors: xyw
 * @LastEditTime: 2022-04-24 18:35:57
 * @Description: 
-->
<template>
  <div class="app-container">
    <div class="index_wrap">
      <div class="index_top">
        <div class="headbox zn-jc-between">
          <div class="zn-flex zn-ai-center">
            <van-image
              v-if="userInfo.headimgurl"
              class="logo"
              @click="$router.push('/me')"
              :src="userInfo.headimgurl"
            />
            <van-image
              v-else
              class="logo"
              @click="$router.push('/me')"
              src="../../assets/images/home/user.png"
            />
            <div style="padding-left: 0.5rem">{{ userInfo.account }}</div>
          </div>
          <img
            class="logo"
            src="../../assets/images/home/erji.png"
            @click="
              $router.push(
                `/home/qrcode?account=${FormData.service.account}&name=${FormData.service.name}&qrcode=${FormData.service.qrcode}`
              )
            "
          />
        </div>
        <van-swipe
          :autoplay="3000"
          style="height: 12rem; border-radius: 0.5rem"
          indicator-color="#fff"
        >
          <van-swipe-item v-for="(item, index) in FormData.kv" :key="index + item.cover">
            <img :src="item.cover" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="index_cer">
        <div class="zn-flex">
          <div class="zn-flex-1 zn-text-ct" @click="$router.push('/home/recharge')">
            <img src="../../assets/images/home/icon1.png" alt="" />
            <div class="text">Recharge</div>
          </div>
          <div class="zn-flex-1 zn-text-ct" @click="$router.push('/home/withdrawal')">
            <img src="../../assets/images/home/icon2.png" alt="" />
            <div class="text">Withdrawal</div>
          </div>
          <div class="zn-flex-1 zn-text-ct" @click="$router.push('/home/teams')">
            <img src="../../assets/images/home/icon3.png" alt="" />
            <div class="text">Number of teams</div>
          </div>
          <div class="zn-flex-1 zn-text-ct" @click="$router.push('/home/link')">
            <img src="../../assets/images/home/icon4.png" alt="" />
            <div class="text">Invitation link</div>
          </div>
        </div>
        <van-notice-bar style="margin-bottom: 1rem" color="#fff" :text="FormData.noticeText">
          <template #left-icon>
            <img
              style="width: 1rem; height: 1rem; margin-right: 0.5rem"
              src="../../assets/images/home/alert.png"
            />
          </template>
        </van-notice-bar>
        <div>
          <video autoplay controls class="w-100" :src="FormData.video.url"></video>
        </div>
        <div class="newsbox">
          <div class="titbox"><p>News information</p><i class="line"></i></div>
          <div class="listbox">
            <div
              class="item"
              v-for="item in FormData.news"
              :key="item.id"
              @click="$router.push('/home/newsdetail?id=' + item.id)"
            >
              <p>{{ item.title }}</p>
              <img :src="item.cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getHome } from '@/api/homeApi'
  // import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    data() {
      return {
        FormData: {
          kv: [],
          news: [],
          notice: [],
          video: {},
          service: {
            account: '',
            name: '',
            qrcode: '',
          },
        },
      }
    },
    mounted() {
      this.getHomeData()
    },
    computed: {
      userInfo() {
        return this.$store.getters.userInfo
      },
    },
    methods: {
      async getHomeData() {
        const res = await getHome()
        this.FormData = res.data
        //处理图片路劲
        this.FormData.kv.map((n) => {
          n.cover = process.env.VUE_APP_PIC_URL + n.cover.replace('/public', '')
        })
        this.FormData.news.map((n) => {
          n.cover = process.env.VUE_APP_PIC_URL + n.cover.replace('/public', '')
        })
        //处理消息通知
        this.FormData.noticeText = this.FormData.notice.reduce(
          (pre, curr) => pre + '   ' + curr.title,
          ''
        )
        this.FormData.service.qrcode += process.env.VUE_APP_PIC_URL
        localStorage.setItem('community_url', res.data.community_url)
        console.log(res)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .index_wrap {
    position: absolute;
    top: 0;
    bottom: 3rem;
    overflow-y: scroll;
    left: 0;
    width: 100%;
    background: #0a0a0a;
    color: #fff;
    .index_top {
      background: url('../../assets/images/home/index_bg.png') no-repeat left top/100% auto;
      padding: 0 3%;
      .headbox {
        display: flex;
        color: #fff;
        align-items: center;
        padding: 0.5rem 0;
        .logo {
          width: 2.2rem;
          height: 2.2rem;
          border-radius: 50%;
          overflow: hidden;
        }
      }
    }
    .index_cer {
      padding: 0 3%;
      img {
        width: 3rem;
        height: 3rem;
      }
      .zn-flex {
        padding: 1.5rem 0;
        font-size: 0.7rem;
        .text {
          padding-top: 0.6rem;
        }
      }
      .van-notice-bar {
        background-color: transparent;
      }
      .newsbox {
        margin-top: 1.4rem;
        position: relative;
        .titbox {
          color: #fff;
          text-align: center;
          position: relative;
          p {
            display: inline-block;
            position: relative;
            background: #0a0a0a;
            z-index: 2;
            padding: 0 0.5rem;
          }
          .line {
            height: 1px;
            background: #5c5c5c;
            display: block;
            position: absolute;
            width: 48%;
            margin: 0 auto;
            left: 0;
            right: 0;
            top: 0.6rem;
          }
        }
        .listbox {
          display: flex;
          flex-wrap: wrap;
          padding: 0.5rem 0 1rem;
          .item {
            width: 49%;
            display: block;
            margin: 0 2% 0.3rem 0;
            &:nth-child(2n) {
              margin-right: 0;
            }
            p {
              color: #fff;
              text-align: center;
              font-size: 0.8rem;
              padding: 0.8rem 0 0.5rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            img {
              width: 100%;
              height: 7rem;
            }
          }
        }
      }
    }
  }
</style>
