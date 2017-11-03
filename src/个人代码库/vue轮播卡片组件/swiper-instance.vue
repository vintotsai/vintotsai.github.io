<template>
  <div class="qqbk-page">
    <!-- 放大图片 -->
    <enlarge-img v-if="isShowBigImg" @close-big-img="isShowBigImg = false" :imgSrc="imgSrc"></enlarge-img>
    <!-- 轮播卡片 -->
    <swiper :options="swiperOpts">
      <swiper-slide v-for="(item, index) in qqbkList" :key="index">
        <div class="card" v-show="!isShowBigImg">
          <div class="img-container swiper-zoom-container">
            <!-- 爆品图片 -->
            <img :src="item.pic_url" :alt="item.id" @click="enlargeMe($event)">
          </div>
          <div class="bg-gradient"></div>
          <div class="txt-container">
            <div class="txt">
              <p id="txt">{{item.goods_name}}</p>
            </div>
          </div>
          <div class="btn">
            <!-- 下载爆品图片 -->
            <a :href="item.pic_url" :download="item.id"></a>
            <div class="copy-txt" v-clipboard:copy="item.goods_name" v-clipboard:success="onCopyOk" v-clipboard:error="onCopyError"></div>
            <div class="to-detail" @click="toDetail(item)"></div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import enlargeImg from './enlarge-img.vue'
export default {
  name: 'qqbkfhc',
  components: {
    enlargeImg
  },
  data() {
    return {
      swiperOpts: {
        initialSlide: this.getQueryString('goods_index'), //取hash值 用于哈希链接
        slidesPerView: 'auto',
        spaceBetween: 5,
        centeredSlides: true,
        hashnav: true,
        effect: 'coverflow',
        coverflow: {
          rotate: 50,
          stretch: 30,
          depth: 100,
          modifier: 1,
          slideShadows: false
        },
        onTransitionStart(swiper) {
          console.log(swiper)
        }
      },
      qqbkList: [],
      isShowBigImg: false,
      imgSrc: null
    }
  },
  created() {
    this.$http.get('bkfhc-config.json').then(response => {
      let res = response.body
      this.globalData.config = res.config
      this.globalData.base_url = res.config.base_url || 'http://m.7mall.cn'
      this.qqbkList = res.config.qqbk
    })
  },
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  // gcam 
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    onCopyOk(e) {
      alert('Copy OK！')
    },
    onCopyError(e) {
      alert('Failed to copy texts')
    },
    enlargeMe(e) {
      this.isShowBigImg = true
      this.imgSrc = e.currentTarget.src
    },
    toDetail(item) {
      this.js2app.toDetail({ type: '0', id: item.id })
    }
  }
}
</script>
<style scoped lang="less">
.qqbk-page {
  height: 100%;
  width: 100%;
  position: absolute;
  background: url('./imgs/h5_qqbp_bg_pic_1.png');
}
.swiper-container {
  height: 600px;
  .swiper-slide {
    width: 88%;
  }
}
.card {
  position: absolute;
  top: 20px;
  left: 10px;
  .img-container {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 314px;
    height: 559px;
    border-radius: 10px;
    img {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 314px;
      height: 559px;
    }
  }
  .bg-gradient {
    position: absolute;
    width: 313.98px;
    top: 409px;
    height: 150px;
    background: -webkit-linear-gradient(
      rgba(0, 0, 0, 0),
      #585858
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(
      rgba(0, 0, 0, 0),
      #585858
    ); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(
      rgba(0, 0, 0, 0),
      #585858
    ); /* Firefox 3.6 - 15 */
    background: linear-gradient(rgba(0, 0, 0, 0), #585858); /* 标准的语法（必须放在最后） */
  }
  .txt-container {
    border-width: 0px;
    position: absolute;
    top: 11.533rem;
    left: 10px;
    width: 304px;
    height: 94px;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    color: #ffffff;
    text-align: left;
    .txt-bg {
      border-width: 0px;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 297px;
      height: 95px;
    }
    .txt {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      border-width: 0px;
      position: absolute;
      left: 2px;
      top: 22px;
      width: 292px;
      word-wrap: break-word;
    }
  }
  .btn {
    position: absolute;
    left: 16px;
    top: 522px;
    width: 290px;
    height: 20px;
    > a {
      background: no-repeat center/100% url('./imgs/h5_qqbp_icon_baoc_2.png');
      display: inline-block;
      height: 20px;
      width: 80px;
    }
    .copy-txt {
      background: no-repeat center/100% url('./imgs/h5_qqbp_icon_fuzhi_3.png');
      display: inline-block;
      height: 20px;
      width: 80px;
      margin: 0 10px;
    }
    .to-detail {
      background: no-repeat center/100% url('./imgs/h5_qqbp_icon_chakan_4.png');
      display: inline-block;
      height: 20px;
      width: 80px;
    }
  }
}
</style>
