<template>
  <div class="global-page lmfhc-mzgh-page" id="lmfhc-mzgh-page">
    <div class="container" id="lmfhc-mzgh" ref="lmfhc-mzgh">
      <!-- 顶部 -->
      <div class="top-imgs">
        <img :src="require('./imgs/h5_meizhuang_bg_top_1.jpg')" class="bg1">
        <img :src="require('./imgs/h5_meizhuang_bg_top_2.jpg')" class="bg2" >
        <img :src="require('./imgs/h5_meizhuang_bg_top_3.jpg')" class="bg3" >
      </div>

      <!-- 单品热卖 -->
      <img :src="require('./imgs/h5_meizhuang_title_danpin_1.jpg')" class="title-danpin" >
      <ul class="hot-sale">
        <li class="hot-sale-item" v-for="(item,index) in hotSaleList" :key="index">
          <div class="goodsImg" @click="toDetail(item)">
            <img class="hot-sale-img" :src="hotSaleImgList[index].img" >
          </div>
          <div class="goods-info">
            <div class="name-box">
              <img class="price-label" :src="require('./imgs/h5_meizhuang_tag_shuang11.jpg')" >
              <span class="good-name">{{item.goods_name}}</span>
            </div>
            <div class="price-box">
              <span class="activity-price">￥{{item.activity_price}}</span>
              <span class="fuhao">￥</span>
              <span class="goods-price">{{item.goods_price}}</span>
            </div>
            <div class="btn-box">
              <img :src="require('./imgs/h5_meizhuang_button_fenxiang_1.png')" class="btn-share" @click="goodShare(item)" v-if="isShowShare" >
              <img :src="require('./imgs/h5_meizhuang_button_gouwuche_2.png')" class="btn-cart" @click="toGoodsCart(item)" >
            </div>
          </div>
        </li>
      </ul>

      <!-- 洁面护肤 精品面膜 个性彩妆 日用洗护 身体护理 -->
      <div id="classify" class="classify">
        <div class="fenleiTotal set-point" id="fenleiTotal" :class="{fixTop:isFix}">
          <ul>
            <li v-for="(item,index) in list" @click="toDown(index)" :key="index" :class="{active: index == selectedIndex }"> {{item}}</li>
          </ul>
        </div>
        <div class="fenleiTotal"></div>
        <ul>
          <li v-for="(item,index) in fenleiList" :key="index" class="single-fenlei" >
            <div  class="fixzz" :id="'fixzz'+ index"></div>
            <img :src="fenleiImgList[index].img" class="fenlei-title" >
            <swiper :options="swiperOption">
              <swiper-slide v-for="(val, idx) in item.list" :key="idx">
                <div class="goodsImg" @click="toDetail(val)">
                  <img :src="val.goods_main_photo" class="photo">
                </div>
                <div class="good-info">
                  <div class="price">
                      <span class="goods-price-val">￥{{val.activity_price}}</span>
                      <span class="activity-price-val">￥{{val.goods_price}}</span>
                  </div>
                  <div class="name">{{val.goods_name}}</div>
                  <div class="btn">
                    <img :src="require('./imgs/h5_meizhuang_button_fenxiang_3.png')" class="share" @click="goodShare(val)" v-if="isShowShare" >
                    <img :src="require('./imgs/h5_meizhuang_button_gouwuche_4.png')" class="cart" @click="toGoodsCart(val)" >
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="look-more">查看更多</swiper-slide>
            </swiper>
            <!-- <scroller lock-y :scrollbar-x=false>
              <div class="box">
                <div class="box-item" v-for="(val,index1) in item.list" :key="index1">
                  <div class="goodsImg" @click="toDetail(val)">
                    <img :src="val.goods_main_photo" class="photo" >
                  </div>
                  <div class="good-info">
                    <div class="price">
                        <span class="goods-price-val">￥{{val.activity_price}}</span>
                        <span class="activity-price-val">￥{{val.goods_price}}</span>
                    </div>
                    <div class="name">{{val.goods_name}}</div>
                    <div class="btn">
                      <img :src="require('./imgs/h5_meizhuang_button_fenxiang_3.png')" class="share" @click="goodShare(val)" v-if="isShowShare" >
                      <img :src="require('./imgs/h5_meizhuang_button_gouwuche_4.png')" class="cart" @click="toGoodsCart(val)" >
                    </div>
                  </div>
                </div>
                <div class="look-more" >
                  <div class="text">查看更多</div>
                </div>
              </div>
            </scroller> -->
          </li>
        </ul>
      </div>

      <!-- 活动会场入口 -->
      <div class="hot-list">
        <div class="hot-sales">
          <div class="jjbh" @click="toGoods(goodsList[0])">
            <img :src="require('./imgs/h5_meizhuang_entry_hufu_1.png')" class="jjbh-img" >
          </div>
          <div class="dqhj" @click="toGoods(goodsList[1])">
            <img :src="require('./imgs/h5_meizhuang_entry_riyongpin_2.png')" class="dqhj-img" >
          </div>
        </div>
        <div class="entrance-list">
          <div class="enter-zhc" @click="jumpPage('zhc.html')">
            <img :src="require('../../assets/lmfhc/h5_base_entry_zhuhuichang_1.png')" class="enter-zhc-img" >
          </div>
          <div class="enter-lmfhc">
            <div class="lmfhc-entrys1">
              <div class="enter-lmfhc1" @click="jumpPage('lmfhc-mzgh.html')">
                <img :src="require('../../assets/lmfhc/h5_base_entry_meizhuang_2.png')" >
              </div>
              <div class="enter-lmfhc2" @click="jumpPage('lmfhc-spsx.html')">
                <img :src="require('../../assets/lmfhc/h5_base_entry_shipin_3.png')" >
              </div>
              <div class="enter-lmfhc3" @click="jumpPage('lmfhc-yybj.html')">
                <img :src="require('../../assets/lmfhc/h5_base_entry_yingyang_4.png')" >
              </div>
            </div>
            <div class="lmfhc-entrys2">
              <div class="enter-lmfhc4" @click="jumpPage('lmfhc-xbps.html')">
                <img :src="require('../../assets/lmfhc/h5_base_entry_xiangbao_5.png')" >
              </div>
              <div class="enter-lmfhc5" @click="jumpPage('lmfhc-myet.html')">
                <img :src="require('../../assets/lmfhc/h5_base_entry_muyin_6.png')" >
              </div>
              <div class="enter-lmfhc6" @click="jumpPage('lmfhc-jjsh.html')">
                <img :src="require('../../assets/lmfhc/h5_base_entry_jiaju_7.png')" >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot-bar></foot-bar>
    <toast v-model="toastShow" :time= "2000" type="text" :is-show-mask= "true" position="middle" width="4rem">{{msg}}</toast>
    <BackTop></BackTop>
  </div>
</template>
<script>
import footBar from '@/components/foot-bar'
import BackTop from "@/components/back-top";
import { Scroller, Toast } from "vux";

export default {
  name: 'lmfhc-mzgh',
  components: {
    footBar: footBar,
    Scroller,
    Toast,
    BackTop
  },
  data() {
    return {
      hotSaleImgList: [
        { img: require('./imgs/mzgh_hotSale_04.jpg') },
        { img: require('./imgs/mzgh_hotSale_02.jpg') },
        { img: require('./imgs/mzgh_hotSale_01.jpg') },
        { img: require('./imgs/mzgh_hotSale_03.jpg') },
        { img: require('./imgs/mzgh_hotSale_05.jpg') }
      ],
      fenleiImgList: [
        { img: require('./imgs/h5_meizhuang_title_jiemian_2.jpg') },
        { img: require('./imgs/h5_meizhuang_title_mianmo_3.jpg') },
        { img: require('./imgs/h5_meizhuang_title_caizhuang_4.jpg') },
        { img: require('./imgs/h5_meizhuang_title_xihu_5.jpg') },
        { img: require('./imgs/h5_meizhuang_title_huli_6.jpg') }
      ],
      hotSaleList: [],
      fenleiList: [],
      list: ["洁面护肤", "精品面膜", "个性彩妆", "日用洗护", "身体护理"],
      selectedIndex: 0,
      isFix: false,
      config: {},
      goodsList: [],
      isShowShare: false,
      isShowCart: true,
      toastShow: false,
      msg: '',
      swiperOption: {
          slidesPerView: 3,
          freeMode: true,
        }
    }
  },
  created() {
    let self = this;
    this.$http.get("lmfhc-mzgh-config.json").then((result) => {
      this.globalData.base_url = result.body.config.base_url || 'http://m.7mall.cn';
      this.config = result.body.config;
      this.hotSaleList = this.config.hotSale;
      // console.log("this.hotSaleList", this.hotSaleList);
      this.fenleiList = this.config.fenlei;
      this.goodsList = this.config.ztdh;
      setTimeout(function() {
        self.setOnscroll();
      }, 1000)
    })
    self.$root.$on('CLIENT_PLAYER', function() {
      //版本低于2.2.0时，隐藏购物车按钮
      // console.log('seven--->>',self.globalData.vision);
      self.isShowCart = this.js2app.versionfunegt(self.globalData.vision, self.globalData.appAddCartVersion)
      // console.log("isShowCart",self.isShowCart)
    })
    self.$root.$on('WEB-LOADING', function(data) {
      // console.log("WEB-LOADING-data", data);
      self.msg = data.message;
      self.toastShow = data.toastIsShow;
    })
    self.$root.$on('WEB-LOADED', function(data) {
      // console.log('WEB-LOADED', data);
      self.msg = data.message;
      self.toastShow = data.toastIsShow;
      if (self.toastShow) {
        setTimeout(() => { self.toastShow = false; }, 1000);
      }
    })
  },
  methods: {
    showPosition (position) {
      this.position = position
      this.showPositionValue = true
    },
    toDown(index) {
      var dom = document.getElementById('fixzz' + index);
      dom.scrollIntoView(true);
    },
    setOnscroll() {
      let self = this;
      var appNode = document.getElementById("lmfhc-mzgh-page");
      var fenleiNodeList = document.getElementsByClassName("single-fenlei");
      var fenleiTop = document.getElementById("classify").offsetTop;
      var fenleiTotal = document.getElementById("fenleiTotal").clientHeight;
      appNode.onscroll = function() {
        var scrollt = this.scrollTop;
        if (this.scrollTop > fenleiTop) {
          self.isFix = true;
        } else {
          self.isFix = false;
        }
        for (var i = 0; i < fenleiNodeList.length; i++) {
          if (this.scrollTop >= fenleiNodeList[i].offsetTop + fenleiTop - fenleiTotal && this.scrollTop < fenleiNodeList[i].offsetTop + fenleiTop + fenleiNodeList[i].clientHeight-fenleiTotal) {
            self.selectedIndex = i;
          }
        }
      }
    },
    jumpPage(url) {
      var str = location.href;
      var index = str .lastIndexOf("\/");
      str = str.substring(index + 1, str.length);
      if(url == str){
        return;
      }
      location.href = url;
    },
    toDetail(item) {
      this.js2app.toDetail({ type: "0", id: item.id });
    },
    toGoods(item) {
      this.js2app.toDetail({ type: "0", id: item.id });
    },
    openPingpai(item) {
      this.js2app.toDetail({ type: "1", id: item.id });
    },
    //分享商品
    goodShare(item) {
      var shareData = {
        goodID: item.id,//商品id
        goodPhoto: item.goods_main_photo,//商品图片url
        type: '7',//分享和app交互类型 7
        isOnSale: '1',//是否是特卖商品
        goodPrice: item.goods_price,//商品价格
        goodCurrentPrice: item.activity_price,//特卖价格
        goodName: item.goods_name,//商品名称
        goodProfit: item.good_profit
      }
      console.log("shareData", shareData);
      this.js2app.toDetail(shareData);
    },
    //加入购物车
    toGoodsCart(item) {
      console.log("id",item.id)
      var wei_url = '/micro/index.html#/detail?shop_id=' + this.shop_id + '&goods_id=' + this.goods_id;
      if (this.isShowCart) {
        var params = {
          'type': 5,
          'shop_id': this.shop_id,
          'goods_id': item.id,
          'count': 1,
          'gsp': item.goods_gsp_id,
          'price': item.activity_price,
          'wei_url': wei_url,
          'area_id': 4521986
        }
      } else {
        var params = {
          'type': 0,
          'id': item.id
        }
      }
      console.log('params', params);
      this.js2app.toDetail(params);
    }
  }
}
</script>

<style lang="less">
@import '../../styles/reset.less';
@import '../../styles/global-style.less';
.lmfhc-mzgh-page {
  background-color: #f76a9e;
  overflow: auto;
  height: 100%;
  .bg1, .bg2, .bg3 {
    height: 201px;
  }
  .title-danpin {
    height: 62px;
  }
  .hot-sale {
    padding: 16px 12px;
    .hot-sale-item {
      margin-bottom: 26px;
      width: 100%;
      >img {
        width: 100%;
      }
      .hot-sale-img {
        width: 351px;
        height: 149px;
      }
      .goods-info {
        overflow: hidden;
        height: 124px;
        width: 351px;
        background-image: url(./imgs/h5_meizhuang_bg_pro_1.png);
        background-size: 100% 100%;
        .name-box {
          padding: 10px 13px 0;
          color: #484144;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          .price-label {
            vertical-align: top;
            width: 43px;
          }
          .good-name {
            font-size: 15px;
          }
        }
        .price-box {
          margin: 30px 0 0 13px;
          float: left;
          .activity-price {
            margin-right: 4px;
            color: #484144;
            letter-spacing: 0;
            font-size: 24px;
            text-align: left;
            line-height: 24px;
            letter-spacing: -1px;
          }
          .fuhao {
            margin-right: -7px;
            font-size: 14px;
            color: #8e8e8e;
            text-decoration: line-through;
            position: relative;
            bottom: 3px;
          }
          .goods-price {
            color: #8e8e8e;
            font-size: 14px;
            text-align: left;
            text-decoration: line-through;
            position: relative;
            bottom: 3px;
          }
        }
        .btn-box {
          margin: 25px 8px 0 0;
          float: right;
          >img {
            height: 34px;
          }
        }
      }
    }
  }
  .classify {
    width: 100%;
    position: relative;
    .fenleiTotal {
      width: 100%;
      height: 52px;
      ul {
        background: #e53574;
        overflow: hidden;
        li {
          float: left;
          width: 20%;
          height: 52px;
          line-height: 52px;
          text-align: center;
          font-size: 12px;
          color: #fff;
        }
        .active {
          background: #e84a82;
          color: #fff000;
        }
      }
    }
    .single-fenlei {
      height: 373px;
      .fenlei-title {
        margin-bottom: 22px;
        height: 62px;
      }
      // .box {
      //   width: 1610px;
      //   height: 248px;
      //   padding-left: 6px;
      // }
      .swiper-slide {
        width: 143px;
        height: 248px;
        float: left;
        margin-left: 6px;
        padding: 2px;
        background: url('./imgs/h5_meizhuang_bg_pro_2.jpg');
        background-size: 100% 100%;
      }
      .good-info {
        margin-top: 20px;
      }
      // .box-item {
      //   width: 143px;
      //   height: 248px;
      //   float: left;
      //   margin-left: 6px;
      //   padding: 2px;
      //   background: url('./imgs/h5_meizhuang_bg_pro_2.jpg');
      //   background-size: 100% 100%;
      // }
      .photo {
        width: 140px;
      }
      .price {
        width: 140px;
        height: 30px;
        line-height: 30px;
        text-align: center;
      }
      .goods-price-val {
        font-size: 15px;
        color: #fff600;
      }
      .activity-price-val {
        font-size:10px;
        color: #fffefe;
        text-decoration: line-through;
      }
      .name {
        width: 140px;
        height: 37px;
        line-height: 37px;
        padding: 0 12px;
        font-size: 12px;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .btn {
        text-align: center;
      }
      .share {
        width: 46px;
        margin-left: 7px;
      }
      .cart {
        width: 79px;
      }
      .look-more {
        width: 97px;
        height: 248px;
        float: left;
        margin-left: 4px;
        background: #f24987;
        padding: 118px 24px;
        color: #fff;
        font-size: 12px;
      }
    }
    .fixTop {
      position: fixed !important;
      top: 0 !important;
      left: 0;
      z-index: 100;
    }
    .set-point {
      position: absolute;
    }
    .fixzz {
      position: relative;
      top: -52px;
    }
  }
  .hot-list {
    padding: 0 12px 48px;
    .hot-sales {
      position: relative;
      overflow: hidden;
      .jjbh {
        overflow: hidden;
        padding-right: 1.5px;
        float: left;
        width: 50%;
        img {
          width: 174px;
        }
        .jjbh-img {
          height: 119px;
        }
      }
      .dqhj {
        overflow: hidden;
        padding-left: 1.5px;
        float: left;
        width: 50%;
        img {
          width: 174px;
        }
        .dqhj-img {
          height: 119px;
        }
      }
    }
    .entrance-list {
      padding-top: 3px;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      .enter-zhc {
        img {
          width: 78px;
        }
        .enter-zhc-img {
          height: 129px;
        }
      }
      .enter-lmfhc {
        img {
          width: 88px;
        }
        .lmfhc-entrys1 {
          overflow: hidden;
          margin-bottom: 3px;
          :nth-child(even) {
            margin: 0 3px;
          }
          .enter-lmfhc1,
          .enter-lmfhc2,
          .enter-lmfhc3 {
            height: 63px;
            float: left;
          }
        }
        .lmfhc-entrys2 {
          overflow: hidden;
          :nth-child(even) {
            margin: 0 3px;
          }
          .enter-lmfhc4,
          .enter-lmfhc5,
          .enter-lmfhc6 {
            height: 63px;
            float: left;
          }
        }
      }
    }
  }
}
</style>
